import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useKeyboard } from "@/providers/keyboard-provider";
import { useAppDispatch } from "@/store/hook";
import { addRoom } from "@/store/features/roomListSlice";

const recommendedList = [
  "bedroom",
  "master bedroom",
  "dining room",
  "toilet",
  "kids' room",
  "study",
  "library",
  "balcony",
  "work shop",
  "bathroom",
  "backyard",
];

const AppModal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { input, onChangeInput, setKeyboardVisible } = useKeyboard();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isDialogOpen) {
      setKeyboardVisible(true);
    } else {
      setKeyboardVisible(false);
    }
  }, [isDialogOpen]);

  const createRoomHandler = () => {
    if (input.trim() !== "") {
      dispatch(addRoom(input));
      setIsDialogOpen(false);
      onChangeInput("");
    }
  };

  return (
    <div>
      {/* Button */}
      <div
        className="bg-blue-600/70 border border-blue-600/80 cursor-pointer hover:bg-blue-600/60 px-2 py-1 rounded-md w-fit text-white flex gap-2"
        onClick={() => setIsDialogOpen(true)}
      >
        Create Room
        <Plus />
      </div>

      {/* Dialog Modal Content */}
      <div
        className={cn(
          "w-full h-screen bg-slate-800/70 absolute top-0 left-0",
          isDialogOpen ? "" : "hidden"
        )}
      >
        <Card className="mx-auto mt-20 w-[500px] p-3 gap-2">
          <CardHeader className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Create Room!</h1>
            <Button
              variant={"ghost"}
              className="cursor-pointer"
              onClick={() => {
                onChangeInput("");
                setIsDialogOpen(false);
              }}
            >
              <X />
            </Button>
          </CardHeader>
          <hr />
          <CardContent>
            <Input
              ref={inputRef}
              placeholder="Living Room"
              className="mb-2"
              value={input}
              onChange={(e) => onChangeInput(e.currentTarget.value)}
            />
            {recommendedList.map((list, index) => (
              <Button
                type="button"
                key={index}
                onClick={() => onChangeInput(list)}
                className="cursor-pointer inline-block mx-2 my-1 py-0.5 px-2 border"
                variant={"ghost"}
              >
                {list}
              </Button>
            ))}
            <div
              className="bg-green-600 hover:bg-green-600/90 text-white rounded-md py-2 text-xl text-center cursor-pointer my-3 font-semibold"
              onClick={createRoomHandler}
            >
              Create Room
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppModal;

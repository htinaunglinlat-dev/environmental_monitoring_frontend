import { useAppDispatch } from "@/store/hook";
import { useState, type FormEventHandler } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, X } from "lucide-react";
import { addRoom } from "@/store/features/roomListSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogDescription } from "@radix-ui/react-dialog";
// import { AppKeyboardWrapper } from "@/components";

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

const AppDialog = () => {
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [roomInput, setRoomInput] = useState("");

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    if (roomInput.trim() !== "") {
      dispatch(addRoom(roomInput));
      setRoomInput("");
    }
    setIsDialogOpen(false);
  };

  const changeInputHandler = (value: string) => {
    setRoomInput(value);
  };

  return (
    <Dialog open={isDialogOpen}>
      <div
        className="bg-blue-600/70 border border-blue-600/80 cursor-pointer hover:bg-blue-600/60 w-fit flex py-1 px-2 rounded-md text-white"
        onClick={() => setIsDialogOpen(true)}
      >
        Create Room
        <Plus />
      </div>
      <DialogContent onPointerDownOutside={() => setIsDialogOpen(false)}>
        <DialogHeader className="flex w-full">
          <DialogTitle className="flex w-full justify-between item-center">
            <div className="pt-3">Create New Room!</div>
            <Button
              variant={"ghost"}
              onClick={() => setIsDialogOpen(false)}
              className="cursor-pointer"
            >
              <X />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <hr />
        <form onSubmit={submitHandler}>
          <Input
            placeholder="Enter room name"
            autoFocus
            value={roomInput}
            onChange={(e) => setRoomInput(e.currentTarget.value)}
            className="mb-2"
            onKeyUp={(event) => {
              console.log(event.key)
              if(event.key === "Enter") {
                submitHandler(event)
              }
            }}
          />
          <h1 className="text-muted-foreground my-1 ml-2">Recommended Lists</h1>
          {recommendedList.map((list, index) => (
            <Button
              type="button"
              key={index}
              onClick={() => changeInputHandler(list)}
              // className="cursor-pointer inline-block mx-2 my-1 bg-blue-600/80 hover:bg-blue-600/90 py-0.5 px-2"
              className="cursor-pointer inline-block mx-2 my-1 py-0.5 px-2 border"
              variant={"ghost"}
            >
              {list}
            </Button>
          ))}
          <div className="flex justify-end my-3">
            <div
              className="bg-green-600 hover:bg-green-600/70 border cursor-pointer w-full py-2 rounded-md text-white text-center text-lg"
              onClick={submitHandler}
            >
              Create Room
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;

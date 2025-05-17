import { Button } from "@/components/ui/button";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  useRef,
  useState,
  type FormEventHandler,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addRoom } from "@/store/features/roomListSlice";
import RoomCard from "./RoomCard";
import { Plus } from "lucide-react";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const roomList = useAppSelector((state) => state.roomList);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    if (inputRef.current?.value.trim()) {
      console.log(inputRef.current.value);
      dispatch(addRoom(inputRef.current?.value.toLowerCase()));
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="p-4">
      <Dialog open={isDialogOpen}>
        <Button
          className="bg-blue-700 hover:bg-blue-6100 cursor-pointer"
          onClick={() => setIsDialogOpen(true)}
        >
          Create Room
          <Plus />
        </Button>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Room!</DialogTitle>
          </DialogHeader>
          <DialogDescription />
          <hr />
          <form onSubmit={submitHandler}>
            <Input placeholder="Enter room name" autoFocus ref={inputRef} />
            <div className="flex justify-end my-3">
              <Button type="submit" className="cursor-pointer">
                Create
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <hr className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {Object.values(roomList).map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Home;

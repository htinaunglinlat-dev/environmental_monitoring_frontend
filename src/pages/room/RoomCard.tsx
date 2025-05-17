import type { RoomType } from "@/store/features/roomListSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import type { MouseEventHandler } from "react";

interface Props {
  room: RoomType;
}

const RoomCard: React.FC<Props> = ({ room }) => {
  const navigate = useNavigate();
  const clickHandlerRoom = () => {
    navigate(`/rooms/${room.roomName}`);
  };

  const clickHandlerDevice: MouseEventHandler = (e) => {
    e.stopPropagation();
    navigate(`/rooms/${room.roomName}/devices/${room.deviceList}`);
  };
  return (
    <Card className="cursor-pointer" onClick={clickHandlerRoom}>
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="font-bold text-xl">{room.roomName}</CardTitle>
        <ChevronRight />
      </CardHeader>
      <CardContent>
        <h1 className="text-muted-foreground font-bold mb-2">Devices</h1>
        {room.deviceList.length ? (
          <div className="space-x-3">
            {room.deviceList.map((list, index) => (
              <div
                onClick={clickHandlerDevice}
                key={index}
                className="bg-blue-600/70 border border-blue-600/80 0 px-2 py-1 inline-block rounded-md cursor-pointer text-white  transition-all hover:underline"
              >
                {list}
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-center text-muted-foreground font-bold">
            No devices found.
          </h1>
        )}
      </CardContent>
    </Card>
  );
};

export default RoomCard
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/store/hook";
import { ChevronRight, Pencil } from "lucide-react";
import { Link, useParams } from "react-router";

const badgeList = [
  { value: "temperature", color: "bg-red-100 text-red-700" },
  { value: "humidity", color: "bg-blue-100 text-blue-700" },
  { value: "air quality", color: "bg-purple-100 text-purple-700" },
  { value: "light control", color: "bg-yellow-100 text-yellow-700" },
];

const Device = () => {
  const roomList = useAppSelector((state) => state.roomList);
  console.log(roomList)

  const { roomId } = useParams();

  const deviceList = roomId ? roomList[roomId].deviceList : [] as string[];

  return (
    <div className="p-4">
      <Card className="max-w-96">
        <CardHeader className="flex  justify-between items-center gap-4">
          <CardTitle className="capitalize">
            <h1 className="font-bold text-muted-foreground">Room Name:</h1>
            <div className="text-2xl">{roomId}</div>
          </CardTitle>
          <Button className="cursor-pointer transition" variant={"ghost"}>
            <Pencil />
          </Button>
        </CardHeader>
      </Card>
      <h1 className="text-muted-foreground/70 font-bold text-md leading-loose">
        Devices
      </h1>
      <div>
        {deviceList.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 3xl:grid-cols-4">
            {deviceList.map((device) => (
              <Link to={`/rooms/${roomId}/devices/${device}`} key={device}>
                <Card key={device}>
                  <CardHeader className="flex justify-between">
                    <h1 className="text-primary font-bold">Device ID: {device}</h1>
                    <ChevronRight />
                  </CardHeader>
                  <CardContent>
                    <ul className="gap-3">
                      {badgeList.map((item, index) => (
                        <li
                          className={`${item.color} text-center py-1 px-2 capitalize rounded-md m-2 my-1 inline-block`}
                          key={index}
                        >
                          {item.value}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="h-32 flex justify-center items-center">
            <h1 className="text-xl text-muted-foreground font-bold">
              No devices found.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Device;

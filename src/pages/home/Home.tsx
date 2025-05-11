import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAppSelector } from "@/store/hook";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const badgeList = [
  { value: "temperature", color: "bg-red-100 text-red-700" },
  { value: "humidity", color: "bg-blue-100 text-blue-700" },
  { value: "air pressure", color: "bg-purple-100 text-purple-700" },
  { value: "led control", color: "bg-yellow-100 text-yellow-700" },
];

const Home = () => {
  const deviceList = useAppSelector((state) => state.devices.lists);
  return (
    <div className="p-2">
      <h1 className="text-muted-foreground/70 font-bold text-md leading-loose">
        Devices
      </h1>
      <div>
        {deviceList.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 3xl:grid-cols-4">
            {deviceList.map((item) => (
              <Link to={`/${item}`} key={item}>
                <Card key={item}>
                  <CardHeader className="flex justify-between">
                    <h1>Device ID: {item}</h1>
                    <ChevronRight />
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-3 gap-3">
                      {badgeList.map((item, index) => (
                        <li
                          className={`${item.color} text-center py-1 px-2 capitalize rounded-md max-w-32`}
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

export default Home;

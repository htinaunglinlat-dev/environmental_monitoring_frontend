import { AppRadialChart } from "@/components";
import { getSocket } from "@/socket/socket";
import { toggleLedStatus } from "@/store/features/ledSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type Props = {
  deviceId: string;
};

const SensorValueSection: React.FC<Props> = ({}) => {
  const ledStatus = useAppSelector((state) => state.led.status);
  const [sensorData, setSensorData] = useState({
    air_quality: 0,
    humidity: 0,
    temperature: 0,
  });

  const dispatch = useAppDispatch();

  const { deviceId } = useParams();
  console.log("deviceID", deviceId);

  useEffect(() => {
    const socket = getSocket();
    socket.on("datas", (sensorData) => {
      if (deviceId === sensorData.device_id) {
        console.log(sensorData);
        setSensorData({
          air_quality: sensorData.air_quality,
          humidity: sensorData.humidity,
          temperature: sensorData.temperature,
        });
      }

      if(ledStatus[deviceId!] === sensorData.LED_status && sensorData.device_id === deviceId) {
        dispatch(toggleLedStatus({deviceId: deviceId!}))
      }
    });

    return () => {
      socket.off("datas")
    }
  }, []);

  return (
    <>
      <h1 className="text-md text-muted-foreground font-semibold pb-2">
        Displaying Sensor Values
      </h1>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 3xl:grid-cols-4 p-2 my-2">
        <div className="col-span-1 flex justify-center">
          <AppRadialChart
            chartData={sensorData.temperature}
            label={"Temperature"}
            minValue={-80}
            maxValue={80}
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <AppRadialChart
            chartData={sensorData.humidity}
            label={"Humidity"}
            minValue={-800}
            maxValue={1300}
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <AppRadialChart
            chartData={sensorData.air_quality}
            label={"AirQuality"}
            minValue={0}
            maxValue={500}
          />
        </div>
      </div>
    </>
  );
};

export default SensorValueSection;

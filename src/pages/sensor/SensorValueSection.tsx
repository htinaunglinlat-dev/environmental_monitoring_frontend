import { AppRadialChart } from "@/components";
import { getSocket } from "@/socket/socket";
import { setLEDStatus } from "@/store/features/ledSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface SensorDataType {
  air_quality: null | number;
  humidity: null | number;
  temperature: null | number;
}

const SensorValueSection = () => {
  const { deviceId } = useParams();
  const dispatch = useAppDispatch();

  const ledList = useAppSelector((state) => state.led.list);
  const [sensorData, setSensorData] = useState<SensorDataType>({
    air_quality: null,
    humidity: null,
    temperature: null,
  });

  useEffect(() => {
    const socket = getSocket();
    socket.on("datas", (sensorData) => {
      if (deviceId === sensorData.device_id) {
        // console.log(sensorData);
        setSensorData({
          air_quality: sensorData.air_quality,
          humidity: sensorData.humidity,
          temperature: sensorData.temperature,
        });
      }
      
      // if(deviceId === sensorData.device_id) {
      //   console.log(sensorData.LED_status.concat(` ${sensorData.device_id}`))
      // }

      if(ledList[sensorData.device_id] !== sensorData.LED_status) {
        dispatch(setLEDStatus({deviceId: sensorData.device_id, status: sensorData.LED_status}))
      }
    });

    return () => {
      socket.off("datas");
    };
  }, []);

  return (
    <>
      <h1 className="text-md text-muted-foreground font-semibold pb-2">
        Displaying Temperature Values
      </h1>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 3xl:grid-cols-4 p-2 my-2">
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

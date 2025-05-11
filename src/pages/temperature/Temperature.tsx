import { useParams } from "react-router";
import SensorControlSection from "./SensorControlSection";
import SensorValueSection from "./SensorValueSection";

export type SensorDataType = {
  _id:         string;
  device_id:   string;
  temperature: number;
  humidity:    number;
  air_quality: number;
  LED_status:  "ON" | "OFF";
  timestamp:   string;
};

const Temperature = () => {

  const { deviceId } = useParams();
  return (
    <div className="p-2">
      {/* LED */}
      <SensorControlSection deviceId={deviceId!} />
      {/* temperature,  */}
      <SensorValueSection deviceId={deviceId!} />
    </div>
  );
};

export default Temperature;

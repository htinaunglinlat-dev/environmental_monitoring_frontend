import { AppLedToggle } from "@/components";
import { getSocket } from "@/socket/socket";
// import { useAppSelector } from "@/store/hook";
import { Lightbulb } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";

// type Props = {
//   deviceId: string;
// };

const LedControlSection = () => {
  const { deviceId } = useParams()
  // const ledList = useAppSelector((state) => state.led.list);

  const [isLed1On, setIsLed1On] = useState<"ON" | "OFF">("OFF");
  const [isLed2On, setIsLed2On] = useState(false);

  const led2Handler = () => {
    setIsLed2On(!isLed2On);
  };

  const handleLedToggle = () => {
    const socket = getSocket();
    // value: ledList[deviceId!] === "ON" ? "OFF" : "ON",
    socket.emit("send_to_esp32", {
      device_id: deviceId!,
      value: isLed1On === "ON" ? "OFF" : "ON",
    });
    setIsLed1On(isLed1On === "ON" ? "OFF" : "ON")
    console.log("emit LED: ", isLed1On === "ON" ? "OFF" : "ON")
  };

  return (
    <div className="mb-2">
      <h1 className="text-md text-muted-foreground font-semibold pb-2">
        Controlling LEDs
      </h1>
      <div className="grid grid-cols-6">
        <AppLedToggle
          icon={Lightbulb}
          // status={ledList[deviceId!] === "ON" ? true : false}
          status={isLed1On === "ON" ? true : false}
          onClick={handleLedToggle}
          LEDName={`LED_1`}
        />
        <AppLedToggle
          icon={Lightbulb}
          status={isLed2On}
          onClick={led2Handler}
          LEDName={`LED_2`}
        />
      </div>
    </div>
  );
};

export default LedControlSection;

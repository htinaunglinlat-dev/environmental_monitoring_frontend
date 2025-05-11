import AppToggle from "@/components/AppToggle";
import { getSocket } from "@/socket/socket";
import { toggleLedStatus } from "@/store/features/ledSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Lightbulb } from "lucide-react";
import type React from "react";

type Props = {
  deviceId: string
}

const SensorControlSection: React.FC<Props> = ({ deviceId }) => {

  const ledStatus = useAppSelector(state => state.led.status)
  const dispatch = useAppDispatch()

  const handleLedToggle = () => {
    const socket = getSocket()
    // setIsLedOn((prev) => !prev);
    socket.emit("send_to_esp32", {
      device_id: deviceId!,
      value: ledStatus[deviceId!] === "ON" ? "OFF" : "ON",
    });
    dispatch(toggleLedStatus({deviceId}))
  };

  return (
    <>
      <h1 className="text-md text-muted-foreground font-semibold pb-2">
        Controlling Sensors
      </h1>
      <hr className="" />
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 3xl:grid-cols-4 p-2 my-2">
        <AppToggle
          icon={Lightbulb}
          status={ledStatus[deviceId!] === "ON" ? true : false}
          onClick={handleLedToggle}
        />
      </div>
    </>
  );
};

export default SensorControlSection;

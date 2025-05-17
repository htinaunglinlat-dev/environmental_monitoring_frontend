import AppSwitchToggle from "@/components/AppSwitchToggle";
import { Settings } from "lucide-react";
// import { getSocket } from "@/socket/socket";
// import { toggleLedStatus } from "@/store/features/ledSlice";
// import { useAppDispatch, useAppSelector } from "@/store/hook";

const SwitchControlSection = () => {

  // const ledStatus = useAppSelector((state) => state.led.status);
    // const dispatch = useAppDispatch();

    // const [s]
  
    const handleSwitchToggle = () => {
      // const socket = getSocket();
      // // setIsLedOn((prev) => !prev);
      // socket.emit("send_to_esp32", {
      //   device_id: deviceId!,
      //   value: ledStatus[deviceId!] === "ON" ? "OFF" : "ON",
      // });
      // dispatch(toggleLedStatus({ deviceId }));
    };

  return (
    <div className="flex-1">
      <h1 className="text-md text-muted-foreground font-semibold pb-2">
        Controlling Switches
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <AppSwitchToggle icon={Settings} onClick={handleSwitchToggle} status={true} pin={1}/>
        <AppSwitchToggle icon={Settings} onClick={handleSwitchToggle} status={true} pin={1}/>
      </div>
    </div>
  )
}

export default SwitchControlSection
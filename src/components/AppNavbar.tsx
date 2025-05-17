// import { Moon, Sun } from "lucide-react";
// import { Button } from "./ui/button";
// import { useTheme } from "../providers/theme-provider";
// import { SidebarTrigger } from "./ui/sidebar";

import { getSocket } from "@/socket/socket";
import { addDevicesToRoom } from "@/store/features/roomListSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect, useState } from "react";

const AppNavbar = () => {
  // const { theme, setTheme } = useTheme();

  // const toggleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  const roomList = useAppSelector((state) => state.roomList);
  const dispatch = useAppDispatch();
  const [socketStatus, setSocketStatus] = useState<
    "connected" | "disconnected" | "idle"
  >();

  useEffect(() => {
    const socket = getSocket();

    const handleConnect = () => setSocketStatus("connected");
    const handleDisconnect = () => setSocketStatus("disconnected");

    // optional: listen while still connecting
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("connect_error", handleDisconnect);
    if(socket.connected) {
      handleConnect()
    }
    if(socket.disconnected) {
      handleDisconnect
    }

    socket.on("devices", (newDeviceList) => {
      // console.log("devices is emitted.");
      // To prevent dispatching the redux state for every event emit from server

      // console.log('redux state', roomList["living room"].deviceList.length)
      // console.log('new device', newDeviceList.length)
      if (roomList["living room"].deviceList.length !== newDeviceList.length) {
        // console.log("dispatching event happen.")
        dispatch(
          addDevicesToRoom({
            deviceList: newDeviceList,
            roomName: "living room".toLowerCase(),
          })
        );
      }
    });

    return () => {
      socket.off("devices");
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleDisconnect);
    };
  }, [roomList["living room"].deviceList.length]);
  /* 
      [currentDeviceList] is usage since the callback only store the currentDeviceList as previous value 
      and to prevent this, re-declaration is happen for even changes on currentDeviceLists
      */

  return (
    <nav className="flex h-12 justify-between items-center border-b border-b-foreground-muted px-4">
      {/* <div>
        <SidebarTrigger className="block md:hidden" />
      </div> */}
      <div></div>
      {/* <div>
        <Button variant={"outline"} size="icon" onClick={toggleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div> */}
      <div className="flex gap-2 items-center mr-20">
        {/* <div>Socket Status: </div> */}
        <div>
          {socketStatus === "connected" ? (
            <div className="bg-green-600 text-white py-0.5 px-2 rounded-md">CONNECTED</div>
          ) : socketStatus === "disconnected" ? (
            <div className="bg-red-600 text-white py-0.5 px-2 rounded-md">DISCONNECTED</div>
          ) : (
            <div className="bg-slate-500 text-white py-0.5 px-2 rounded-md">CONNECTING...</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;

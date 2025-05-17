import { ChevronDown } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink, useNavigate, useParams } from "react-router";
import { useAppSelector } from "@/store/hook";
import type { RoomType } from "@/store/features/roomListSlice";

const AppBreadCrumb = () => {
  // const deviceList = useAppSelector((state) => state.devices.lists);
  const roomList = useAppSelector((state) => state.roomList)

  const { deviceId, roomId } = useParams<{
    deviceId: string;
    roomId: string;
  }>();

  console.log("deviceId", deviceId)
  console.log("roomId", roomId)

  return (
    <Breadcrumb className="px-2 py-1 bg-secondary w-fit rounded-xs my-2 ml-3">
      <BreadcrumbList>
        <AppBreadCrumbLists
          deviceId={deviceId}
          roomId={roomId}
          roomList={roomList}
        />
      </BreadcrumbList>
    </Breadcrumb>
  );
};

type AppBreadCrumbListsProps = {
  deviceId: string | undefined;
  roomId: string | undefined;
  roomList: Record<string, RoomType>;
};

const AppBreadCrumbLists: React.FC<AppBreadCrumbListsProps> = ({
  deviceId,
  roomId,
  roomList,
}) => {
  const navigate = useNavigate();
  const handleRoomSelect = (roomId: string) => {
    navigate(`/rooms/${roomId}`);
  };
  const handleDeviceSelect = (deviceId: string) => {
    navigate(`/rooms/${roomId}/devices/${deviceId}`)
  }
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <NavLink to={"/"}>Home</NavLink>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {roomId && (
        <>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                {roomId}
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {Object.values(roomList).map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    onSelect={() => handleRoomSelect(item.roomName)}
                  >
                    {item.roomName}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          {deviceId && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    {deviceId}
                    <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {roomList[roomId!]?.deviceList.map((device, index) => (
                      <DropdownMenuItem
                        key={index}
                        onSelect={() => handleDeviceSelect(device)}
                      >
                        {device}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
            </>
          )}
        </>
      )}
    </>
  );
};

/*
{path !== "/" && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  {deviceId}
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {deviceList.map((item) => (
                    <DropdownMenuItem
                      key={item}
                      onSelect={() => onSelect(item)}
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </>
*/

export default AppBreadCrumb;

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getSocket } from "@/socket/socket";
import { addDeviceCompletely } from "@/store/features/deviceSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { NavLink } from "react-router";
import AppSidebarSubItem from "./AppSidebarSubItem";

function AppSidebar() {
  console.log("App side bar is rendered.");

  const currentDeviceList = useAppSelector((state) => state.devices.lists);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = getSocket();

    socket.on("devices", (newDeviceList) => {
      dispatch(addDeviceCompletely(newDeviceList))
    });

    return () => {
      socket.off("devices");
    };
  }, []);

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to={"/"}>Home</NavLink>
                </SidebarMenuButton>
                {currentDeviceList.map((list) => (
                  <AppSidebarSubItem key={list} deviceId={list} />
                ))}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;

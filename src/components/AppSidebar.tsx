// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import { getSocket } from "@/socket/socket";
// // import { addDeviceCompletely } from "@/store/features/deviceSlice";
// import { useAppDispatch, useAppSelector } from "@/store/hook";
// import { useEffect } from "react";
// import { NavLink } from "react-router";
// import AppSidebarSubItem from "./AppSidebarSubItem";

// function AppSidebar() {
//   console.log("App side bar is rendered.");

//   const currentDeviceList = useAppSelector((state) => state.devices.lists);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const socket = getSocket();

//     socket.on("devices", (newDeviceList) => {
//       console.log("devices is emitted.")
//       // To prevent dispatching the redux state for every event emit from server
//       if (currentDeviceList.length === newDeviceList.length) {
//         const validDeviceList = newDeviceList.map((list) =>
//           currentDeviceList.includes(list)
//         );
//         // [true, false, true] true = valid and keep, false = invalid and remove

//         // console.log("validDeviceLists", validDeviceList)

//         if (!validDeviceList.includes(false)) {
//           // console.log("changes is not found");
//           return;
//         }
//       }

//       // console.log("dispatching event happen.")
//       dispatch(addDeviceCompletely(newDeviceList));
//     });

//     return () => {
//       socket.off("devices");
//     };
//   }, [currentDeviceList]);
//   /* 
//   [currentDeviceList] is usage since the callback only store the currentDeviceList as previous value 
//   and to prevent this, re-declaration is happen for even changes on currentDeviceLists
//   */

//   return (
//     <Sidebar>
//       <SidebarHeader />
//       <SidebarContent>
//         <SidebarGroup className="p-0">
//           <SidebarGroupContent>
//             <SidebarMenu>
//               <SidebarMenuItem className="gap-3">
//                 <SidebarGroupLabel>
//                   <NavLink to={"/"}>Home</NavLink>
//                 </SidebarGroupLabel>
//                 {currentDeviceList.map((list) => (
//                   <AppSidebarSubItem key={list} deviceId={list} />
//                 ))}
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>

//         <SidebarGroup />
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   );
// }

// export default AppSidebar;

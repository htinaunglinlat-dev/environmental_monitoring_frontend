import { NavLink, useParams } from "react-router";
import {
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";

const AppSidebarSubItem: React.FC<{ deviceId: string }> = ({ deviceId: id }) => {

  const {deviceId} = useParams()

  return (
    <SidebarMenuSub>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton asChild>
          <NavLink
            to={`/${id}`}
            className={`${deviceId === id ? "bg-blue-500 text-white shadow-md hover:bg-blue-500! hover:text-white" : ""}`}
          >
            {id}
          </NavLink>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    </SidebarMenuSub>
  );
};

export default AppSidebarSubItem;

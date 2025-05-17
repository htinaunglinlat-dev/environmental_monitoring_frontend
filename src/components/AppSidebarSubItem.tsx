import { NavLink, useParams } from "react-router";
import {
  SidebarMenuButton,
} from "./ui/sidebar";
import { cn } from "@/lib/utils";

const AppSidebarSubItem: React.FC<{ deviceId: string }> = ({
  deviceId: id,
}) => {
  const { deviceId } = useParams();

  return (
    <SidebarMenuButton asChild>
      <NavLink
        to={`/${id}`}
        className={cn(
          "text-md! rounded-none py-5 font-semibold",
          id === deviceId
            ? "bg-blue-300/80 hover:bg-blue-300/60! text-black hover:text-black! border-r-6 border-r-blue-500"
            : ""
        )}
      >
        {id}
      </NavLink>
    </SidebarMenuButton>
  );
}

export default AppSidebarSubItem;

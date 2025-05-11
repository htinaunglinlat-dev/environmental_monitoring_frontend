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
import { NavLink, useLocation, useNavigate, useParams } from "react-router";
import { useAppSelector } from "@/store/hook";

const AppBreadCrumb = () => {
  const navigate = useNavigate();

  const deviceList = useAppSelector((state) => state.devices.lists);

  const { deviceId } = useParams<{ deviceId: string }>();

  // console.log("deviceId", deviceId);

  const { pathname } = useLocation();
  // console.log("location", location.pathname);

  const handleDeviceSelect = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <Breadcrumb className="px-2 py-1 bg-secondary w-fit rounded-xs my-2 ml-3">
      <BreadcrumbList>
        <AppBreadCrumbLists
          path={pathname}
          deviceId={deviceId!}
          deviceList={deviceList}
          onSelect={handleDeviceSelect}
        />
      </BreadcrumbList>
    </Breadcrumb>
  );
};

type AppBreadCrumbListsProps = {
  path: string;
  deviceId: string;
  deviceList: string[];
  onSelect: (id: string) => void;
};

const AppBreadCrumbLists: React.FC<AppBreadCrumbListsProps> = ({
  path,
  deviceId,
  deviceList,
  onSelect,
}) => {
  // if(path.startsWith("/temperature"))
  if (path.startsWith("/")) {
    return (
      <>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <NavLink to={"/"}>Home</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
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
        )}
      </>
    );
  }

  return null
};

export default AppBreadCrumb;

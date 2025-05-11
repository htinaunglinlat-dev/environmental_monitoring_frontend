import { Outlet } from "react-router"
import { AppBreadCrumb, AppNavbar, AppSidebar, AppSocket } from "../components"
import { SidebarProvider } from "@/components/ui/sidebar"

function AppLayout() {
  console.log("App layout is rendered")
  return (
    <SidebarProvider open={true}>
      <AppSidebar />
      <main className="w-full">
        <AppNavbar />
        <AppBreadCrumb />
        <hr />
        <AppSocket />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default AppLayout
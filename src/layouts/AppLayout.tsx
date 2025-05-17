import { Outlet } from "react-router"
import { AppBreadCrumb, AppNavbar } from "../components"
// import { SidebarProvider } from "@/components/ui/sidebar"

function AppLayout() {
  console.log("App layout is rendered")
  return (
    // <SidebarProvider open={true}>
      // <AppSidebar />
      <main className="w-full min-h-screen">
        <AppNavbar />
        <AppBreadCrumb />
        <hr />
        {/* <AppSocket /> */}
        <Outlet />
      </main>
    // </SidebarProvider>
  )
}

export default AppLayout
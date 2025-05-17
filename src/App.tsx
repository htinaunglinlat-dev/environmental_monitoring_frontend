import { ThemeProvider } from "./providers/theme-provider";

import { createBrowserRouter, RouterProvider } from "react-router";
import { AppLayout } from "./layouts/index";
import { DevicePage, NotFoundPage, RoomPage, SensorDataPage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Temperature from "./pages/temperature/Temperature";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: RoomPage,
        errorElement: (
          <h1 className="min-h-screen flex justify-center items-center bg-background">
            Error occurred. Look console.
          </h1>
        ),
      },
      {
        path: "/:id",
        Component: Temperature
      },
      {
        path: "/rooms/:roomId",
        Component: DevicePage,
      },
      {
        path: "/rooms/:roomId/devices/:deviceId",
        Component: SensorDataPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

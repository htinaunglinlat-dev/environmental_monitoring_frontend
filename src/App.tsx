import { ThemeProvider } from "./providers/theme-provider";

import { createBrowserRouter, RouterProvider } from "react-router";
import { AppLayout } from "./layouts/index";
import {
  DevicePage,
  LoginPage,
  NotFoundPage,
  RoomPage,
  SensorDataPage,
} from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Temperature from "./pages/temperature/Temperature";
import { AppKeyboard } from "./components";
import { KeyboardProvider } from "./providers/keyboard-provider";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    errorElement: (
      <h1 className="min-h-screen flex justify-center items-center bg-background">
        Error occurred. Look console.
      </h1>
    ),
    children: [
      {
        path: "/",
        Component: RoomPage,
      },
      {
        path: "/keyboard",
        Component: AppKeyboard,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/:id",
        Component: Temperature,
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
      <KeyboardProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </KeyboardProvider>
    </ThemeProvider>
  );
}

export default App;

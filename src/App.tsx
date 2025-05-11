import { ThemeProvider } from './providers/theme-provider'
// import ReactRouterProvider from './routes'

import { createBrowserRouter, RouterProvider } from "react-router";
// import { AppLayout } from "../layouts";
import { AppLayout } from "./layouts/index"
import NotFound from './pages/notFound/NotFound';
import { HomePage } from './pages';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Temperature from './pages/temperature/Temperature';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <h1 className='min-h-screen flex justify-center items-center bg-background'>Error occurred. Look console. </h1>,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/:deviceId",
        element: <Temperature />,
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ThemeProvider>
  )
}

export default App

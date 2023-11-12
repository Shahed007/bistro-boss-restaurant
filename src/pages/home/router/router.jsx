import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../layout/MainLayout/MainLayout";
import Home from "../Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;

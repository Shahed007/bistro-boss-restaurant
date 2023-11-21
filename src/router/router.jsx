import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/home/Home";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import Dashboard from "../layout/Dashboard/Dashboard";
import UserHome from "../layout/Dashboard/rightSideContent/guest/UserHome";
import AdminDashboard from "../layout/Dashboard/adminDashboard/AdminDashboard";
import AdminHome from "../layout/Dashboard/adminDashboard/AdminHome";
import Cart from "../layout/Dashboard/rightSideContent/cart/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/ourShop/:category",
        element: <OurShop></OurShop>,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard-user",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard-user/my-cart",
        element: <Cart></Cart>,
      },
    ],
  },
  {
    path: "/dashboard-admin",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        index: true,
        element: <AdminHome></AdminHome>,
      },
    ],
  },
]);
export default router;

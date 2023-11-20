import { Link, NavLink } from "react-router-dom";
import Container from "../../../components/Container/Container";
import useAuth from "../../../hooks/api/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "../../../hooks/api/api";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [userToggle, setUserToggle] = useState(false);
  const { cart } = useCart();
  console.log(cart);
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
        >
          CONTACT us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourMenu"
          className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourShop/salad"
          className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("logout successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="drawer w-full">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle text-white"
      />
      <div className="drawer-content flex flex-col w-full">
        {/* Navbar */}
        <div className="w-full navbar p-0 py-1 bg-text_color_primary/50 fixed top-0 left-0 z-[100]">
          <Container className="w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2  text-white">
              <Link to="/">
                <h1 className="sm:text-3xl text-lg font-cinzel font-black ">
                  BISTRO BOSS
                </h1>
                <h4 className="sm:text-2xl text-base font-cinzel font-bold">
                  Restaurant
                </h4>
              </Link>
            </div>
            <div className="flex items-center ">
              <ul className="menu menu-horizontal bg-transparent  gap-1 text-lg font-bold font-inter text-white   hidden lg:flex">
                {/* Navbar menu content here */}
                {link}
              </ul>
              <ul className="flex items-center gap-3 text-white text-lg font-inter font-bold">
                <li className="relative">
                  <Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                      />
                    </svg>
                  </Link>
                  <span className="flex justify-center items-center absolute top-4 -right-1 text-xs h-4 w-4  rounded-full bg-primary_color">
                    {cart?.length}
                  </span>
                </li>
                <li>
                  {user ? (
                    <div>
                      <img
                        onClick={() => setUserToggle(!userToggle)}
                        src={user?.photoURL}
                        className="h-11 w-11 ring-2 rounded-full cursor-pointer"
                        alt={`image of ${user?.displayName}`}
                      />
                      <ul
                        className={`absolute top-16 md:top-[76px] w-52 rounded-l-sm shadow-md right-0 bg-gray-200 p-3 text-text_color_primary text-lg font-inter duration-300 font-medium ${
                          userToggle ? "scale-100" : "scale-0"
                        }`}
                      >
                        <li>
                          <Link to="/dashboard" className="hover:underline">
                            DASHBOARD
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="btn btn-ghost btn-block"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
      <div className="drawer-side z-[150]">
        <ul className="flex gap-4 flex-col p-4 w-80 min-h-full bg-base-200 text-lg font-inter font-bold">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          {/* Sidebar content here */}
          {link}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { NavLink, Outlet } from "react-router-dom";
import SideNav from "../sideNav/SideNav";
import { IoMdHome } from "react-icons/io";
import { MdOutlineRestaurant } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBook, FaUsers } from "react-icons/fa";

const AdminDashboard = () => {
  const link = (
    <>
      <NavLink
        to="/dashboard-admin"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <IoMdHome className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">Admin Home</span>
      </NavLink>
      <NavLink
        to="/dashboard-admin/manegeItems"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <MdOutlineRestaurant className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">Manege Items</span>
      </NavLink>
      <NavLink
        to="/dashboard-admin/manegeItems"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <TfiMenuAlt className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">Manege Items</span>
      </NavLink>
      <NavLink
        to="/dashboard-admin/bookings"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <FaBook className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">
          Manege Bookings
        </span>
      </NavLink>
      <NavLink
        to="/dashboard-admin/manegeUsers"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <FaUsers className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">
          Manege Users
        </span>
      </NavLink>
    </>
  );
  return (
    <div className="flex h-screen">
      <nav className="basis-1/5 bg-[#D1A054] p-6">
        <SideNav link={link}></SideNav>
      </nav>
      <main className="grow">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AdminDashboard;

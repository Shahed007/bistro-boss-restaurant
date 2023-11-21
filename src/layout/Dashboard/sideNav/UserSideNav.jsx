import SideNav from "./SideNav";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserSideNav = () => {
  const guestLinks = (
    <>
      <NavLink
        to="/dashboard-user"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <IoMdHome className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">User Home</span>
      </NavLink>
      <NavLink
        to="/dashboard-user/payment-history"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <FaWallet className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">
          Payment History
        </span>
      </NavLink>
      <NavLink
        to="/dashboard-user/reservation"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <FaCalendarAlt className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">reservation</span>
      </NavLink>
      <NavLink
        to="/dashboard-user/my-cart"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <FaShoppingCart className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">My Cart</span>
      </NavLink>
      <NavLink
        to="/dashboard-user/addReviews"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <MdReviews className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">Add reviews</span>
      </NavLink>
      <NavLink
        to="/dashboard-user/myBooking"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <FaCalendarCheck className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">my booking</span>
      </NavLink>
    </>
  );
  return <SideNav link={guestLinks}></SideNav>;
};

export default UserSideNav;

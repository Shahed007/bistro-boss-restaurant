import { NavLink } from "react-router-dom";
import { IoMdHome, IoMdMenu } from "react-icons/io";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaEnvelope,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";

const SideNav = () => {
  const guestLinks = (
    <>
      <NavLink
        to="/dashboard"
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
        to="/reservation"
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
        to="/myCart"
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
        to="/addReviews"
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
        to="/myBooking"
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

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <IoMdHome className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">Home</span>
      </NavLink>
      <NavLink
        to="/ourMenu"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 text-white"
            : "uppercase flex items-center gap-2"
        }
      >
        <IoMdMenu className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">Menu</span>
      </NavLink>
      <NavLink
        to="/ourShop"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 "
            : "uppercase flex items-center gap-2"
        }
      >
        <FaShoppingBag className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">Shop</span>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "uppercase flex items-center gap-2 "
            : "uppercase flex items-center gap-2"
        }
      >
        <FaEnvelope className="text-2xl " />{" "}
        <span className="text-base font-bold inline-block">Contact</span>
      </NavLink>
    </>
  );
  return (
    <div className="flex flex-col">
      <div className="uppercase text-text_color_primary font-cinzel mb-10">
        <h1 className="text-xl font-black">BISTRO BOSS</h1>
        <h4 className="text-base font-bold tracking-[4px]">Restaurant</h4>
      </div>

      <ul className="font-cinzel flex flex-col gap-6 border-b border-gray-100 pb-6">
        {guestLinks}
      </ul>

      <ul className="pt-6 flex flex-col font-cinzel gap-6">{links}</ul>
    </div>
  );
};
// snort
//kuno file ke string akare pathano jabe na

export default SideNav;

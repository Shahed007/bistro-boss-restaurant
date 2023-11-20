import { NavLink } from "react-router-dom";
import { IoMdHome, IoMdMenu } from "react-icons/io";
import { FaEnvelope, FaShoppingBag } from "react-icons/fa";

import PropTypes from "prop-types";

const SideNav = ({ link }) => {
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
        {link}
      </ul>

      <ul className="pt-6 flex flex-col font-cinzel gap-6">{links}</ul>
    </div>
  );
};
// snort
//kuno file ke string akare pathano jabe na

SideNav.propTypes = {
  link: PropTypes.node.isRequired,
};

export default SideNav;

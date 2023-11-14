import PropTypes from "prop-types";
import MenuCard from "../../../components/card/MenuCard";

const Menu = ({ menu }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {menu?.map((menu) => (
        <MenuCard key={menu._id} menu={menu}></MenuCard>
      ))}
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
};

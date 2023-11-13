import PropTypes from "prop-types";

const MenuCard = ({ menu }) => {
  const { name, recipe, image, price } = menu || {};
  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-6">
      <div
        className="h-28  overflow-hidden flex w-28 lg:w-1/5"
        style={{
          borderTopRightRadius: "200px",
          borderBottomRightRadius: "200px",
          borderBottomLeftRadius: "200px",
        }}
      >
        <img
          className="h-full w-full object-cover block "
          src={image}
          alt={`image of ${image}`}
        />
      </div>
      <div className="space-y-2 lg:flex-1">
        <div className="flex justify-between">
          <h2 className="uppercase text-xl font-cinzel text-text_color_primary">
            {name}------------------
          </h2>
          <h4 className="text-lg font-inter text-primary_color">${price}</h4>
        </div>
        <p className="text-text_color_secondary">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuCard;

MenuCard.propTypes = {
  menu: PropTypes.object.isRequired,
};

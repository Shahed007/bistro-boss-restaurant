import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { name, recipe, image } = food || {};
  return (
    <div className="bg-gray-50 font-inter rounded-md shadow-md overflow-hidden">
      <figure>
        <img className="w-full " src={image} alt={`image of ${name}`} />
      </figure>
      <div className="mt-8 flex justify-center items-center flex-col px-5 pb-5">
        <h3 className="text-text_color_primary font-semibold text-2xl">
          {name}
        </h3>
        <p className="text-sm text-center">{recipe.slice(0, 80)}...</p>
        <Link className="mt-8 py-2 px-7  border-b-primary_color border-b-4 rounded-md uppercase duration-200 text-primary_color text-xl font-medium hover:bg-text_color_primary hover:border-b-text_color_primary hover:text-white">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;

FoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

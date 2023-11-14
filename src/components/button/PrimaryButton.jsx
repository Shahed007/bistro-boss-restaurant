import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, className, link }) => {
  return (
    <div className="mt-12 flex justify-center items-center">
      <Link
        className={`${className} py-3 px-7 border-b-2 border-text_color_primary rounded-lg font-inter text-base md:text-xl font-medium text-text_color_primary duration-200 hover:bg-text_color_primary hover:text-white`}
        to={link}
      >
        {text}
      </Link>
    </div>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string,
};

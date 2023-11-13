import PropTypes from "prop-types";

const Title = ({ title, subTitle, className }) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-12">
      <h5 className="text-xl text-primary_color">{subTitle}</h5>
      <h2
        className={`w-max text-5xl border-gray-200 py-2 border-t border-b ${className}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  className: PropTypes.string,
};

import PropTypes from "prop-types";

const Title = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h5 className="text-xl ">{subTitle}</h5>
      <h2 className="w-max">{title}</h2>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

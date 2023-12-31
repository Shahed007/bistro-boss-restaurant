import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-auto lg:px-5 px-3 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

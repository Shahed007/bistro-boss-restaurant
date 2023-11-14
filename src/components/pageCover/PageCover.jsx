import PropTypes from "prop-types";

const PageCover = ({ title, subTitle, className, img, description }) => {
  return (
    <div
      className="flex justify-center items-center h-[450px] w-full"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className={`${className} py-20 px-3  md:max-w-5xl w-full rounded-sm flex justify-center items-center flex-col bg-text_color_primary/40  `}
      >
        <h2 className="md:text-10xl text-8xl font-cinzel font-bold text-white">
          {title}
        </h2>
        <h4
          className={`${
            subTitle && "md:text-3xl text-2xl  font-semibold text-white"
          }`}
        >
          {subTitle && subTitle}
        </h4>
        <p
          className={`${
            description &&
            "text-base font-semibold text-white text-center md:w-3/4 w-full"
          }`}
        >
          {description && description}
        </p>
      </div>
    </div>
  );
};

export default PageCover;

PageCover.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
};

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../../assets/home/01.jpg";
import image2 from "../../../assets/home/02.jpg";
import image3 from "../../../assets/home/03.png";
import image4 from "../../../assets/home/04.jpg";
import image5 from "../../../assets/home/05.png";
import image6 from "../../../assets/home/06.png";

const Hero = () => {
  return (
    <section className=" flex  justify-center items-center">
      <Carousel
        className="flex justify-center  items-center flex-col"
        infiniteLoop={true}
        autoPlay={true}
      >
        <div className="h-[550px] w-full flex flex-col justify-center items-center">
          <img
            className="h-full w-full object-cover"
            src={image1}
            alt="Banner image 1"
          />
        </div>
        <div className="h-[550px] w-full flex flex-col justify-center items-center">
          <img
            className="h-full w-full object-cover"
            src={image2}
            alt="Banner image 2"
          />
        </div>
        <div className="h-[550px] w-full flex flex-col justify-center items-center">
          <img
            className="h-full w-full object-cover"
            src={image3}
            alt="Banner image 3"
          />
        </div>
        <div className="h-[550px] w-full flex flex-col justify-center items-center">
          <img
            className="h-full w-full object-cover"
            src={image4}
            alt="Banner image 4"
          />
        </div>
        <div className="h-[550px] w-full flex flex-col justify-center items-center">
          <img
            className="h-full w-full object-cover"
            src={image5}
            alt="Banner image 5"
          />
        </div>
        <div className="h-[550px] w-full flex flex-col justify-center items-center">
          <img
            className="h-full w-full object-cover"
            src={image6}
            alt="Banner image 6"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;

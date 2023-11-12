import Container from "../../../components/Container/Container";
import Title from "../../../components/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const OrderSection = () => {
  return (
    <section className="mt-20">
      <Container>
        <Title
          title={"ORDER ONLINE"}
          subTitle={"---From 11:00am to 10:00pm---"}
        ></Title>

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          <SwiperSlide className="w-full h-full">
            <img
              className="w-full h-[400px] object-cover"
              src={slide1}
              alt="Slide image 1"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              className="w-full h-[400px] object-cover"
              src={slide2}
              alt="Slide image 2"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              className="w-full h-[400px] object-cover"
              src={slide3}
              alt="Slide image 3"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              className="w-full h-[400px] object-cover"
              src={slide4}
              alt="Slide image 4"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              className="w-full h-[400px] object-cover"
              src={slide5}
              alt="Slide image 5"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default OrderSection;

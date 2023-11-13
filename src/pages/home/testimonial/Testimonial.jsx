import Container from "../../../components/Container/Container";
import Title from "../../../components/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import quote from "../../../assets/icon/quote-left.png";

const Testimonial = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["testimonial"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/reviews.json"
      );
      return res.data;
    },
  });

  if (isLoading) return "loading";
  if (error) return "error";

  const ratingChanged = () => {};
  return (
    <section className="mt-20">
      <Container>
        <Title
          title={"TESTIMONIALS"}
          subTitle={"---What Our Clients Say---"}
        ></Title>
        <Swiper
          slidesPerView={1}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="w-full h-full"
        >
          {data?.map((review) => (
            <SwiperSlide
              key={review._id}
              className="text-center flex justify-center items-center flex-col w-full h-full"
            >
              <div className="w-full h-full flex justify-center items-center flex-col mb-12">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={50}
                  activeColor="#ffd700"
                />
                <img className="mb-10" src={quote} alt="quote icon" />
                <p className="w-3/4 mx-auto text-xl text-text_color_secondary mb-2">
                  {review.details}
                </p>
                <h3 className="text-primary_color text-7xl font-inter font-medium">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonial;

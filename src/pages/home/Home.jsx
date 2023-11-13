import ChefSection from "../chef/ChefSection";
import Hero from "./Banner/Hero";
import BistroBoxSection from "./bistroBox/BistroBoxSection";
import CallUsSection from "./callUs/CallUsSection";
import MenuSection from "./menu/MenuSection";
import OrderSection from "./order/OrderSection";
import OurMenuSection from "./ourMenu/OurMenuSection";
import Testimonial from "./testimonial/testimonial";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <OrderSection></OrderSection>
      <BistroBoxSection></BistroBoxSection>
      <MenuSection></MenuSection>
      <CallUsSection></CallUsSection>
      <ChefSection></ChefSection>
      <OurMenuSection></OurMenuSection>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;

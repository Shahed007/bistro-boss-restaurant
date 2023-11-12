import Hero from "./Banner/Hero";
import BistroBoxSection from "./bistroBox/BistroBoxSection";
import MenuSection from "./menu/MenuSection";
import OrderSection from "./order/OrderSection";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <OrderSection></OrderSection>
      <BistroBoxSection></BistroBoxSection>
      <MenuSection></MenuSection>
    </>
  );
};

export default Home;

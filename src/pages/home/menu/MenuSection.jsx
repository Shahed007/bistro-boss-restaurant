import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from "../../../components/Container/Container";
import Title from "../../../components/title/Title";
import MenuCard from "../../../components/card/MenuCard";
import { Button } from "keep-react";
import { Link } from "react-router-dom";

const MenuSection = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json"
      );
      return res.data;
    },
  });

  if (isLoading) return "reloading";

  if (error) return "error";
  console.log(data);
  return (
    <section className="mt-20">
      <Container>
        <Title title={"FROM OUR MENU"} subTitle={"---Check it out---"}></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.slice(0, 6).map((menu) => (
            <MenuCard key={menu._id} menu={menu}></MenuCard>
          ))}
        </div>
        <div className="mt-12 flex justify-center items-center">
          <Link className="py-3 px-7 rounded-lg border-b-4 border-b-text_color_primary font-inter text-lg text-text_color_primary duration-200 hover:bg-text_color_primary hover:text-white">
            View Full Menu
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default MenuSection;

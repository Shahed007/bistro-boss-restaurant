import Container from "../../../components/Container/Container";
import Title from "../../../components/title/Title";
import { Link } from "react-router-dom";
import useTanStack from "../../../hooks/api/useTanStack";
import Menu from "../../Shared/menu/Menu";

const MenuSection = () => {
  const { isLoading, error, data } = useTanStack("menu", "menus");

  if (isLoading) return "reloading";

  if (error) return "error";
  return (
    <section className="mt-20">
      <Container>
        <Title title={"FROM OUR MENU"} subTitle={"---Check it out---"}></Title>
        <Menu menu={data.slice(0, 6)}></Menu>
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

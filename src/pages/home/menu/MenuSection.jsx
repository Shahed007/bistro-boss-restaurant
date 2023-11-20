import Container from "../../../components/Container/Container";
import Title from "../../../components/title/Title";
import { Link } from "react-router-dom";
import Menu from "../../Shared/menu/Menu";
import { useMenus } from "../../../hooks/api/api";

const MenuSection = () => {
  const { isLoading, error, menus } = useMenus();

  if (isLoading) return "reloading";

  if (error) return "error";
  console.log(menus);
  return (
    <section className="mt-20">
      <Container>
        <Title title={"FROM OUR MENU"} subTitle={"---Check it out---"}></Title>
        <Menu menu={menus.slice(0, 6)}></Menu>
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

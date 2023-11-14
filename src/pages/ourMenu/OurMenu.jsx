import PageCover from "../../components/pageCover/PageCover";
import useTanStack from "../../hooks/api/useTanStack";
import banner1 from "../../assets/menu/banner3.jpg";
import Container from "../../components/Container/Container";
import Title from "../../components/title/Title";
import Menu from "../Shared/menu/Menu";

const OurMenu = () => {
  const { isLoading, error, data } = useTanStack("menu", "menus");

  if (isLoading) return "loading...";
  if (error) return "error";
  const offered = data?.filter((offered) => offered.category === "offered");
  console.log(offered);
  return (
    <>
      <PageCover
        img={banner1}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></PageCover>
      <section className="mt-20">
        <Container>
          <Title title={"TODAY'S OFFER"} subTitle={"---Don't miss---"}></Title>
          <Menu menu={offered}></Menu>
        </Container>
      </section>
    </>
  );
};

export default OurMenu;

import PageCover from "../../components/pageCover/PageCover";
import useTanStack from "../../hooks/api/useTanStack";
import banner1 from "../../assets/menu/banner3.jpg";
import banner2 from "../../assets/menu/dessert-bg.jpeg";
import banner3 from "../../assets/menu/pizza-bg.jpg";
import banner4 from "../../assets/menu/salad-bg.jpg";
import banner5 from "../../assets/menu/soup-bg.jpg";
import Container from "../../components/Container/Container";
import Title from "../../components/title/Title";
import Menu from "../Shared/menu/Menu";
import PrimaryButton from "../../components/button/PrimaryButton";

const OurMenu = () => {
  const { isLoading, error, data } = useTanStack("menu", "menus");

  if (isLoading) return "loading...";
  if (error) return "error";
  const offered = data?.filter((offered) => offered.category === "offered");
  const dessert = data?.filter((dessert) => dessert.category === "dessert");
  const pizza = data?.filter((pizza) => pizza.category === "pizza");
  const salad = data?.filter((salad) => salad.category === "salad");
  const soup = data?.filter((soup) => soup.category === "soup");

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
          <PrimaryButton
            text={"ORDER YOUR FAVOURITE FOOD"}
            link={"#"}
          ></PrimaryButton>
        </Container>
      </section>
      <section className="mt-20">
        <PageCover
          img={banner2}
          title={"DESSERTS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></PageCover>
        <Container>
          <div className="mt-20">
            <Menu menu={dessert}></Menu>
          </div>
          <PrimaryButton
            text={"ORDER YOUR FAVOURITE FOOD"}
            link={"#"}
          ></PrimaryButton>
        </Container>
      </section>
      <section className="mt-20">
        <PageCover
          img={banner3}
          title={"PIZZA"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></PageCover>
        <Container>
          <div className="mt-20">
            <Menu menu={pizza}></Menu>
          </div>
        </Container>
      </section>
      <section className="mt-20">
        <PageCover
          img={banner4}
          title={"SALADS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></PageCover>
        <Container>
          <div className="mt-20">
            <Menu menu={salad}></Menu>
          </div>
          <PrimaryButton
            text={"ORDER YOUR FAVOURITE FOOD"}
            link={"#"}
          ></PrimaryButton>
        </Container>
      </section>
      <section className="mt-20 mb-8">
        <PageCover
          img={banner5}
          title={"SOUPS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></PageCover>
        <Container>
          <div className="mt-20">
            <Menu menu={soup}></Menu>
          </div>
          <PrimaryButton
            text={"ORDER YOUR FAVOURITE FOOD"}
            link={"#"}
          ></PrimaryButton>
        </Container>
      </section>
    </>
  );
};

export default OurMenu;

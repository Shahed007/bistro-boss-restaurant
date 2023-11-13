import Title from "../../../components/title/Title";
import featured from "../../../assets/home/featured.jpg";
import Container from "../../../components/Container/Container";

const OurMenuSection = () => {
  return (
    <section
      className="mt-20 py-24 relative  font-inter before:absolute before:block before:w-full before:h-full before:top-0 before:left-0 before:bg-text_color_primary/60"
      style={{
        backgroundImage: `url(${featured})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <div className="relative z-10 flex justify-center flex-col items-center">
          <Title
            title={"FROM OUR MENU"}
            subTitle={"---Check it out---"}
            className="text-white"
          ></Title>

          <div className="flex md:flex-row flex-col gap-6 items-center text-white">
            <div className="flex-1">
              <img
                className="h-full w-full object-cover"
                src={featured}
                alt="Our Menu image"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-inter">
                March 20, 2023 <br /> WHERE CAN I GET SOME?
              </h2>
              <p className="font-normal font-inter mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMenuSection;

import Container from "../../../components/Container/Container";
import chef from "../../../assets/home/chef-service.jpg";

const BistroBoxSection = () => {
  return (
    <section className="mt-20">
      <Container>
        <div
          style={{
            backgroundImage: `url(${chef})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
          }}
          className="md:p-24 p-6 rounded-md flex justify-center items-center"
        >
          <div className="bg-white/80 backdrop-blur-sm px-3 py-7 text-text_color_primary  md:py-24 flex flex-col justify-center items-center rounded-md ">
            <h1 className="text-3xl font-cinzel">Bistro Boss</h1>
            <p className="md:w-2/3 md:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BistroBoxSection;

import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container/Container";
import Title from "../../components/title/Title";
import axios from "axios";
import FoodCard from "../../components/card/FoodCard";

const ChefSection = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["chef"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json"
      );
      return res.data;
    },
  });

  if (isLoading) return "Loading...";
  if (error) return "error";

  return (
    <section className="mt-20">
      <Container>
        <Title title={"CHEF RECOMMENDS"} subTitle={"---Should Try---"}></Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data?.slice(7, 10).map((chef) => (
            <FoodCard key={chef._id} food={chef}></FoodCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ChefSection;

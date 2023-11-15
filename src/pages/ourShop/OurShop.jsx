import Container from "../../components/Container/Container";
import shopBanner from "../../assets/shop/banner2.jpg";
import PageCover from "../../components/pageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useTanStack from "../../hooks/api/useTanStack";
import FoodCard from "../../components/card/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const OurShop = () => {
  const { category } = useParams();
  const CategoryArray = [
    "salad",
    "pizza",
    "soup",
    "dessert",
    "drink",
    "offered",
  ];
  const initialIndex = CategoryArray.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const { isLoading, error, data } = useTanStack("menu", "menus");

  if (isLoading) return "loading...";
  if (error) return "error";
  const drinks = data?.filter((drinks) => drinks.category === "drinks");
  const dessert = data?.filter((dessert) => dessert.category === "dessert");
  const pizza = data?.filter((pizza) => pizza.category === "pizza");
  const salad = data?.filter((salad) => salad.category === "salad");
  const soup = data?.filter((soup) => soup.category === "soup");
  const offered = data?.filter((offered) => offered.category === "offered");
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Our Shop</title>
      </Helmet>
      <PageCover
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
        img={shopBanner}
      ></PageCover>
      <section className="mt-20 mb-5">
        <Container>
          <div>
            <Tabs
              className="border-0"
              defaultIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className="border-0 flex gap-5 tabList justify-center text-3xl font-medium font-inter text-text_color_primary overflow-x-auto">
                <Tab className="border-b-2 border-b-transparent cursor-pointer">
                  Salad
                </Tab>
                <Tab className="border-b-2 border-b-transparent cursor-pointer">
                  Pizza
                </Tab>
                <Tab className="border-b-2 border-b-transparent cursor-pointer">
                  Soups
                </Tab>
                <Tab className="border-b-2 border-b-transparent cursor-pointer">
                  Desserts
                </Tab>
                <Tab className="border-b-2 border-b-transparent cursor-pointer">
                  Drinks
                </Tab>
                <Tab className="border-b-2 border-b-transparent cursor-pointer">
                  Offered
                </Tab>
              </TabList>

              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {salad?.map((salad) => (
                    <FoodCard key={salad._id} food={salad}></FoodCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {pizza?.map((salad) => (
                    <FoodCard key={salad._id} food={salad}></FoodCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {soup?.map((salad) => (
                    <FoodCard key={salad._id} food={salad}></FoodCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {dessert?.map((salad) => (
                    <FoodCard key={salad._id} food={salad}></FoodCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {drinks?.map((salad) => (
                    <FoodCard key={salad._id} food={salad}></FoodCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {offered?.map((salad) => (
                    <FoodCard key={salad._id} food={salad}></FoodCard>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurShop;

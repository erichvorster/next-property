import React from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import Carousel from "../components/Carousel/Carousel";
import PorpertyDescription from "../components/PropertyDescription/PorpertyDescription";
import FindContact from "../components/FindContact/FindContact";

const Home = () => {
  return (
    <div className="container px-4 mx-auto pt-20">
      <div>
        <HomeHero />
      </div>
      <div className="mt-24">
        <Carousel />
      </div>
      <div>
        <PorpertyDescription />
      </div>
      <div>
        <FindContact />
      </div>
    </div>
  );
};

export default Home;

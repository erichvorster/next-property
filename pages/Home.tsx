import React from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div className="container px-4 mx-auto pt-20">
      <div>
        <HomeHero />
      </div>
      <div className="mt-24">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;

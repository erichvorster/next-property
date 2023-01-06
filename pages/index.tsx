import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import heroImage from "../public/img_hero.jpg";
import { url } from "inspector";
import FeaturedHouse from "../components/featured house/FeaturedHouse";
import HouseGrid from "../components/HouseGrid/HouseGrid";
import TextBanner from "../components/TextBanner/TextBanner";
import ImageText from "../components/ImageText/ImageText";
import BlogArticels from "../components/BlogArticles/BlogArticels";
import BuySell from "../components/BuySell/BuySell";
import BorderButton from "../components/BorderButton/BorderButton";
import UndButton from "../components/UndButton/UndButton";
import { motion as m } from "framer-motion";

const Home = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  const degreeToRadian = (angle: number) => {
    return angle * (Math.PI / 180);
  };

  const radius = 80;
  const diameter = radius * 2;

  useEffect(() => {
    //Ref could be null here
    const circle = circleRef.current;
    if (circle != null) {
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
    }

    const text = circle!.dataset.text;
    const characters = text!.split("");

    const deltaAngle = 360 / characters.length;
    const characterOffsetAngle = 8;
    let currentAngle = -90;

    characters.forEach((character, index) => {
      const span = document.createElement("span");
      span.innerText = character;
      const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
      const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

      const transform = `translate(${xPos}px, ${yPos}px)`;
      const rotate = `rotate(${index * deltaAngle + characterOffsetAngle}deg)`;
      span.style.transform = `${transform} ${rotate}`;

      currentAngle += deltaAngle;
      circle!.appendChild(span);
    });
  }, [diameter]);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="container px-4 mx-auto pt-20 relative">
        <div>
          <div>
            <h1 className="text-8xl font-bold tracking-wide leading-[110px]">
              DISCOVER YOUR HOME IN THE
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                {" "}
                HEART
              </span>{" "}
              OF THE LOWVELD.
            </h1>
          </div>
          <div className="flex justify-between mt-12">
            <div className="flex">
              <div className="mr-12">
                <BorderButton btnText="View all homes" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  Placeat ratione, eos possimus debitis atque nam autem mollitia
                  fuga
                </p>
              </div>
            </div>
            <div>
              <div
                ref={circleRef}
                id="circle"
                data-text="BUY? SELL? BUY? SELL?&nbsp;"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto pt-20">
        <div className=" w-92 h-64">
          <Image
            src="/../public/img_hero.jpg"
            alt="property"
            width={1600}
            height={600}
          />
        </div>
      </div>
      <div className="container px-4 mx-auto pt-20">
        <BuySell />
      </div>
      <hr className="mx-10" />
      <div className="container px-4 mx-auto py-20">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-5xl">Newly listed properties</h1>
          </div>
          <div className="px-12">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              ratione, eos possimus debitis atque nam autem mollitia fuga
            </p>
            <div className="flex justify-between px-2 py-6">
              <UndButton btnText="View property" />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto py-20">
        <FeaturedHouse />
      </div>
      <div className="container px-4 mx-auto py-20">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-5xl">Our featured listings</h1>
          </div>
          <div className="px-12">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              ratione, eos possimus debitis atque nam autem mollitia fuga
            </p>
            <div className="flex justify-between px-2 py-6">
              <UndButton btnText="View all listings" />
              <UndButton btnText="Get notified of new lsiitings" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <HouseGrid />
      </div>
      <hr className="mx-10 my-5" />
      <div className="container mx-auto px-4">
        <TextBanner />
      </div>
      <div className="container mx-auto px-4 mt-24">
        <ImageText />
      </div>
      <div className="container mx-auto px-4">
        <BlogArticels />
      </div>
    </m.div>
  );
};

export default Home;

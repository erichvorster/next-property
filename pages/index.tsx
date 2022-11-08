import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

//Images
import heroImage from "../public/img_hero.jpg";
import { url } from "inspector";
import FeaturedHouse from "../components/featured house/FeaturedHouse";
import HouseGrid from "../components/HouseGrid/HouseGrid";
import TextBanner from "../components/TextBanner/TextBanner";
import ImageText from "../components/ImageText/ImageText";
import BlogArticels from "../components/BlogArticles/BlogArticels";
import BuySell from "../components/BuySell/BuySell";
import BorderButton from "../components/BorderButton/BorderButton";

const Home = () => {
  return (
    <>
      <div className="container px-4 mx-auto pt-20">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-6xl font-bold">
              Discover your home in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                heart
              </span>{" "}
              of the lowveld
            </h1>
          </div>
          <div className="px-12">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              ratione, eos possimus debitis atque nam autem mollitia fuga
            </p>
            <br />
            <p>
              impedit quasi soluta eum ut omnis quo! Id, perferendis quae iste
              cum quas aut fugit hic, culpa iure qui aperiam, repellat labore?
            </p>
            <div className="mt-6">
              <BorderButton btnText="All homes" />
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto pt-20">
        <div className=" w-full h-96">
          <Image
            src="/../public/img_hero.jpg"
            alt="property"
            width={1200}
            height={500}
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
              <a href="#" className="flex">
                <strong>View All Listings</strong>
                <ArrowUpRightIcon className="h-4 w-4 ml-2" />
              </a>
              <a href="#" className="flex">
                <strong>Get notified of new lisitngs</strong>
                <ArrowUpRightIcon className="h-4 w-4 ml-2" />
              </a>
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
              <a href="#" className="flex">
                <strong>View All Listings</strong>
                <ArrowUpRightIcon className="h-4 w-4 ml-2" />
              </a>
              <a href="#" className="flex">
                <strong>Get notified of new lisitngs</strong>
                <ArrowUpRightIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <HouseGrid />
        <div className="text-center">
          <button className="px-10 py-1 mb-8 rounded-full border border-black">
            View all
          </button>
        </div>
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
    </>
  );
};

export default Home;

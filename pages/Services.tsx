import React from "react";
import BorderButton from "../components/BorderButton/BorderButton";
import keys from "../public/contract (1).png";
import agreement from "../public/agreement.png";
import contract from "../public/contract.png";
import investment from "../public/investment.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="sell-hero text-center mt-24">
        <h2 className="text-5xl">All the tools you need to sell your home</h2>
        <p className="max-w-lg mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nam
          reiciendis ut aliquam maxime ipsam.
        </p>
        <div className="mt-4">
          <BorderButton btnText="Sell with us" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-24">
        <div className="...">
          <div className="row-start-2 row-span-2  px-8 py-24 rounded text-center hover:shadow-xl hover:bg-blue-100 border transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer relative">
            <span className="absolute left-4 top-4 text-6xl font-bold text-white">
              01.
            </span>
            <Image src={keys} height="75" width="75" alt="keys" />
            <h2 className="font-bold mb-4 mt-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
        </div>
        <div className="...">
          <div className="row-start-2 row-span-2 p-8 py-24 rounded text-center hover:shadow-xl hover:bg-blue-100 border transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer relative">
            <span className="absolute left-4 top-4 text-6xl font-bold text-white">
              02.
            </span>
            <Image src={agreement} height="75" width="75" alt="keys" />
            <h2 className="font-bold mb-4 mt-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
        </div>
        <div className="...">
          <div className="row-start-2 row-span-2 p-8 py-24 rounded text-center hover:shadow-xl hover:bg-blue-100 border transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer relative">
            <span className="absolute left-4 top-4 text-6xl font-bold text-white">
              03.
            </span>
            <Image src={contract} height="75" width="75" alt="keys" />
            <h2 className="font-bold mb-4 mt-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
        </div>
        <div className="col-span-2 ...">
          <div className="row-start-2 row-span-2  p-8 py-24 h-full  rounded text-center hover:shadow-xl hover:bg-blue-100 border transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer relative">
            <span className="absolute left-4 top-4 text-6xl font-bold text-white">
              04.
            </span>
            <Image src={investment} height="75" width="75" alt="keys" />
            <h2 className="font-bold mb-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
        </div>
        <div className="...">
          <div className="row-start-2 row-span-2 p-8 py-24 rounded text-center hover:shadow-xl hover:bg-blue-100 border transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer relative">
            <span className="absolute left-4 top-4 text-6xl font-bold text-white">
              05.
            </span>
            <Image src={keys} height="75" width="75" alt="keys" />
            <h2 className="font-bold mb-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
        </div>
        <div className="...">
          <div className="row-start-2 row-span-2 p-8 py-24 rounded text-center hover:shadow-xl hover:bg-blue-100 border transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer relative">
            <span className="absolute left-4 top-4 text-6xl font-bold text-white">
              06.
            </span>
            <Image src={keys} height="75" width="75" alt="keys" />
            <h2 className="font-bold mb-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
        </div>
        <div className="col-span-2 ...">
          <div className="row-start-2 row-span-2  p-8 h-full rounded text-center hover:shadow-xl hover:bg-blue-100 border transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer relative">
            <span className="absolute left-4 top-4 text-6xl font-bold text-white">
              07.
            </span>
            <Image src={keys} height="75" width="75" alt="keys" />
            <h2 className="font-bold mb-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mt-24">
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div className="row-start-2 row-span-2 bg-blue-400 p-8 rounded text-center">
            <h2 className="font-bold mb-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
          <div className="row-end-3 row-span-2 bg-blue-400 p-8 rounded text-center">
            <h2 className="font-bold mb-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
          <div className="row-start-2 row-end-4 bg-blue-400 p-8 rounded text-center">
            <h2 className="font-bold mb-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
          <div className=" row-end-3 row-span-2 bg-blue-400 p-8 rounded text-center">
            <h2 className="font-bold mb-4 text-xl">Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eum quis perspiciatis eveniet beatae placeat tenetur
              illo. Iusto ducimus quas, placeat eum nobis eaque veritatis iure
              velit quam necessitatibus assumenda!
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;

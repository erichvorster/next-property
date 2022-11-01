import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Carousel = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth);
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold mb-2">Snapshots of the property</h3>
      <motion.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {images.map((image, idx) => (
            <motion.div className="bg-black h-96 px-72 m-2 rounded" key={idx} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;

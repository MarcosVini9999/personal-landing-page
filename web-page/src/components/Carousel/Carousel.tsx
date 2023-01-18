import React from "react";
import { CarouselContainer } from "./Carousel.style";
import { motion } from "framer-motion";

interface CarouselProps {
  items: Array<string>;
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carousel = React.useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = React.useState<number>(0);

  React.useEffect(() => {
    let scrollWidth = 0;
    let offsetWidth = 0;

    if (typeof carousel.current?.scrollWidth === "number") {
      scrollWidth = carousel.current?.scrollWidth;
    }

    if (typeof carousel.current?.offsetWidth === "number") {
      offsetWidth = carousel.current?.offsetWidth;
    }

    setCarouselWidth(scrollWidth - offsetWidth);

    console.log(carousel.current?.scrollWidth);
  }, []);

  return (
    <CarouselContainer>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
        >
          {items.map((item) => (
            <motion.div className="item" key={item}>
              <img src={item} alt="carousel item" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </CarouselContainer>
  );
};

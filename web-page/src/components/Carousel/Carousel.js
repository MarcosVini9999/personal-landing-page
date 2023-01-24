import "./styles.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Carousel = ({ items }) => {
  const carousel = useRef(null);
  const [constraint, setConstraint] = useState(0);

  useEffect(() => {
    const calcConstraint = () => {
      setConstraint(
        carousel?.current?.scrollWidth - carousel?.current?.offsetWidth
      );
    };

    calcConstraint();
    window.addEventListener("resize", calcConstraint);

    return () => window.removeEventListener("resize", calcConstraint);
  }, []);

  return (
    <div className="App">
      <motion.div className="carousel">
        <motion.div
          ref={carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -constraint }}
          key={constraint}
          className="inner"
        >
          {items.map((item) => (
            <motion.div className="item" key={item}>
              <img src={item} alt="carousel item" className="carouselImage" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

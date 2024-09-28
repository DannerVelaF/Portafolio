import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  direction?: "x" | "y"; // Nueva prop para definir la dirección
  distance?: number;
  overflow?: "hidden" | "none";
}

function Reveal({
  children,
  width = "fit-content",
  direction = "x",
  distance = -75,
  overflow = "hidden",
}: Props) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const variants = {
    hidden:
      direction === "x"
        ? { opacity: 0, x: distance }
        : { opacity: 0, y: -distance },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;

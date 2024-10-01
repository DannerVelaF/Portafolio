import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  overflow?: "hidden" | "none";
}

function Reveal({
  children,
  width = "fit-content",
  overflow = "hidden",
  delay = 0.5,
}: Props) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
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
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;

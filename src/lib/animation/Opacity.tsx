import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  overflow?: "hidden" | "none";
}
function Opacity({
  children,
  width = "fit-content",
  overflow = "hidden",
  delay = 0.5,
}: Props) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
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
          duration: 0.9,
          delay: delay,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Opacity;

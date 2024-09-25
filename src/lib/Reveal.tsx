import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  variants?: {
    hidden: { opacity: 0; x: -75 };
    visible: { opacity: 1; x: 0 };
  };
}

function Reveal({
  children,
  width = "fit-content",
  variants = { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } },
}: Props) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;

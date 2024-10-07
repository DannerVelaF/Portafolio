import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Hover3d({ children, className }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  // Ajustar la rigidez y amortiguación para suavizar el movimiento
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 15 });

  // Aumentar el rango de rotación para que el movimiento sea más notorio
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = (event.target as HTMLDivElement).getBoundingClientRect();

    const w = rect.width;
    const h = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / w - 0.5;
    const yPct = mouseY / h - 0.5;
    x.set(xPct);
    y.set(yPct);

    scale.set(1.1); // Aumentar el scale para que se note más el efecto
  };

  const handleMouseUp = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      className={className}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1200, // Ajuste de perspectiva para una mayor sensación de profundidad
      }}
    >
      {children}
    </motion.div>
  );
}

export default Hover3d;

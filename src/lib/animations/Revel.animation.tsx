import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Reveal({
  children,
  delay=1,
  width = "fit-content",
  view=true,
  duration=1
}: {
  children: React.ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
  view?: boolean;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className={`relative ${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: view }}
        transition={{ duration: duration, delay: delay }}
        className="leading-normal"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
'use client';

import { motion } from 'framer-motion';

function HS() {
  return (
    <section className="overflow-hidden relative">
      <motion.div
        className="hs my-5 flex gap-3 font-bold text-[5vw] whitespace-nowrap"
        animate={{
          x: '-100%', // Move the text to the left
        }}
        transition={{
          x: {
            repeat: Infinity,      // Loop the animation infinitely
            repeatType: 'loop',    // Ensure it's a smooth looping
            duration: 20,          // Control the speed of scroll
            ease: 'linear',        // Make the scrolling smooth
          },
        }}
      >
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="flex whitespace-nowrap gap-5">
            <h4>Business Consultant</h4>
            <h4>.</h4>
            <h4 className="text-gold1">Finance Consultant</h4>
            <h4>.</h4>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default HS;

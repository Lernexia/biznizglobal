'use client';

import { motion } from 'framer-motion';

function HS() {
  return (
    <section className="overflow-hidden relative bg-white  py-20">
      <motion.div
        className="hs my-1 flex gap-3 font-bold text-[5vw] max-xl:text-[7vw] max-lg:text-[8vw] max-md:text-[9vw] max-sm:text-[10vw] whitespace-nowrap"
        animate={{
          x: '-100%',
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="flex whitespace-nowrap gap-5">
            <h4>Business Consultant</h4>
            <h4>.</h4>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="hs justify-end my-1 flex gap-3 font-bold  text-[5vw] max-xl:text-[7vw] max-lg:text-[8vw] max-md:text-[9vw] max-sm:text-[10vw]  whitespace-nowrap"
        animate={{
          x: '100%',
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="flex whitespace-nowrap gap-5">
            <h4 className="text-gold1">Finance Solutions .</h4>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default HS;

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Hero from "./(components)/Hero";
import ShortIntro from "./(components)/ShortIntro";
import HS from "./(components)/HS";
import CustomCursor from "@/lib/widget/CustomCursor";
import Services from "./(components)/Services";
import CompleteDigitalBusinessSolutions from "./(components)/CompleteDigitalBusinessSolutions";
import BestSolutionForYourBusiness from "./(components)/BestSolutionForYourBusiness";
import HowWeWork from "./(components)/HowWeWork";
import { ArrowRight, ArrowUp, Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import AnimatedText from "@/lib/widget/TextAnimation";

import dynamic from "next/dynamic";
import Footer from "./(components)/Footer";
const ScrollFloater = dynamic(() => import("../lib/widget/ScrollFloater"), { ssr: false });


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "auto";
      window.scrollTo(0, 0);
    }, 3500);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideUp = {
    initial: {
      y: 0,
      top: 0,
      scale: 2,
      opacity: 1,
      transition: { duration: 1, delay: 0.5 }
    },
    animate: {
      opacity: 0.8,
      transition: { duration: 1, delay: 0.5 }
    },
    exit: {
      scale: 5,
      blur: 100,
      opacity: 0.1,
      transition: { duration: 1, delay: 0.5 }
    }
  }

  return (
    <main className={`relative text-black min-h-screen ${isLoading ? "overflow-hidden" : ""}`}>
      {!isLoading && width > 1024 && <CustomCursor />}
      {!isLoading && (<ScrollFloater />)}

      <AnimatePresence mode="wait">
        {isLoading && (
          <div className="h-screen w-screen flex justify-center items-center fixed overflow-hidden">
            <motion.div

              variants={slideUp} initial="initial" exit="exit" whileInView='animate'
              className="w-full h-full overflow-hidden flex justify-center items-center"
            >
              <AnimatedText />
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      <motion.div
        initial={{ opacity: 0, scale: 1, y: 100, filter: "blur(10px)", background: '#00000046' }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", background: 'transparent' }}
        transition={{
          duration: 1,
          delay: 3.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="landing-page relative top-0 "
      >

        <Hero />

        <ShortIntro />

        <Services />

        <HS />

        <CompleteDigitalBusinessSolutions />

        <BestSolutionForYourBusiness />


        <HowWeWork />

        <section className="relative bg-gradient-to-tr from-gold1/50 to-blue1/50 py-20">
          <div className="relative sizer text-center text-white">
            <h3 className="text-4xl font-semibold max-md:text-3xl">
              Ready to take your business to the
              <span className="text-transparent drop-shadow-xl bg-clip-text bg-gradient-to-r from-gold2 to-gold1"> next</span>
              <span className="text-transparent drop-shadow-xl bg-clip-text bg-gradient-to-r from-blue2 to-blue1"> level?</span>
            </h3>
            <h5 className="text-xl max-md:text-lg py-5">Get expert guidance in accounting, auditing, taxation, and business strategy.</h5>
            <Link href="/contact" className="b bg-gradient-to-r from-blue2 to-blue1 rounded-t-full rounded-br-full font-semibold text-lg max-md:text-sm items-center px-5 py-3 hover:rounded-full transition-all duration-500 flex gap-2 w-fit m-auto">
              Contact Us
              <ArrowRight className="animate-slide-x" />
            </Link>
            <h5 className="text-xl max-md:text-lg py-5">Contact us for expert solutions today!</h5>
          </div>
        </section>

        <Footer />


      </motion.div>

    </main>
  );
}

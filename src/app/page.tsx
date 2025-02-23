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
import StickyImage from "./(components)/StickyImage";
import HowWeWork from "./(components)/HowWeWork";
import { ArrowUp, Clock, Mail, MapPin, PhoneCall } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      // window.scrollTo(0, 0);
    }, 3500);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const slideUp = {
    initial: {
      y: 0,
      top: 0,
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  }

  return (
    <main className={`relative text-black min-h-screen ${isLoading ? "overflow-hidden" : ""}`}>
      {!isLoading && width > 1024 && <CustomCursor />}
      {!isLoading && (<button onClick={()=>window.scrollTo(0, 0)} className="fixed z-[99] bottom-5 right-5 rounded-full bg-white border-2 border-gold1  p-3">
        <ArrowUp size={22} />
      </button>)}

      {/* <AnimatePresence mode="wait">
        {isLoading && (
          <div className="bg-gold1/5 h-screen w-screen flex justify-center items-center fixed overflow-hidden">
            <motion.div
              // initial={{ opacity: 0.8, y: 0 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
              variants={slideUp} initial="initial" exit="exit"
              className="w-full h-full overflow-hidden flex justify-center items-center"
            >
              <AnimatedText />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
 */}

      <motion.div
        // initial={{ opacity: 0, scale: 1, y: 100, filter: "blur(10px)", background: '#00000046' }}
        // whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", background: 'transparent' }}
        // transition={{
        //   duration: 1,
        //   delay: 3.8,
        //   ease: [0.76, 0, 0.24, 1],
        // }}
        // id="hero"
        className="landing-page "
      >

        <Hero />

        <ShortIntro />

        <Services />

        <HS />

        <CompleteDigitalBusinessSolutions />

        <BestSolutionForYourBusiness />

        <StickyImage />

        <HowWeWork />

        <footer className="bg-white py-10 border-t-2">
          <div className="sizer">
            <div className="items flex gap-10 justify-between flex-wrap items-start">
              <div className="item-1">
                <div className="img">
                  <Link href="/">
                    <svg
                      width="120"
                      height="38"
                      viewBox="0 0 177 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_5_55)">
                        <path
                          d="M0.730698 38V1.15151H16.8373C19.7968 1.15151 22.2651 1.55335 24.2424 2.35701C26.2198 3.16067 27.706 4.2762 28.7012 5.7036C29.6965 7.11901 30.194 8.75031 30.194 10.5975C30.194 12.0369 29.8798 13.3024 29.2512 14.3939C28.6227 15.4735 27.7584 16.3612 26.6584 17.0568C25.5715 17.7406 24.3275 18.2263 22.9263 18.5142V18.8741C24.4585 18.934 25.8923 19.3298 27.228 20.0616C28.5768 20.7932 29.6702 21.8188 30.5083 23.1382C31.3464 24.4457 31.7654 26.005 31.7654 27.8163C31.7654 29.7715 31.2351 31.5167 30.1744 33.0521C29.1267 34.5754 27.5751 35.7809 25.5191 36.6686C23.4633 37.5562 20.9294 38 17.9177 38H0.730698ZM9.23578 31.6307H16.1695C18.5397 31.6307 20.2682 31.2169 21.3551 30.3892C22.4419 29.5496 22.9854 28.434 22.9854 27.0426C22.9854 26.023 22.7169 25.1234 22.18 24.3438C21.6431 23.5641 20.877 22.9524 19.8818 22.5085C18.8997 22.0647 17.7278 21.8428 16.3659 21.8428H9.23578V31.6307ZM9.23578 16.571H15.5409C16.7063 16.571 17.7408 16.3851 18.6445 16.0132C19.561 15.6294 20.2813 15.0897 20.8051 14.3939C21.3419 13.6982 21.6103 12.8645 21.6103 11.893C21.6103 10.5616 21.0932 9.488 20.0587 8.67235C19.0372 7.85669 17.5837 7.44886 15.6981 7.44886H9.23578V16.571ZM45.8047 1.15151V38H37.2996V1.15151H45.8047ZM52.3702 38V33.3759L72.4445 7.5748H52.3309V1.15151H83.1299V5.77557L63.0358 31.5767H83.1691V38H52.3702ZM123.342 1.15151V38H115.996L98.495 14.8077H98.2003V38H89.6952V1.15151H97.1593L114.523 24.3257H114.877V1.15151H123.342ZM138.874 1.15151V38H130.369V1.15151H138.874ZM145.44 38V33.3759L165.514 7.5748H145.4V1.15151H176.199V5.77557L156.106 31.5767H176.239V38H145.44Z"
                          fill="#D2A030"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5_55">
                          <rect width="177" height="38" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
                <div className="right-nav flex items-center space-x-4 mt-2">
                  <Link href="#">
                    <svg
                      width="30"
                      height="38"
                      viewBox="0 0 40 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.75 2.375C9.79018 2.375 2.5 9.30067 2.5 17.8125C2.5 26.3243 9.79018 33.25 18.75 33.25C27.7098 33.25 35 26.3243 35 17.8125C35 9.30067 27.7098 2.375 18.75 2.375ZM18.75 4.75C26.3587 4.75 32.5 10.5842 32.5 17.8125C32.5 24.3825 27.4189 29.7849 20.7812 30.7173V21.5884H24.6631L25.2734 17.845H20.7812V15.7947C20.7812 14.2391 21.3142 12.8584 22.8467 12.8584H25.3076V9.58813C24.8751 9.53351 23.9614 9.41187 22.2314 9.41187C18.6214 9.41187 16.5039 11.224 16.5039 15.3494V17.8403H12.793V21.5884H16.5088V30.6848C9.97447 29.6688 5 24.313 5 17.8125C5 10.5842 11.1413 4.75 18.75 4.75Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link href="#">
                    <svg
                      width="30"
                      height="38"
                      viewBox="0 0 39 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.14062 5.9375C7.47437 5.9375 6.09375 7.28272 6.09375 8.90625V29.0938C6.09375 30.7173 7.47437 32.0625 9.14062 32.0625H29.8594C31.5256 32.0625 32.9062 30.7173 32.9062 29.0938V8.90625C32.9062 7.28272 31.5256 5.9375 29.8594 5.9375H9.14062ZM9.14062 8.3125H29.8594C30.2069 8.3125 30.4688 8.56763 30.4688 8.90625V29.0938C30.4688 29.4324 30.2069 29.6875 29.8594 29.6875H9.14062C8.79309 29.6875 8.53125 29.4324 8.53125 29.0938V8.90625C8.53125 8.56763 8.79309 8.3125 9.14062 8.3125ZM12.7207 10.3535C11.5638 10.3535 10.626 11.2673 10.626 12.3945C10.626 13.5217 11.5638 14.4355 12.7207 14.4355C13.8776 14.4355 14.8154 13.5217 14.8154 12.3945C14.8154 11.2673 13.8776 10.3535 12.7207 10.3535ZM23.7275 15.7715C21.9803 15.7715 20.8187 16.7039 20.3379 17.5898H20.2617V16.0312H16.834V27.3125H20.4141V21.7461C20.4141 20.2756 20.714 18.8516 22.585 18.8516C24.4274 18.8516 24.4512 20.5122 24.4512 21.8203V27.3125H28.0312V21.1152C28.0312 18.0815 27.3695 15.7715 23.7275 15.7715ZM10.9688 16.0312V27.3125H14.5869V16.0312H10.9688Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link href="#">
                    <svg
                      width="30"
                      height="38"
                      viewBox="0 0 39 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9775 5.9375C9.65002 5.9375 6.09375 9.39795 6.09375 13.6191V24.3809C6.09375 28.5974 9.64526 32.0625 13.9775 32.0625H25.0225C29.35 32.0625 32.9062 28.6021 32.9062 24.3809V13.6191C32.9062 9.40259 29.3547 5.9375 25.0225 5.9375H13.9775ZM13.9775 8.3125H25.0225C28.036 8.3125 30.4688 10.6829 30.4688 13.6191V24.3809C30.4688 27.3171 28.036 29.6875 25.0225 29.6875H13.9775C10.964 29.6875 8.53125 27.3171 8.53125 24.3809V13.6191C8.53125 10.6829 10.964 8.3125 13.9775 8.3125ZM26.6982 10.9102C26.0841 10.9102 25.5938 11.3879 25.5938 11.9863C25.5938 12.5847 26.0841 13.0625 26.6982 13.0625C27.3124 13.0625 27.8027 12.5847 27.8027 11.9863C27.8027 11.3879 27.3124 10.9102 26.6982 10.9102ZM19.5 11.875C15.4772 11.875 12.1875 15.0803 12.1875 19C12.1875 22.9197 15.4772 26.125 19.5 26.125C23.5228 26.125 26.8125 22.9197 26.8125 19C26.8125 15.0803 23.5228 11.875 19.5 11.875ZM19.5 14.25C22.2089 14.25 24.375 16.3606 24.375 19C24.375 21.6394 22.2089 23.75 19.5 23.75C16.7911 23.75 14.625 21.6394 14.625 19C14.625 16.3606 16.7911 14.25 19.5 14.25Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link href="#">
                    <svg
                      width="30"
                      height="38"
                      viewBox="0 0 40 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.6299 8.91089C27.8076 6.22974 24.0576 4.75 20.0635 4.75C11.8311 4.75 5.12695 11.1143 5.12695 18.9351C5.12207 21.4353 5.81055 23.8752 7.11914 26.0276L5 33.3799L12.9199 31.4038C15.0977 32.5356 17.5586 33.1294 20.0586 33.134H20.0635C28.2959 33.134 34.9951 26.7698 35 18.9443C35 15.1545 33.4473 11.592 30.6299 8.91089ZM20.0635 30.7358H20.0586C17.832 30.7358 15.6445 30.1653 13.7402 29.0938L13.2861 28.8386L8.58398 30.0076L9.83887 25.6565L9.5459 25.2112C8.30078 23.3325 7.64648 21.1616 7.64648 18.9351C7.64648 12.4363 13.2178 7.14819 20.0684 7.14819C23.3838 7.14819 26.499 8.37744 28.8428 10.604C31.1865 12.8352 32.4756 15.7947 32.4756 18.9443C32.4756 25.4478 26.9043 30.7358 20.0635 30.7358ZM26.8701 21.9038C26.499 21.7275 24.6631 20.8694 24.3213 20.7534C23.9795 20.6328 23.7305 20.5771 23.4814 20.9297C23.2324 21.2869 22.5195 22.0847 22.2998 22.3213C22.085 22.5532 21.8652 22.5857 21.4941 22.4094C21.1182 22.2332 19.917 21.8574 18.4912 20.6467C17.3828 19.7097 16.6309 18.5454 16.416 18.1929C16.1963 17.8357 16.3916 17.6455 16.5771 17.4692C16.748 17.3115 16.9531 17.0564 17.1387 16.8477C17.3242 16.6436 17.3877 16.4951 17.5146 16.2585C17.6367 16.022 17.5732 15.8132 17.4805 15.637C17.3877 15.4607 16.6406 13.7119 16.3281 13.0022C16.0254 12.311 15.7178 12.4084 15.4883 12.3945C15.2734 12.3853 15.0244 12.3853 14.7754 12.3853C14.5264 12.3853 14.1211 12.4734 13.7793 12.8306C13.4375 13.1831 12.4756 14.0413 12.4756 15.7854C12.4756 17.5295 13.8135 19.218 13.999 19.4546C14.1846 19.6865 16.6309 23.2676 20.376 24.803C21.2646 25.1694 21.958 25.3875 22.5 25.5498C23.3936 25.8188 24.209 25.7817 24.8535 25.6936C25.5713 25.5916 27.0605 24.8354 27.373 24.0051C27.6807 23.1794 27.6807 22.4697 27.5879 22.3213C27.4951 22.1729 27.2461 22.0847 26.8701 21.9038Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="item-2">
                <h3 className="font-bold text-lg">Contact Us</h3>
                <div className="pt-4 flex flex-col gap-2" >
                  <Link href={"#"} className="flex max-w-sm gap-2 items-center justify-start">
                    <MapPin size={38} />
                    <p>6th floor, EA chambers tower, Whites Rd,
                      Royapettah,Chennai, Tamil Nadu 600002</p>
                  </Link>
                  <Link href={"#"} className="flex gap-2 items-center justify-start">
                    <Mail size={20} />
                    <p>contact@bizniz.com</p>
                  </Link>
                  <Link href={"#"} className="flex gap-2 items-center justify-start">
                    <PhoneCall size={20} />
                    <p>+919876543210</p>
                  </Link>
                  <Link href={"#"} className="flex gap-2 items-center justify-start">
                    <Clock size={20} />
                    <p>Mon - Sat 10:00 AM to 6:00 PM</p>
                  </Link>
                </div>
              </div>

              <div className="item-3">
                <h3 className="font-bold text-lg">Services</h3>

                <ul className="pt-4 flex flex-col gap-3 max-w-sm">
                  <li className="hover:underline mb-4">
                    <Link href="#">Business Services</Link>
                  </li>
                  <li className="hover:underline mb-4">
                    <Link href="#">IPO Listing & Advisory Services</Link>
                  </li>
                  <li className="hover:underline mb-4">
                    <Link href="#">Consulting Service</Link>
                  </li>
                  <li className="hover:underline mb-4">
                    <Link href="#">Taxation & Advisory</Link>
                  </li>
                </ul>

              </div>

              <div className="item-4">
                <h3 className="font-bold text-lg">Resource</h3>

                <ul className="pt-4 flex flex-col gap-2">

                  <li className="hover:underline">
                    <Link href="#">Portfolio</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="#">Blogs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="#">Faq</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="#">Contact</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="#">About Us</Link>
                  </li>
                </ul>

              </div>


            </div>
          </div>
          <div className="h-[1px] w-full bg-black/20 my-10"></div>
          <p className="text-center">Copyright © 2024 All Rights Reserved | Bizniz Global Advisory Services</p>
        </footer>

      </motion.div>
    </main>
  );
}

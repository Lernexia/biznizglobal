'use client';

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/lib/animations/Revel.animation';

function CompleteDigitalBusinessSolutions() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useEffect(() => {
        if (!container.current || !imageContainer.current) return;

        // GSAP Animation
        gsap.to(imageContainer.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 10%",
                end: "bottom top",
                scrub: true,
                pin: true,
                // markers: true,
            },
            width: "100vw",
            height: "100vh",
            borderRadius: "30px",
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);


    const cs_data = [
        {
            title: "Consulting Services",
            score: '70%',
        },
        {
            title: "Accounting and Auditing",
            score: '80%',
        },
        {
            title: "Happy Customers",
            score: '90%',
        }
    ]

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -500]);



    return (
        <section style={{ height: '100%' }}
            className='py-20 h-auto w-full overflow-hidden bg-white  text-white'>
            <section
                // ref={container}
                className="relative top-0 h-screen"
            // style={{ height: '100%' }}
            >
                <motion.div
                    // ref={imageContainer}
                    // style={{ height: 'fit-content' }}
                    // initial={{scale: 1}}
                    // whileInView={{scale: 1.5}}
                    // transition={{
                    //     duration: 1,
                    //     delay: 0.5,
                    // }}
                    className="relative flex h-full items-center justify-center w-full"
                >

                    <Image
                        src={'/images/lp-zoom.jpg'}
                        alt="Bizniz zoom image"
                        width={1000}
                        height={1000}
                        loading='lazy'
                        className="object-cover w-full h-full"
                    />
                    <div className="overlay absolute top-0 left-0 w-full h-full bg-black/70"></div>

                    <div
                        style={{ height: '100%' }}
                        className="absolute  text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-others-white pt-20">
                        <Reveal>
                            <h3 className='font-bold  text-center text-[5vw] leading-none'>Complete Digital Business Solutions</h3>
                        </Reveal>
                        <Reveal>
                            <p className='mt-5 text-justify text-balance font-thin text-[16px] max-w-[95%]'>Bizniz Global Advisory Services helps you create a digital strategy that effectively reaches your target audience and supports your business objectives. With our expertise in accounting, auditing, taxation, and business strategy, we offer the comprehensive support you need to excel in the digital world.</p>
                        </Reveal>
                        <div className='pt-10'>
                            <div className='flex items-center justify-between gap-10'>
                                {
                                    cs_data.map((data, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5 * (index + 1),
                                            }}
                                            viewport={{ once: true }}
                                            key={index} className='flex flex-col items-center justify-center gap-3'>
                                            <h4 className='font-bold text-[16px]'>{data.title}</h4>
                                            <div className='w-14 h-14 animate-pulse bg-gradient-to-tr from-gold2 to-gold1 rounded-full flex justify-center p-2 items-center'>
                                                <h4 className='font-bold'>{data.score}</h4>
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </motion.div>
            </section>
        </section>
    )
}

export default CompleteDigitalBusinessSolutions


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
    const parallaxRef = useRef(null);

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

    useEffect(() => {
        const element = parallaxRef.current;

        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: 'top bottom',
                end: 'bottom top',
                // markers: true,
            },
            scale: 1.28,
            yPercent: -10,
            ease: 'none',
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section style={{ height: '100%' }}
            className='py-20 h-auto w-full overflow-hidden bg-white  text-white'>
            <section
                className="relative top-0 h-screen"
            >
                <motion.div

                    className="relative flex h-full items-center justify-center w-full"
                >

                    <div className='w-full h-screen' ref={parallaxRef}
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
                    </div>

                    <div
                        className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-others-white">
                            <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className='font-bold  text-center text-[5vw] leading-none'>Complete Digital Business Solutions</motion.h3>
                        <Reveal>
                            <p className='mt-5 text-justify hyphens-auto font-thin text-[16px] max-w-[95%]'>Bizniz Global Advisory Services helps you create a digital strategy that effectively reaches your target audience and supports your business objectives. With our expertise in accounting, auditing, taxation, and business strategy, we offer the comprehensive support you need to excel in the digital world.</p>
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
                                            <div className='w-14 h-14 animate-pulse bg-gradient-to-tr shadow-xl from-gold2 to-gold1 rounded-full flex justify-center p-2 items-center'>
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


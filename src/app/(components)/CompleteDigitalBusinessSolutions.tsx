'use client';

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

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
                start: "top top",
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


    return (
        <section style={{ height: '100%' }}
            className='pt-20 min-h-full h-auto w-full overflow-hidden bg-white  text-white'>
            <section className="sticky top-0 h-auto"
                style={{ height: '100%' }}
            >
                <div
                    ref={container}
                    style={{ height: 'fit-content' }}
                    className="relative flex h-auto items-center justify-center w-full p-3"
                >
                    <div
                        ref={imageContainer}
                        style={{ height: '100%' }}
                        className="relative w-[100%] h-full overflow-hidden"
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
                            // style={{ height: '100%' }}
                            className="absolute  text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-others-white pt-20">
                            <h3 className='font-bold  text-center text-[5vw] leading-none'>Complete Digital Business Solutions</h3>

                            <p className='mt-5 text-justify text-balance font-thin text-[16px] max-w-[95%]'>Bizniz Global Advisory Services helps you create a digital strategy that effectively reaches your target audience and supports your business objectives. With our expertise in accounting, auditing, taxation, and business strategy, we offer the comprehensive support you need to excel in the digital world.</p>
                            <div className='pt-10'>
                                <div className='flex items-center justify-between gap-10'>
                                    {
                                        cs_data.map((data, index) => (
                                            <div key={index} className='flex flex-col items-center justify-center gap-3'>
                                                <h4 className='font-bold text-[16px]'>{data.title}</h4>
                                                <div className='w-14 h-14 animate-pulse bg-gradient-to-tr from-gold2 to-gold1 rounded-full flex justify-center p-2 items-center'>
                                                    <h4 className='font-bold'>{data.score}</h4>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default CompleteDigitalBusinessSolutions

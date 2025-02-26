'use client';

import Reveal from '@/lib/animations/Revel.animation'
import { ArrowDown, MoveUpRight, Phone } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Nav from './Nav';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';

function Hero() {

    gsap.registerPlugin(ScrollTrigger);

    const duration = 4.8

    const parallaxRef = useRef(null);

    useEffect(() => {
        const element = parallaxRef.current;

        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: 'top top',
                end: 'bottom top',
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
        <section className='hero bg-white min-h-screen relative top-0 overflow-hidden  text-white'>
            <div className='w-[calc(100vw-5rem)] h-[calc(100vh-1rem)] overflow-hidden relative top-0 m-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={
                        {
                            duration: 1,
                            delay: 0.5
                        }}
                    viewport={{ once: true }}
                    className='absolute top-0 w-full h-full'>
                    <div
                        ref={parallaxRef}

                        className="hero-bg bg-cover bg-center bg-no-repeat h-full w-full">
                        <Image src='/images/bg.png' alt='bizniz hero image' className='h-full w-full object-cover' width={1000} height={1000} />
                    </div>
                    <div className='bg-gradient-to-b from-black/80 to-black/50 w-full absolute top-0 h-full'></div>

                </motion.div>
                <Nav duration={duration} />
                <div className="hero-container h-screen sizer text-center top-0 flex flex-col items-center justify-center">
                    <div className='py-20'>
                        <Reveal delay={duration}>
                            <h1 className='text-[5vw] max-[1050px]:text-[6vw] max-[820px]:text-[7vw] max-[600px]:text-[8vw] max-[500px]:text-[10vw] font-extrabold leading-none -tracking-tight '>ACCOUNTING & AUDITING <br></br> Expert</h1>
                        </Reveal>
                        <Reveal delay={duration}>
                            <p className='my-10 text-2xl max-w-lg max-md:text-xl max-sm:text-sm m-auto'>Personalized solutions and strategies for your businesses.</p>
                        </Reveal>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={
                                {
                                    duration: 1,
                                    delay: 1
                                }
                            }
                            viewport={{ once: true }}
                            className='flex justify-center relative gap-5 mb-5'>
                            <Link href='#' className='relative flex gap-2 items-center shadow-lg justify-center bg-gradient-to-tr from-gold2 to-gold1 px-5 py-2 rounded-br-[30px] rounded-t-[30px] transition-all duration-500 hover:transition-all hover:rounded-[30px]'>Enquiry
                                <Phone size={18} className='animate-pulse' /> </Link>
                            <Link href='#' className='relative px-5 text-white hover:bg-gradient-to-tr from-gold2 to-gold1 hover:border-transparent border-gold2 py-2 rounded-br-[30px] rounded-t-[30px] flex gap-2 justify-center items-center  transition-all duration-500 hover:transition-all hover:rounded-[30px] border-2 border-transparent bg-clip-border border-image-[linear-gradient(to_right,_#865D00,_#D2A024)_1]'>
                                More About
                                <MoveUpRight size={20} className='text-white' />
                            </Link>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero

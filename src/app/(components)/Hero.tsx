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
                        <p className='my-10 text-2xl max-w-lg max-md:text-xl max-sm:text-sm m-auto'>Personalized Advice creating wealth strategies tailored For Business People.</p>
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


                    {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={
                            {
                                duration: 2,
                                delay: 0.5
                            }
                        }
                        className='flex justify-center absolute right-10'>
                        <div className="circle-anime spin">
                            <svg width="170" height="170" viewBox="0 0 239 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M95.5326 209.042C97.411 208.762 99.3857 208.794 101.457 209.14C108.681 210.345 111.694 214.536 110.497 221.712C109.364 228.503 105.185 231.296 97.9607 230.09C95.8897 229.745 94.0114 229.134 92.3259 228.259L92.7116 225.947C94.3811 226.919 96.155 227.561 98.0334 227.875C103.668 228.815 106.932 226.612 107.824 221.266C108.78 215.535 106.441 212.199 100.806 211.259C98.9277 210.945 97.0413 210.977 95.1468 211.354L95.5326 209.042Z" fill="#F6E8C8" />
                                <path d="M75.9196 208.923C77.6811 205.668 77.2092 203.308 74.5038 201.844C71.7984 200.38 69.5649 201.276 67.8033 204.531C66.0789 207.717 66.5695 210.042 69.2749 211.506C71.9803 212.97 74.1952 212.109 75.9196 208.923ZM78.3308 210.161C75.8906 214.67 72.5234 215.763 68.2291 213.439C63.9348 211.115 63.0077 207.698 65.4479 203.189C67.8834 198.689 71.2483 197.601 75.5426 199.925C79.8197 202.239 80.7491 205.651 78.3308 210.161Z" fill="#F6E8C8" />
                                <path d="M56.1446 186.192L44.8286 196.609L43.5884 195.262L44.7052 193.577C42.6775 193.306 41.0255 192.478 39.7489 191.091C37.1496 188.268 37.2546 185.563 40.0638 182.977L47.166 176.439L49.0014 178.432L41.8669 185C40.1857 186.548 40.1156 188.159 41.6567 189.833C42.7083 190.975 44.1848 191.62 46.0862 191.768L54.3092 184.198L56.1446 186.192Z" fill="#F6E8C8" />
                                <path d="M36.6802 161.415L34.5339 162.356C34.3448 160.467 33.8795 158.677 33.1381 156.986C32.1535 154.742 30.9904 153.913 29.649 154.502C28.3969 155.051 28.1141 156.108 28.8006 157.673L29.6833 159.685C31.017 162.726 30.2977 164.854 27.5254 166.07C24.8424 167.247 22.6438 165.882 20.9296 161.974C20.1921 160.292 19.6841 158.526 19.4055 156.676L21.5518 155.734C21.741 157.624 22.2043 159.41 22.9418 161.091C23.9695 163.434 25.1542 164.311 26.4956 163.723C27.7477 163.174 28.05 162.161 27.4028 160.686L26.5201 158.674C25.1079 155.454 25.788 153.236 28.5604 152.02C31.2433 150.843 33.4399 152.204 35.1503 156.104C35.8917 157.794 36.4017 159.564 36.6802 161.415Z" fill="#F6E8C8" />
                                <path d="M11.7758 121.269L27.1041 119.999L27.2578 121.853L25.3403 122.482C26.7984 124.233 27.6053 126.047 27.761 127.926C28.0529 131.449 26.2962 133.368 22.4909 133.683L12.8705 134.481L12.6468 131.78L22.3109 130.979C24.5883 130.79 25.6334 129.567 25.4463 127.309C25.3181 125.762 24.5487 124.341 23.1382 123.047L11.9996 123.97L11.7758 121.269Z" fill="#F6E8C8" />
                                <path d="M10.1769 89.9666L30.4832 95.1089L29.8179 97.7359L9.51162 92.5937L10.1769 89.9666Z" fill="#F6E8C8" />
                                <path d="M25.8504 61.2117L26.7798 59.7892L29.185 60.6607L31.4604 57.1779L33.2999 58.3797L31.2568 61.5068L38.6515 66.338C39.8533 67.1232 40.7934 66.9966 41.4717 65.9583L42.4973 64.3887L44.3367 65.5904L42.9266 67.7488C41.5165 69.9071 39.6547 70.2305 37.341 68.7189L25.8504 61.2117Z" fill="#F6E8C8" />
                                <path d="M54.962 46.6384C53.0246 44.1492 53.6974 41.627 56.9803 39.0718C58.0361 38.25 59.1519 37.5053 60.3276 36.8377L59.4369 35.6933C58.3512 34.2985 56.7179 34.4498 54.537 36.1472C53.2885 37.1189 52.1592 38.3073 51.149 39.7123L49.7994 37.9784C50.8096 36.5734 51.9389 35.385 53.1874 34.4133C56.794 31.6061 59.575 31.4587 61.5304 33.971L68.0444 42.3402L66.8422 43.2759L65.1667 42.6496C64.5806 44.3928 63.5747 45.8192 62.149 46.9288C59.2591 49.1781 56.8634 49.0813 54.962 46.6384ZM58.3299 40.8057C56.4726 42.2513 56.0539 43.6291 57.0735 44.9392C58.0932 46.2493 59.3352 46.3345 60.7994 45.1949C62.2791 44.0432 63.2254 42.6755 63.6386 41.0917L61.6772 38.5717C60.5014 39.2393 59.3857 39.984 58.3299 40.8057Z" fill="#F6E8C8" />
                                <path d="M81.0573 15.9763L82.6644 15.4245L84.0272 17.5896L87.962 16.2388L88.6754 18.317L85.1425 19.5299L88.0105 27.8843C88.4766 29.242 89.2962 29.7196 90.4693 29.3169L92.2427 28.708L92.9561 30.7863L90.5177 31.6234C88.0792 32.4605 86.4113 31.5721 85.514 28.9582L81.0573 15.9763Z" fill="#F6E8C8" />
                                <path d="M120.685 11.6191V27H117.975V11.6191L120.685 11.6191ZM120.685 6.05273V8.61621L117.975 8.61621V6.05273H120.685Z" fill="#F6E8C8" />
                                <path d="M147.361 23.1573C146.159 26.658 147.013 28.9077 149.923 29.9065C152.832 30.9054 154.888 29.6545 156.09 26.1538C157.266 22.7271 156.4 20.5143 153.49 19.5155C150.581 18.5166 148.538 19.7306 147.361 23.1573ZM144.779 22.3328C146.444 17.4837 149.585 15.8518 154.203 17.4373C158.822 19.0227 160.299 22.24 158.634 27.0892C156.972 31.9291 153.832 33.5563 149.214 31.9709C144.614 30.3918 143.136 27.1791 144.779 22.3328Z" fill="#F6E8C8" />
                                <path d="M170.608 42.3233L180.055 30.1856L181.5 31.3103L180.676 33.1562C182.721 33.0892 184.486 33.6346 185.974 34.7922C189.002 37.1495 189.344 39.8348 186.999 42.848L181.07 50.4658L178.931 48.8013L184.887 41.1488C186.291 39.3455 186.095 37.7451 184.299 36.3475C183.074 35.3938 181.511 35.0005 179.612 35.1677L172.747 43.9878L170.608 42.3233Z" fill="#F6E8C8" />
                                <path d="M207.575 89.6913L209.989 89.0799C209.771 91.4018 209.975 93.7981 210.6 96.2689C211.485 99.7622 213.205 101.185 215.761 100.538C217.939 99.9865 218.701 98.4233 218.049 95.8483L217.388 93.2355C216.311 88.9849 217.619 86.3921 221.311 85.4572C225.192 84.4743 227.822 86.7045 229.201 92.148C229.8 94.5147 230.074 96.7876 230.021 98.9668L227.607 99.5781C227.849 97.351 227.67 95.054 227.071 92.6873C226.136 88.9953 224.438 87.4609 221.976 88.0842C219.799 88.6356 219.027 90.1609 219.66 92.6602L220.321 95.273C221.417 99.5993 220.119 102.23 216.427 103.165C212.45 104.172 209.798 102.053 208.47 96.8083C207.845 94.3375 207.546 91.9651 207.575 89.6913Z" fill="#F6E8C8" />
                                <path d="M229.06 125.329L228.92 127.022L226.39 127.4L226.046 131.546L223.856 131.365L224.165 127.642L215.362 126.913C213.931 126.794 213.165 127.353 213.062 128.589L212.908 130.458L210.718 130.276L210.931 127.707C211.144 125.138 212.627 123.967 215.381 124.195L229.06 125.329Z" fill="#F6E8C8" />
                                <path d="M210.393 152.001C213.282 153.268 213.891 155.807 212.22 159.616C211.682 160.842 211.055 162.028 210.339 163.174L211.667 163.757C213.286 164.467 214.65 163.557 215.76 161.026C216.396 159.577 216.823 157.994 217.043 156.278L219.055 157.16C218.836 158.877 218.408 160.459 217.773 161.908C215.937 166.094 213.561 167.547 210.646 166.268L200.933 162.008L201.545 160.613L203.317 160.366C203.003 158.554 203.209 156.821 203.934 155.166C205.405 151.813 207.558 150.758 210.393 152.001ZM210.207 158.734C211.153 156.579 210.865 155.167 209.345 154.501C207.825 153.834 206.692 154.35 205.946 156.049C205.193 157.766 205.012 159.419 205.402 161.009L208.327 162.292C209.043 161.145 209.67 159.959 210.207 158.734Z" fill="#F6E8C8" />
                                <path d="M188.889 179.284L200.205 189.701L198.965 191.048L197.193 190.074C197.243 191.952 196.626 193.588 195.343 194.982L193.684 193.454C194.927 192.103 195.458 190.568 195.276 188.847L187.053 181.277L188.889 179.284Z" fill="#F6E8C8" />
                                <path d="M174.052 214.318L172.557 215.127L170.857 213.215L167.198 215.196L166.152 213.263L169.437 211.485L165.233 203.717C164.55 202.454 163.663 202.118 162.572 202.708L160.923 203.601L159.878 201.668L162.145 200.441C164.412 199.214 166.204 199.816 167.519 202.247L174.052 214.318Z" fill="#F6E8C8" />
                            </svg>
                        </div>
                        <ArrowDown className='absolute top-1/2 transform -translate-y-1/2 animate-bounce text-gold1' size={62} />
                    </motion.div> */}
                </div>
            </div>
        </section>

    )
}

export default Hero

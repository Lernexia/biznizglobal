'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function ShortIntro() {
    const expertise = [
        "Precision in Tax & Accounting",
        "Seamless Mergers & Amalgamations",
        "Custom Business Strategies",
        "Strong Partnerships for Long"
    ]

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

    return (
        <section className='min-h-full bg-white  w-full overflow-x-hidden'>
            <div className=' py-20'>
                <div className="sizer flex justify-between gap-4 max-[750px]:flex-col">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.3, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='text-xl whitespace-nowrap'>
                        <h3> Empowering Your Business with
                        </h3>
                        <h3 className='font-bold'> Expert Consulting
                        </h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.3, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='text-xl max-[750px]:flex-end float-right text-end items-end flex w-full justify-end '>
                        <h3>Your Success, Our Expertise</h3>
                    </motion.div>
                </div>
                <div className="sizer">
                    <div className=' flex justify-between gap-10 max-[600px]:gap-1 items-center max-[750px]:flex-wrap my-10'>
                        <div className='max-w-[45rem] relative overflow-hidden rounded-xl w-full'>
                            <motion.div
                                style={{ y }}
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.3, delay: 0.6 }}
                                viewport={{ once: true }}
                                className='w-full h-full overflow-hidden'>
                                <Image
                                    src="/images/about-lp.jpg"
                                    alt="biziz about"
                                    width={1000}
                                    height={1000}
                                    className='rounded-xl'

                                />
                            </motion.div>
                            {/* <motion.div
                                style={{ y }}
                                className="absolute top-1 left-1 shadow-md rounded-xl z-[-1] bg-gold1/50 w-full h-full"></motion.div> */}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.3, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                {expertise.map((val: string, index: number) => (
                                    <div className='flex gap-3' key={index}>
                                        <svg className='animate-pulse' width="22" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 13.1855L2.3821 10.8034L8.43001 16.8496L24.5842 0.695435L26.9663 3.07754L8.42833 21.6138L0 13.1855Z" fill="#D2A024" />
                                        </svg>

                                        <p>{val}</p>

                                    </div>
                                ))}
                            </div>

                            <div className='my-5'>
                                <h2 className='text-lg font-bold'>A Trusted Partner for Business Owners</h2>
                                <p className='max-w-md text-justify'>
                                    Whether you’re a business or an established enterprise, we align our strategies with your vision to ensure long-term success.
                                </p>
                            </div>

                            <Link href='#' className='bg-gradient-to-tr  shadow-lg from-gold2 to-gold1 hover:rounded-full transition-all duration-150 w-fit rounded-t-full rounded-br-full flex gap-3 text-white p-3 px-5 font-semibold'>
                                Know more
                                <MoveUpRight className='animate-pulse' />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShortIntro

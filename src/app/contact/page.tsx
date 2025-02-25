'use client';

import React from 'react'
import Nav from '../(components)/Nav'
import Footer from '../(components)/Footer'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import NextLevel from '../(components)/NextLevel';

function page() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <motion.main
            initial={{ opacity: 0, scale: 1, y: 100, filter: "blur(10px)", background: '#00000046' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", background: 'transparent' }}
            transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
            }}
            className='bg-gold1/[0.025]'>
            {/* <CustomCursor /> */}
            <Nav duration={0.5} />
            <section className='pt-20'>
                <div className="sizer">
                    <div className='flex flex-wrap-reverse items-center justify-center gap-16'>
                        <div className="l">
                            <div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.3, delay: 0.6 }}
                                    className='font-bold text-2xl max-w-md leading-none pb-5'>Get in touch using the form below or contact us directly.
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.3, delay: 0.7 }}
                                    className='text-lg max-w-md leading-tight'>Bizniz respects your privacy and will only use your information to provide the assistance you need.</motion.p>
                            </div>
                            <div className='py-10 contact-form'>
                                <form>
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1.3, delay: 0.8 }}
                                        >
                                            <input type="text" placeholder="Name" />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1.3, delay: 0.9 }}
                                        >
                                            <input type="email" placeholder="Email" />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1.3, delay: 1 }}
                                        >
                                            <input type="text" placeholder="Phone" />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1.3, delay: 1.2 }}
                                        >
                                            <textarea placeholder="Message" />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1.3, delay: 1.3 }}
                                        >
                                            <button className='px-8 rounded-t-full shadow-lg rounded-br-full transition-all duration-500 hover:rounded-full py-3 bg-gradient-to-r from-gold2 to-gold1 border-none outline-none  text-white'>Send</button>
                                        </motion.div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="r overflow-hidden max-w-xl">
                            <div className='max-w-[45rem] relative overflow-hidden rounded-xl w-full'>
                                <motion.div
                                    style={{ y }}
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.3, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className='w-full h-full overflow-hidden'>
                                    <Image
                                        src="/images/business-contact.jpg"
                                        alt="business-contact"
                                        width={1000}
                                        height={1000}
                                        className='rounded-xl'

                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-20'>
                <div className="sizer">
                    <div className="cards flex flex-wrap gap-5 justify-between items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="card flex items-start gap-5 justify-between text-black  max-w-xs p-5 rounded-t-full rounded-br-full">
                            <div className="icon h bg-gradient-to-r text-white p-3  from-gold2 to-gold1 rounded-t-full rounded-br-full shadow-lg h-full flex justify-center items-center">
                                <MapPin size={25} />
                            </div>
                            <div>
                                <h3 className='font-bold text-xl pb-3'>Address</h3>
                                <p>No 612 , 6th floor , EA Chambers tower II  , WHITES Road royapettah , Chennai ,Tamilandu , 600002</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="card flex items-start gap-5 justify-between text-black  max-w-xs p-5 rounded-t-full rounded-br-full">
                            <div className="icon bg-gradient-to-r text-white p-3  from-gold2 to-gold1 rounded-t-full rounded-br-full shadow-lg h-full flex justify-center items-center">
                                <Mail size={25} />
                            </div>
                            <div>
                                <h3 className='font-bold text-xl pb-3'>Email</h3>
                                <Link target='_blank' href='mailto:contact@biznizglobal.com' className='hover:underline'>contact@biznizglobal.com</Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="card flex items-start gap-5 justify-between text-black  max-w-xs p-5 rounded-t-full rounded-br-full">
                            <div className="icon bg-gradient-to-r text-white p-3  from-gold2 to-gold1 rounded-t-full rounded-br-full shadow-lg h-full flex justify-center items-center">
                                <PhoneCall size={25} />
                            </div>
                            <div>
                                <h3 className='font-bold text-xl pb-3'>Call Us</h3>
                                <Link target='_blank' href='tel:+919003012834' className='hover:underline'>+91 9003012834</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className='pt-20'>
                {/* <MapWithPin /> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6191800159404!2d80.25973367482091!3d13.059895112936873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663d5cf46bf5%3A0x1ddf6d57302285a!2sSpaces%20-%20Chennai%2C%20Express%20Avenue!5e0!3m2!1sen!2sin!4v1740510508232!5m2!1sen!2sin" className='w-full h-[500px]' style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps Embed"></iframe>
            </section>
            <NextLevel />
            <Footer />
        </motion.main>
    )
}

export default page

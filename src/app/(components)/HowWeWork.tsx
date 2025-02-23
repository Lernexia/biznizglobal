"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import Image from "next/image";

function HowWeWork() {
    const hww_data = [
        {
            title: "What Sets Us Apart:",
            content: [
                `Comprehensive Approach: At Bizniz, we focus on a complete, all-encompassing approach to consulting. We address every aspect of your business management and financial strategies to improve efficiency and unlock your business's full potential.`,
                `Client-Focused Partnership: Our clients are at the center of everything we do. We build long-term relationships by understanding each client's unique needs and crafting customized solutions that align with their specific goals.`,
                `Innovation and Agility: We keep pace with the latest industry trends and embrace innovation to ensure that our clients are always prepared for the rapidly changing business environment.`,
                `Commitment to Ethics: We are grounded in integrity and uphold ethical practices at every step. This ensures transparency and builds the trust that’s essential in all our client relationships.`
            ],
            image: "/images/ch1.jpg",
        },
        {
            title: "Mission & Vision",
            content: [
                `Mission: Our mission is to partner with organizations globally, applying our expertise and innovative methods to enhance business strategies, optimize operations, and drive sustainable growth.`,
                `Vision: We aim to inspire positive change across the globe, helping businesses achieve exceptional success by fostering flexibility, collaboration, and innovative thinking.`
            ],
            image: "/images/ch2.jpg",
        },
        {
            title: "Our History",
            content: [
                `Bizniz Global began its journey in 2014 in the vibrant city of Cochin, Kerala, India. Since then, we’ve been committed to delivering excellence and have built a reputation as a trusted partner for businesses seeking comprehensive consulting and accounting services.`,
                `Our team of seasoned professionals brings years of experience across various industries, enabling us to offer insightful and tailored strategies that drive growth and success. At Bizniz, we take pride in delivering solutions that support long-term progress and help our clients thrive in a competitive landscape.`
            ],
            image: "/images/ch3.jpg",
        }
    ];

    return (
        <section className="bg-white pt-20">
            <div className="sizer">
                <div className="relative w-full h-full">
                    <motion.div
                        className="text-center text-4xl font-bold"
                    >
                        <h3>How We Address and Resolve</h3>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-gold2 to-gold1">
                            All Business Challenges
                        </h2>
                    </motion.div>

                    {/* Ensure this div is the correct height for scrolling */}
                    <div className="relative min-h-screen flex flex-col gap-5 pb-20">
                        {hww_data.map((data, index) => (
                            <motion.div
                                key={index}
                                className="card sticky pt-20 top-0 w-full text-white h-[calc(100vh-7rem)]"
                            >
                                <div className="card-content w-full h-full relative overflow-hidden">
                                    <div className="card-image w-full h-full ">
                                        <motion.div className="w-full h-full overflow-hidden rounded-[30px]">
                                            <div className="absolute  rounded-[30px] top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/95 z-10"></div>
                                            <Image
                                                src={data.image}
                                                alt="Card Image"
                                                width={1000}
                                                height={600}
                                                className="w-full h-full object-cover blur-[1px]"
                                            />
                                        </motion.div>
                                    </div>

                                    <div className="absolute top-0 left-0 w-full h-full p-8 z-20 flex flex-col justify-center text-start">
                                        <h4 className="text-4xl font-bold max-[770px]:text-2xl">
                                            {data.title}
                                        </h4>
                                        <ul className="list-decimal p-5 max-[630px]:p-1">
                                            {data.content.map((item: string, idx: number) => (
                                                <li
                                                    key={idx}
                                                    className="text-lg max-[770px]:text-[16px] mt-3 max-[631px]:mt-2 font-medium hyphens-auto break-words max-w-prose text-justify"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}

export default HowWeWork;



function Cards({ index, data }: { index: number, data: any }) {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef, // Target each individual card
        offset: ["start end", "end end"], // Adjust offset for smooth effect
    });

    const y = useTransform(scrollYProgress, [0, 1], [20, -100]);

    return (
        <motion.div
            ref={cardRef}
            key={index}
            className="card sticky top-0 w-full text-white h-[calc(100vh-3.5rem)]"
            initial={{ scale: 0.75, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="card-content w-full h-full relative origin-top">
                <div className="card-image w-full h-full overflow-hidden rounded-[30px]">
                    <motion.div
                        style={{ y }} 
                        className="w-full h-full overflow-hidden rounded-[30px]"
                    >
                        <Image
                            src={data.image}
                            alt="Card Image"
                            width={1000}
                            height={600}
                            className="w-full h-full object-cover blur-[1px]"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/95 z-10"></div>
                    </motion.div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full p-8 z-20 flex flex-col justify-center text-start">
                    <h4 className="text-4xl font-bold max-[770px]:text-2xl">
                        {data.title}
                    </h4>
                    <ul className="list-decimal p-5 max-[630px]:p-1">
                        {data.content.map((item: string, idx: number) => (
                            <li
                                key={idx}
                                className="text-lg max-[770px]:text-[16px] mt-3 max-[631px]:mt-2 font-medium hyphens-auto break-words max-w-prose text-justify"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}


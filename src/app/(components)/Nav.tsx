"use client";

import { Mail, MapPin, Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

function Nav({duration=4.3}: {duration: number}) {
    let _duration = duration;
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: _duration, delay: 0.5 }}
            viewport={{ once: true }}
            className='relative top-0 h-auto'
        >
            <div className="py-3 bg-white text-black font-bold">
                <div className="nav-cont-2 sizer h-full flex justify-between max-[720px]:justify-between items-center space-x-20">
                    <div className="nav-left-2 ">
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
                    <div className="nav-left-2-2 max-[720px]:hidden flex justify-center gap-10 text-lg">
                        <Link className="cursor-pointer hover:underline" href={"#"}>
                            About us
                        </Link>
                        <Link className="cursor-pointer hover:underline" href={"#"}>
                            Services
                        </Link>
                        <Link className="cursor-pointer hover:underline" href={"#"}>
                            Blog
                        </Link>
                        <Link className="cursor-pointer hover:underline" href={"/contact"}>
                            Contact us
                        </Link>
                    </div>
                    <div className="max-[720px]:flex hidden">
                        <Menu size={32} />
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Nav

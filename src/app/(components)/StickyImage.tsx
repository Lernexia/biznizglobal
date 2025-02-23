import Reveal from '@/lib/animations/Revel.animation'
import Image from 'next/image'
import React from 'react'

function StickyImage() {


    const sticky_data = [
        {
            title: "companies consulted",
            num: [
                5, 0, 0
            ]
        },
        {
            title: "Strategies Planned",
            num: [
                7, 2, 1, 0
            ]
        },
        {
            title: "Company Registerted",
            num: [
                1, 0, 0
            ]
        },
        {
            title: "Satisfied clinets",
            num: [
                1, 0, 0, 0
            ]
        }
    ]


    return (
        <section className='h-[22rem] max-[423px]:h-[28rem] bg-gradient-to-br from-gold1/50 to-gold1/50 relative'>
            <div className='bg-black/70 w-full h-full relative'></div>
            <div className='fixed z-[-1] top-0 left-0 w-full h-full'>
                <Image
                    src='/images/sticky-img.jpg'
                    alt='sticky-image'
                    width={1000}
                    height={1000}
                    className='w-full h-full object-cover'
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-full">

                <div className='w-full h-[1px] bg-white/20 relative left-0 top-[20%]'></div>
                <div className='w-full h-[1px] relative left-0 top-[25%]'>
                    <div className='flex gap-4 justify-between items-center sizer text-white flex-wrap'>
                        {
                            sticky_data.map((data: any, index: number) => (
                                <Reveal key={index} view={false} delay={0.5} duration={0.5}>
                                    <div key={index}>
                                        <div className="title text-xl capitalize text-wrap">
                                            <h5>{data.title}</h5>
                                        </div>
                                        <div className="num text-center text-xl flex gap-1 items-center">
                                            {
                                                data.num.map((num: number, index: number) => (
                                                    <span key={index} className='text-stroke text-transparent'>{num}</span>
                                                ))
                                            }
                                            <span className='text-gold1 text-[60px]'>+</span>
                                        </div>
                                    </div>
                                </Reveal>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default StickyImage

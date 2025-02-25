import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function NextLevel() {
    return (
        <section className="relative bg-gradient-to-tr from-gold1/50 to-blue1/50 py-20">
            <div className="relative sizer text-center text-white">
                <h3 className="text-4xl font-semibold max-md:text-3xl">
                    Ready to take your business to the
                    <span className="text-transparent drop-shadow-xl bg-clip-text bg-gradient-to-r from-gold2 to-gold1"> next</span>
                    <span className="text-transparent drop-shadow-xl bg-clip-text bg-gradient-to-r from-blue2 to-blue1"> level?</span>
                </h3>
                <h5 className="text-xl max-md:text-lg py-5">Get expert guidance in accounting, auditing, taxation, and business strategy.</h5>
                <Link href="/contact" className="cursor-pointer bg-gradient-to-r from-blue2 to-blue1 rounded-t-full rounded-br-full font-semibold text-lg max-md:text-sm items-center px-5 py-3 hover:rounded-full transition-all duration-500 flex gap-2 w-fit m-auto">
                    Contact Us
                    <ArrowRight className="animate-slide-x" />
                </Link>
                <h5 className="text-xl max-md:text-lg py-5">Contact us for expert solutions today!</h5>
            </div>
        </section>
    )
}

export default NextLevel

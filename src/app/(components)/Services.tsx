'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AuditingAndAssuranceSVG, BusinessConsultantSVG, IpoListingSVG, TaxationAndAdvisorySVG } from "@/lib/svg/ServicesSVG";
import Reveal from '@/lib/animations/Revel.animation';

function Services() {
  const services_data = [
    {
      title: "Taxation & Advisory",
      description:
        "Your one stop solution for tax planning and consultation for Individuals and corporates",
      image: <TaxationAndAdvisorySVG />,
    },
    {
      title: "Auditing & Assurance",
      description:
        "We are specialized in Internal Audit , Due diligence , Stock Audits etc",
      image: <AuditingAndAssuranceSVG />,
    },
    {
      title: "IPO Listing & Advisory Services",
      description:
        "Our IPO services guide you through the entire process, from planning and preparation to listing and beyond.",
      image: <IpoListingSVG />,
    },
    {
      title: "Business Consulting",
      description:
        "Our management consultancy includes Business Planning and strategy development.",
      image: <BusinessConsultantSVG />,
    },
  ];

  return (
    <section className="py-20 bg-gold2/0 min-h-full h-full w-full ">
      <div className="sizer">
        <div className="cards flex gap-10 flex-wrap justify-stretch items-start max-[900px]:justify-center max-[900px]:gap-10">
          {services_data.map((service, index) => (
            <motion.div
              key={index}
              className="card max-w-[23rem] items-start flex gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ amount: 0.5 }}
                className="icon bg-gradient-to-tr from-gold2 to-gold1 shadow-lg w-fit p-3 rounded-b-[30px] rounded-tl-[30px]">
                {service.image}
              </motion.div>
              <motion.div
                className='content'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ amount: 0.5 }}
              >
                <motion.h4
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ amount: 0.5 }}
                  className="font-bold text-xl">{service.title}</motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ amount: 0.5 }}
                  className="font-light text-md text-justify text-pretty">
                  {service.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AuditingAndAssuranceSVG, BusinessConsultantSVG, IpoListingSVG, TaxationAndAdvisorySVG } from "@/lib/svg/ServicesSVG";

function Services() {
  const services_data = [
    {
      title: "Auditing & Assurance",
      description:
        "We are specialized in Internal Audit , Due diligence , Stock Audits etc",
      image: <AuditingAndAssuranceSVG />,
    },
    {
      title: "Taxation & Advisory",
      description:
        "Your one stop solution for tax planning and consultation for Individuals and corporates",
      image: <TaxationAndAdvisorySVG />,
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
    <section className="py-20 bg-white min-h-full h-full w-full">
      <div className="sizer">
        <div className="cards flex gap-5 flex-wrap justify-between items-start max-[900px]:justify-center max-[900px]:gap-10">
          {services_data.map((service, index) => (
            <motion.div
              key={index}
              className="card max-w-[23rem] items-start flex gap-5"
              initial={{ opacity: 0, y: 30 }} // Initial state: invisible and slightly moved down
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and reset vertical position
              transition={{
                delay: index * 0.1, // Stagger the animation for each card
                duration: 0.5, // Animation duration
                ease: 'easeOut',
              }}
              viewport={{ once: true }} // Animation triggers only once when the element is in the viewport
            >
              <div className="icon bg-gradient-to-tr from-gold2 to-gold1 shadow-lg animate-pulse w-fit p-3 rounded-b-[30px] rounded-tl-[30px]">
                {service.image}
              </div>
              <div className="content">
                <h3 className="font-bold text-xl">{service.title}</h3>
                <p className="font-light text-md text-justify text-pretty">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

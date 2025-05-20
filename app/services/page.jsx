"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { FaLaptopCode, FaPalette, FaMobileAlt, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "/services",
    icon: <FaLaptopCode className="text-white text-2xl" />,
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces and enhancing user experiences to ensure seamless interaction.",
    href: "/services",
    icon: <FaPalette className="text-white text-2xl" />,
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "Creating high-quality mobile applications that meet user needs and business goals.",
    href: "/services",
    icon: <FaMobileAlt className="text-white text-2xl" />,
  },
  {
    num: "04",
    title: "SEO Optimization",
    description:
      "Optimizing websites for search engines to improve rankings and drive organic traffic.",
    href: "/services",
    icon: <FaSearch className="text-white text-2xl" />,
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-primary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Badge */}
            <div className="absolute -top-6 -right-6 bg-accent w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-primary">
              {service.num}
            </div>

            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              {service.description}
            </p>

            {/* Link */}
            {service.href ? (
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
              >
                Learn More <BsArrowDownRight />
              </Link>
            ) : (
              <div className="text-accent flex items-center gap-2">
                Coming Soon <BsArrowDownRight />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

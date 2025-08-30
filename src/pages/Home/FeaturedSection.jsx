import React from "react";
import { FaHandsHelping, FaTint, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaHeartbeat, FaProcedures, FaHospitalAlt } from "react-icons/fa";
  
const features = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-green-400 w-12 h-12" />,
    title: "Saves Lives in Emergencies",
    desc: "Your donated blood can be the difference between life and death during accidents, surgeries, and natural disasters.",
  },
  {
    id: 2,
    icon: <FaProcedures className="text-green-400 w-12 h-12" />,
    title: "Supports Patients with Chronic Illnesses",
    desc: "Regular donations are vital for patients battling cancer, thalassemia, and other long-term conditions.",
  },
  {
    id: 3,
    icon: <FaHospitalAlt className="text-green-400 w-12 h-12" />,
    title: "Strengthens Community Health",
    desc: "A steady blood supply ensures hospitals are ready to help anyone, anytime — creating a healthier, safer community.",
  },
];

export default function FeaturedSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 mt-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-center mb-18 text-gray-900 "
      >
       How blood donation help!
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {features.map(({ id, icon, title, desc }) => (
          <motion.div
            key={id}
            className="card bg-[#EFEFEF] p-6 rounded-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
          >
            <div>{icon}</div>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-green-700">{title}</h3>
            <p className="text-gray-500">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

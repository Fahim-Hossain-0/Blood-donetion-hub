import React from "react";
import { UserPlus, Search, Droplet, HeartHandshake } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <UserPlus className="w-12 h-12 text-red-600" />,
      title: "Register as Donor or Patient",
      desc: "Sign up and create your profile. Donors share their blood group and availability, patients provide their request details.",
    },
    {
      id: 2,
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Search & Request",
      desc: "Patients can search for available donors or create a blood request that instantly notifies nearby donors.",
    },
    {
      id: 3,
      icon: <Droplet className="w-12 h-12 text-green-600" />,
      title: "Find a Match",
      desc: "The system connects patients with compatible donors quickly and securely, ensuring transparency.",
    },
    {
      id: 4,
      icon: <HeartHandshake className="w-12 h-12 text-pink-600" />,
      title: "Donate & Save Lives",
      desc: "Once matched, donors can donate at the nearest hospital or blood bank. Together, we save lives!",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          How <span className="text-green-600">It Works</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Our platform makes blood donation simple, quick, and effective. 
          Here’s how you can use the website to request or donate blood in just a few steps.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
              <span className="mt-4 block text-sm font-bold text-green-600">
                Step {step.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

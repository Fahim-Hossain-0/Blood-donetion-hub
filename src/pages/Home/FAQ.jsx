import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I request blood through this website?",
      answer:
        "Simply sign up, go to the request section, and fill out the details such as blood group, location, and urgency. Nearby donors will be notified instantly.",
    },
    {
      id: 2,
      question: "Do I need to pay to use the platform?",
      answer:
        "No, the Blood Donation App is completely free to use for both donors and patients. We believe saving lives should never come at a cost.",
    },
    {
      id: 3,
      question: "How do you ensure donor reliability?",
      answer:
        "All donors are verified during registration, and the system uses role-based security to prevent misuse. Only approved and active donors are shown to patients.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have doubts? Here are the answers to some of the most common
            questions about using our platform.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-5 text-left font-semibold text-gray-800 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 border-t-emerald-400 border-t bg-red-50 rounded-b-2xl animate-fadeIn">
                  <div className="mt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Extra Help */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Still have questions? We’re here to help.
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-600  text-white px-6 py-3 rounded-full shadow-md hover:bg-red-700 transition "
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

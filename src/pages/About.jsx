import React from "react";
import {
  Heart,
  Users,
  Droplet,
  ShieldCheck,
  Globe,
  Handshake,
  BarChart3,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="pb-20 mt-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-green-600">Blood Donation App</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Blood Donation App is a life-saving initiative that connects donors
            with patients in need. We make blood donation simple, reliable, and
            community-driven — ensuring that no one has to struggle in times of
            emergency.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              To create a transparent and trusted platform where volunteers and
              donors can directly support patients. Our mission is to ensure
              that blood is available whenever and wherever it is needed most.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              We envision a future where every life-threatening situation can be
              tackled through the power of community-driven blood donation and
              medical support.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1483/1483336.png"
              alt="Blood Donation Illustration"
              className="w-80"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <Heart className="w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Save Lives
            </h4>
            <p className="text-gray-600">
              Every donation can save up to three lives. Be the hero someone is
              waiting for.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Strong Community
            </h4>
            <p className="text-gray-600">
              A growing network of donors, volunteers, and admins working
              together.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <Droplet className="w-12 h-12 text-red-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Easy Requests
            </h4>
            <p className="text-gray-600">
              Patients or families can request blood with just a few clicks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <ShieldCheck className="w-12 h-12 text-green-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Secure & Reliable
            </h4>
            <p className="text-gray-600">
              Role-based access ensures safe and verified donor management.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-xl border hover:shadow-md">
              <Globe className="w-10 h-10 text-indigo-600 mb-3 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Wide Reach</h4>
              <p className="text-gray-600">
                Connects donors and patients from different locations instantly.
              </p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow-md">
              <Handshake className="w-10 h-10 text-orange-500 mb-3 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Trusted Platform</h4>
              <p className="text-gray-600">
                Built with transparency and accountability for all users.
              </p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow-md">
              <BarChart3 className="w-10 h-10 text-teal-600 mb-3 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Proven Impact</h4>
              <p className="text-gray-600">
                Hundreds of lives supported through successful donations.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-red-200 rounded-xl">
            <h4 className="text-3xl font-bold text-red-600">1K+</h4>
            <p className="text-gray-600">Registered Donors</p>
          </div>
          <div className="p-6 bg-blue-200 rounded-xl">
            <h4 className="text-3xl font-bold text-blue-600">500+</h4>
            <p className="text-gray-600">Successful Donations</p>
          </div>
          <div className="p-6 bg-green-200 rounded-xl">
            <h4 className="text-3xl font-bold text-green-600">100%</h4>
            <p className="text-gray-600">Secure & Verified</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { Star } from "lucide-react";

const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ayesha Rahman",
      role: "Blood Donor",
      review:
        "This platform made it so easy to connect with patients. Within hours, I got a request and was able to donate. Truly life-saving!",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
    },
    {
      id: 2,
      name: "Mehedi Hasan",
      role: "Blood Recipient",
      review:
        "When my father needed urgent blood, I found a donor within minutes. The process was smooth and stress-free. Thank you!",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Nazmul Islam",
      role: "Volunteer",
      review:
        "As a volunteer, I’ve seen how this app bridges the gap between donors and patients. A great initiative to save lives!",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 4,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          What Our <span className="text-green-600">Users Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Real stories from donors, recipients, and volunteers who trust our
          platform and contribute to saving lives.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((user) => (
            <div
              key={user.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-left"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-4">“{user.review}”</p>

              {/* Rating */}
              <div className="flex">
                {[...Array(user.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;

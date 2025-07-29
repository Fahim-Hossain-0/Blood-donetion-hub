import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-green-300 text-white py-24 px-4 text-center overflow-hidden pt-12 rounded-2xl">
      {/* Background Light Bubbles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-ping -z-10" />

      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}

        className="text-4xl md:text-6xl font-extrabold mb-4 leading-16 text-red-500"
      >
       Your shared blood <br /> <span className='text-yellow-400'>can be</span> <br /> <span className='text-green-400'>
        someone’s lifeline
       </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl mb-10 text-gray-700"
      >
        Join our life-saving community or find a donor near you.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4 justify-center items-center"
      >
        <button
          onClick={() => navigate('/register')}
          className="bg-green-500 hover:bg-yellow-400 text-green-100 font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
        >
          Join us
        </button>
        <button
          onClick={() => navigate('/search')}
          className="bg-white hover:bg-gray-700 hover:text-white text-red-600 font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
        >
          Search Donors
        </button>
      </motion.div>
    </section>
  );
};

export default Banner;

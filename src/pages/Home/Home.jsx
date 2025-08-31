import React from 'react';
import Banner from './Banner';
import FeaturedSection from './FeaturedSection';
import ContactSection from './ContactSection';
import Blogs from '../Blogs';
import { Link } from 'react-router';
import HowItWorks from './HowItWorks';
import UserReviews from './UserReviews';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <FeaturedSection/>
            <div>
            <Blogs></Blogs>
            <Link to='/blogs' className="flex justify-center py-2 border border-green-500 w-[15%] mx-auto coursor-pointer mt-10 rounded-lg text-green-600 font-semibold hover:bg-green-500 hover:text-white transition">
                  See All
                </Link>
            </div>
            <HowItWorks></HowItWorks>
            <UserReviews></UserReviews>

            <ContactSection/>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
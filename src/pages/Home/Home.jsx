import React from 'react';
import Banner from './Banner';
import FeaturedSection from './FeaturedSection';
import ContactSection from './ContactSection';

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <FeaturedSection/>
            <ContactSection/>
        </div>
    );
};

export default Home;
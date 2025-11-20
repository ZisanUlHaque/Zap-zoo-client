import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Review from './Review';
import HowItWorks from './HowItWorks';
import OurService from './OurService';
import Divider from './Divider';

const reviewPromise = fetch('/reviews.json').then(res => res.json());
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurService></OurService>
            <Brands></Brands>
            <Divider></Divider>
            <Review reviewPromise={reviewPromise}></Review>
        </div>
    );
};

export default Home;
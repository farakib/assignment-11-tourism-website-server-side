import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Blogs></Blogs>
        </div>
    );
};

export default Home;
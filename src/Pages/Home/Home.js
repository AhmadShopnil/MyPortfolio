import React from 'react';
import Blog from '../Blog/Blog';

import About from './About';
import Banner from './Banner';
import Contact from './Contact/Contact';
import MySelf from './MySelf/MySelf';
import Project from './Project/Project';
import Skill from './Skill/Skill';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <About></About>
            <Project></Project>
            <MySelf></MySelf>
            <Blog></Blog>
            <Skill></Skill>
            <Contact></Contact>


        </div>
    );
};

export default Home;
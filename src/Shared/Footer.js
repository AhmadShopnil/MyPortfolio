import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillLinkedin, FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer justify-center items-center p-4 ">
            <div className="items-center grid-flow-col">

                <p >Copyright © 2022 - All right reserved</p>
            </div>
            <div className="flex mx-auto justify-center gap-4 text-2xl">
                <span><a target="_blank" href='https://www.linkedin.com/in/ahmad-shopnil/'><FaLinkedinIn /></a></span>
                <span><a target="_blank" href='https://www.facebook.com/swopnil.spl'><FaFacebook /></a></span>
                <span><a target="_blank" href='https://github.com/AhmadShopnil'><FaGithub /></a></span>

            </div>
        </footer>

        // <footer className="footer p-10 ">
        //     <div>
        //         <p>Abu Shala ahamad<br />Full Stack Web Developer</p>
        //     </div>
        //     <div>
        //         <span className="footer-title">Social</span>
        //         <div className="grid grid-flow-col gap-4 text-2xl">


        //             <span><a target="_blank" href='https://www.linkedin.com/in/ahmad-shopnil/'><FaLinkedinIn /></a></span>
        //             <span><a target="_blank" href='https://www.facebook.com/swopnil.spl'><FaFacebook /></a></span>
        //             <span><a target="_blank" href='https://github.com/AhmadShopnil'><FaGithub /></a></span>



        //         </div>
        //     </div>
        // </footer>
    );
};

export default Footer;
import React from 'react';
// import { Link } from 'react-router-dom';
import { AiFillLinkedin, FaContao, FaDochub, FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaLocationArrow, FcDocument } from "react-icons/fa";
import { Link } from 'react-scroll';
import me from '../../img/me.jpg'


const About = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center mt-6 md:mt-20">


                <div className="avatar  h-56 md:h-72  flex justify-center md:justify-end  md:w-2/6" data-aos="fade-right">
                    <div className="shadow-inner shadow-2xl rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-8" >
                        <img src={me} className="shadow-2xl mask mask-circle  " alt='' />
                        {/* <img src="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg" className="shadow-2xl mask mask-circle  " alt='' /> */}
                    </div>
                </div>

                <div className='flex md:w-3/6'>


                    <ul className=" flex flex-col justify-around text-2xl ml-4 md:m-10">
                        <li className=" ">
                            <a target="_blank" href='https://www.linkedin.com/in/ahmad-shopnil/'>
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className=" ">
                            <a target="_blank" href='https://www.facebook.com/swopnil.spl'>
                                <FaFacebook />
                            </a>
                        </li>
                        <li className=" ">
                            <a target="_blank" href='https://github.com/AhmadShopnil'>
                                <FaGithub />
                            </a>
                        </li>
                    </ul>



                    <div className='md:w-3/4 p-8 flex flex-col  justify-center text-left' data-aos="fade-left">

                        <h1 className="text-3xl font-bold">Abu Shala
                            Ahamad</h1>
                        <h4 className='text-gray-400'>--Frontend Developer </h4>
                        <p className="py-6">Hello, I am Frontend developer. I did so many projects using react , <br /> node js and express. Some of my projects are bellow down</p>

                        <div className='flex gap-2 justify-start '>
                            <a className=" rounded-full btn btn-outline btn-sm" target="_blank" href='https://drive.google.com/file/d/1luKyWc_QN460wlCPUtwFmH0FiMWX3mQD/view?usp=share_link'>
                                <span className='mr-2'>Resume</span>
                                <FaDochub />
                            </a>

                            <Link to='contact' className=" rounded-full btn btn-outline btn-primary btn-sm">
                                <span className='mr-2'>Contact</span>
                                <FaLocationArrow />

                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    );
};

export default About;
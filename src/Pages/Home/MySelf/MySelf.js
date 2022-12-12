import React from 'react';
import me from '../../../img/me.jpg'

const MySelf = () => {
    return (
        <div id='myself'>
            <h2 className='text-4xl font-bold m-8'>About Me--</h2>
            <div>

                <div className="hero ">
                    <div className="hero-content w-full flex-col lg:flex-row-reverse">
                        <img src="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg" className=" md:w-1/3  rounded-lg shadow-2xl" />

                        <div className=' w-2/3 md:w-1/3'>
                            <h1 className="text-3xl font-bold">Mern Stack Developer</h1>
                            <p className="py-4">I am a student Bachelor of Business Administration, but i am passionate about computer programming.I am motivated designer and developer with experience creating custom websites through HTML CSS,
                                JAVASCRIPT,REACT, NODE JS and Strong creative and analytical skills.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySelf;
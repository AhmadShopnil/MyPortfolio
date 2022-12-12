import React from 'react';
import me from '../../../img/me.jpg'

const MySelf = () => {
    return (




        <div id='myself' className='m-6' data-aos="fade-up">
            <h2 className='text-4xl font-bold mb-6  '>About Me--</h2>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg" className="max-w-xl rounded-lg shadow-2xl" data-aos="fade-up" />
                    <div data-aos="fade-up">
                        <h1 className="text-3xl font-bold">Mern Stack Developer</h1>
                        <p className="py-4">I am a student Bachelor of Business Administration, but i am passionate about computer programming.I am motivated designer and developer with experience creating custom websites through HTML CSS,
                            JAVASCRIPT,REACT, NODE JS and Strong creative and analytical skills.</p>

                        <p className='font-semibold'>Ratings:</p>
                        <div className="rating  rating-sm mt-2">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySelf;
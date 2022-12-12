import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className="hero my-8">
            <div className="hero-content flex-col" data-aos="fade-up">
                <div className="text-center ">
                    <h1 className="text-4xl font-bold">Contact Me</h1>

                </div>
                <div className=" flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-xl">
                    <form action="https://formspree.io/f/xbjbnpnd"
                        method="POST" className="card-body">
                        <div className=' flex flex-col md:flex-row gap-2'>

                            <div className=''>
                                <div className="form-control mb-2">

                                    <input name='Name' type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <input name='Email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                            </div>
                            <textarea name='Message' className="textarea textarea-bordered" placeholder="Message"></textarea>

                        </div>


                        <div className="form-control mt-6 ">
                            <input className='btn' type="submit" value="Send" />
                        </div>
                    </form>




                </div>
            </div>
        </div>
    );
};

export default Contact;
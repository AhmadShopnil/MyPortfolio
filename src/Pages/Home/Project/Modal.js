import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import ProjectImgSlide from './ProjectImgSlide';

const Modal = ({ modalData }) => {

    const { title, img1, img2, img3, type, live, features, id, technology } = modalData


    const imgs = {
        img1, img2, img3
    }

    return (
        <div className=''>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full h-screen  max-w-6xl relative my-20">
                    <div className='mb-6'>
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <span className="text-lg font-bold">{title}</span>
                        <span className="text-sm mx-4 ">{type}</span>
                        <span className='text-sm ml-4'>
                            <a target="_blank" href={live}>View Live</a>
                        </span>
                    </div>

                    <ProjectImgSlide key={id} imgs={imgs}></ProjectImgSlide>

                    <div className='my-10'>
                        <h2 className='text-3xl mb-4 '>All Features </h2>
                        <ul>
                            {
                                features?.map(feature => <li className='flex items-center ' key={id}><FaArrowAltCircleRight /><span className='text-sm mx-3 p-1'>{feature}</span></li>)
                            }
                        </ul>

                    </div>
                    <div className='mb-10'>

                        <p className=''><span className='font-bold'>Tenchnology</span>: {technology}</p>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Modal;
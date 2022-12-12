import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemsCard = ({ project, setModalData }) => {
    const { title, img1, type, live } = project

    // const [modalData, setModalData] = useState({})

    const handleSetModalData = () => {
        setModalData(project)
    }


    return (

        <div className='data-aos="flip-left" '>

            <div className="itemCard card mb-16"  >
                <div className="imgbox">
                    <img className='h-44' src={img1} alt='' />
                </div>
                <div className="content card-body">
                    <span>{title}</span>
                    <p>
                        {type}
                    </p>
                    <div className='flex justify-around '>
                        <a className='hover:text-xl duration-500' target="_blank" href={live}>View Live</a>


                        <label onClick={handleSetModalData} htmlFor="my-modal-3" >

                            <span className='cursor-pointer hover:text-xl duration-500'>Details</span>

                        </label>

                    </div>


                </div>
            </div>

        </div>



    );
};

export default ItemsCard;
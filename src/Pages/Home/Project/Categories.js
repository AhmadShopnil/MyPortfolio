import React from 'react';
import './Categoryies.css'


const Categories = () => {
    const ProjectCategories = ['All', 'Portfolio', 'Services', 'Ecommerce', 'NewsPortal']

    return (
        <div className='flex flex-wrap gap-4 justify-center text-white my-3'>
            {
                ProjectCategories?.map((category, i) => {
                    return <button className="btn btn-sm btn-outline btn-black catMenu" key={i} >{category}</button>
                })
            }

        </div>
    );
};

export default Categories;
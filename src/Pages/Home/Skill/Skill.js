import React from 'react';

const Skill = () => {
    return (
        <div className='m-8' data-aos="fade-up">
            <h2 className='text-4xl font-bold mb-10'>Skills--</h2>
            <div className=' flex justify-center'>
                <div className='m-auto w-2/3'>
                    <p>Html</p>
                    <input type="range" min="0" max="100" value="90" className="range range-xs range-info" /> <p>Css</p>
                    <input type="range" min="0" max="100" value="80" className="range range-xs  range-error" /> <p>JvaScript</p>
                    <input type="range" min="0" max="100" value="70" className="range range-xs  range-success" /> <p>Node Js</p>
                    <input type="range" min="0" max="100" value="50" className="range range-xs range-secondary" />
                </div>

            </div>
        </div>
    );
};

export default Skill;
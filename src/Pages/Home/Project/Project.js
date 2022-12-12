import React, { useState } from 'react';
import Categories from './Categories';
import './ItemCard.css'
import ItemsCard from './ItemsCard';
import boiBazar from '../../../img/boibazar4.png'
import boiBazar2 from '../../../img/boibazar2.png'
import boiBazar3 from '../../../img/boibazar3.png'
import skillUp from '../../../img/SkillUp.PNG'
import skillUp2 from '../../../img/skillUp2.png'
import skillUp3 from '../../../img/skillup3.png'
import pixLab from '../../../img/pixLab.PNG'
import pixLab2 from '../../../img/pixlab2.png'
import pixLab3 from '../../../img/pixlab3.png'
import newsPortal from '../../../img/newsPorta.PNG'
import newsPortal2 from '../../../img/newsportal2.png'
import newsPortal3 from '../../../img/newsportal3.png'
import Modal from './Modal';

const Project = () => {
    const [modalData, setModalData] = useState({})


    const projects = [
        {
            'id': '1',
            'title': 'Boi Bazar',
            'type': 'Online Book Resale',
            'img1': boiBazar,
            'img2': boiBazar2,
            'img3': boiBazar3,
            'live': 'https://melodious-macaron-952c8d.netlify.app',
            'features': ['Three types of users- Admin, Seller, and Buyer. Admin can manage the full system.', 'Login System', 'A seller can add a book for sale ', 'The buyer can buy any product.', 'Advertisement section on the home page seller can advertise his product.', 'A buyer can report any product',
            ],
            'technology': 'JavaScript, Framework-React, Css-Library -Tailwind, Authentication-Firebase, Jwt,Authentication-Firebase, Jwt, Database-MongoDB, Payment-Stripe.'


        },
        {
            'id': '2',
            'title': 'Skill Up',
            'type': 'Online Crash Course',
            'img1': skillUp,
            'img2': skillUp2,
            'img3': skillUp3,
            'live': 'https://skill-up-30bc8.web.app/',
            'features': [' Admin Route', 'Login System', 'Users can purchase any service,', 'Every service has an individual review section.', 'Users can create an account easily and buy any course.'],
            'technology': 'JavaScript, Framework-React, Css-Library -Tailwind, Authentication-Firebase, Jwt,Authentication-Firebase, Jwt, Database-MongoDB, Payment-Stripe.'
        },
        {
            'id': '3',
            'title': 'Pix Lab',
            'type': 'Photography Services',
            'img1': pixLab,
            'img2': pixLab2,
            'img3': pixLab3,
            'live': 'https://pix-lab-65514.web.app/',
            'features': ['Responsive and good user experience.', 'Admin Route', 'Login System', 'Users can create an account easily and buy any course.', 'Users can purchase any Courses,'],
            'technology': 'JavaScript, Framework-React, Css-Library -Tailwind, Authentication-Firebase, Jwt,Authentication-Firebase, Jwt, Database-MongoDB, Payment-Stripe.'
        },
        {
            'id': '4',
            'title': 'News Portal',
            'type': 'Live News web application',
            'img1': newsPortal,
            'img2': newsPortal2,
            'img3': newsPortal3,
            'live': 'https://news-portal-1b87a.web.app/',
            'features': [' Admin Route', 'Login System', 'google signin system', 'Responsive', 'Dynamic News categories'],
            'technology': 'JavaScript, Framework-React, Css-Library -Tailwind, Authentication-Firebase, Jwt,Authentication-Firebase, Jwt, Database-MongoDB, Payment-Stripe.'
        }
    ]


    return (

        <div id='projects' className='slide-top mx-8 mt-8 md:mt-16 ml-6' data-aos="fade-up"
        >
            <div className='flex-col justify-center'>
                <h2 className='text-3xl mb-8 font-bold'> Projects</h2>
                <Categories></Categories>

                <div className='grid sm:grid-cols-1 xl:grid-cols-4
                lg:grid-cols-3 md:grid-cols-2 gap-8 mt-28 mx-4  '>
                    {
                        projects.map(project => <ItemsCard key={project.id} project={project} setModalData={setModalData} ></ItemsCard>)
                    }
                </div>

            </div>

            <Modal modalData={modalData}></Modal>
        </div>
    );
};

export default Project;
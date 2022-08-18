import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ProjectItem from './Utilities/ProjectItem';
import ProjectItemRes from './Utilities/ProjectItemRes';

import jsIcon from '../img/js.svg';
import cssIcon from '../img/css.svg';
import htmlIcon from '../img/html.svg';
import reactIcon from '../img/react.svg';

import project1 from '../img/project_1.webp'
import project2 from '../img/project_2.webp'

import {sr} from './Utilities/scrollReveal'
import { useEffect } from 'react';


const Projects = () => {
    useEffect(() => {
        sr.reveal('.projects__title', {delay:0, scale: 1, origin: 'top', distance: '60px'})
        sr.reveal('.projects__container .project__item__image', {delay:500, scale: 1, distance: '60px'})
        sr.reveal('.projects__container .project__item__text', {delay:500, scale: 1, distance: '60px'})
    } , [])

    return (
        <>
            <div className="project__small__container section__res" id="projects">
                <h2 className="project__small__title">Projects</h2>
                <div className='flex'>
                <Swiper
                    spaceBetween={50} slidesPerView={1} 
                >
                    <SwiperSlide>
                        <ProjectItemRes
                            img={project2}
                            title="Real State Website" 
                            description='Responsive real state website using HTML CSS & JavaScript. Contains animations when scrolling, dark and light mode. Developed first with the Mobile First methodology, then for desktop'
                            stack1={htmlIcon} stack2={cssIcon} stack3={jsIcon}
                            demoLink="https://juanfrawn.github.io/real-state-page/"
                            codeLink="https://github.com/juanfrawn/real-state-page"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectItemRes
                            img={project1}
                            title="Web3 Exchange Tracker" 
                            description='A crypto conversion app like Coinbase using NextJS, Solidity, thirdweb SDK, Sanity as a headless CMS, authentication with Metamask, and styled-components for styling.'
                            stack1={jsIcon} stack2={cssIcon} stack3={htmlIcon} stack4={reactIcon}
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectItemRes
                            img={project1}
                            title="Web3 Exchange Tracker" 
                            description='A crypto conversion app like Coinbase using NextJS, Solidity, thirdweb SDK, Sanity as a headless CMS, authentication with Metamask, and styled-components for styling.'
                            stack1={jsIcon} stack2={cssIcon} stack3={htmlIcon} stack4={reactIcon}
                    />
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
            
            
            <section className="projects section__des" id="Projects">
                <h2 className="projects__title">Projects</h2>
                
                <div className="projects__container">
                    <ProjectItem 
                        img={project2}
                        title="Real State Website" 
                        description='Responsive real state website using HTML CSS & JavaScript. Contains animations when scrolling, dark and light mode. Developed first with the Mobile First methodology, then for desktop'
                        stack1={htmlIcon} stack2={cssIcon} stack3={jsIcon}
                        demoLink="https://juanfrawn.github.io/real-state-page/"
                        codeLink="https://github.com/juanfrawn/real-state-page"
                    />

                    <ProjectItem 
                        img={project1}
                        title="Web3 Exchange Tracker" 
                        description='A crypto conversion app like Coinbase using NextJS, Solidity, thirdweb SDK, Sanity as a headless CMS, authentication with Metamask, and styled-components for styling.'
                        stack1={jsIcon} stack2={cssIcon} stack3={htmlIcon} stack4={reactIcon}
                        align={'justify-end'} textAlign={'text-end'} spacing=""
                    />

                    <ProjectItem 
                        img={project1}
                        title="Web3 Exchange Tracker" 
                        description='A crypto conversion app like Coinbase using NextJS, Solidity, thirdweb SDK, Sanity as a headless CMS, authentication with Metamask, and styled-components for styling.'
                        stack1={jsIcon} stack2={cssIcon} stack3={htmlIcon} stack4={reactIcon}
                    />
                </div>
            </section>
        </>
    )
}

export default Projects;
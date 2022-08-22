import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ProjectItem from './Utilities/ProjectItem';
import ProjectItemRes from './Utilities/ProjectItemRes';

import jsIcon from '../img/js.svg';
import cssIcon from '../img/css.svg';
import htmlIcon from '../img/html.svg';
import reactIcon from '../img/react.svg';
import tailIcon from '../img/tailwind.svg';
import routerIcon from '../img/router.svg';

import project1 from '../img/project_1.webp'
import project2 from '../img/project_2.webp'
import project3 from '../img/project_3.webp'

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
                            img={project1}
                            title="Real State Website" 
                            description='Responsive real state website using HTML CSS & JavaScript. Contains animations when scrolling, dark and light mode. Developed first with the Mobile First methodology, then for desktop'
                            stack1={htmlIcon} stack2={cssIcon} stack3={jsIcon}
                            demoLink="https://juanfrawn.github.io/real-state-page/"
                            codeLink="https://github.com/juanfrawn/real-state-page"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <ProjectItemRes
                            img={project2}
                            title="Personal Portfolio" 
                            description='Responsive portfolio website usign React, Tailwind & JavaScript. Contains animations when scrolling, contact form and developed with the Mobile First methodology.'
                            stack1={cssIcon} stack2={jsIcon} stack3={tailIcon} stack4={reactIcon}
                            demoLink="https://www.juanfrawn.com"
                            codeLink="https://github.com/juanfrawn/portfolio"
                    />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <ProjectItemRes
                            img={project3}
                            title="Search Engine" 
                            description='A search engine usign React, Router Dom, Tailwind & JavaScript. Connects to a Google Search API and displays any results, image or news. Contains dark mode and completely responsive.'
                            stack1={jsIcon} stack2={tailIcon} stack3={routerIcon} stack4={reactIcon}
                            demoLink="https://juanfrawn-search-engine.netlify.app/"
                            codeLink="https://github.com/juanfrawn/search-engine"
                    />
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
            
            
            <section className="projects section__des" id="Projects">
                <h2 className="projects__title">Projects</h2>
                
                <div className="projects__container">
                    <ProjectItem 
                        img={project1}
                        title="Real State Website" 
                        description='Responsive real state website using HTML CSS & JavaScript. Contains animations when scrolling, dark and light mode. Developed first with the Mobile First methodology, then for desktop'
                        stack1={htmlIcon} stack2={cssIcon} stack3={jsIcon}
                        demoLink="https://juanfrawn.github.io/real-state-page/"
                        codeLink="https://github.com/juanfrawn/real-state-page"
                    />
 
                    <ProjectItem 
                        img={project2}
                        title="Personal Portfolio" 
                        description='Responsive portfolio website usign React, Tailwind & JavaScript. Contains animations when scrolling, contact form and developed with the Mobile First methodology.'
                        stack1={cssIcon} stack2={jsIcon} stack3={tailIcon} stack4={reactIcon}
                        align={'justify-end'} textAlign={'text-end'} spacing=""
                        demoLink="https://www.juanfrawn.com"
                        codeLink="https://github.com/juanfrawn/portfolio"
                    />

    
                    <ProjectItem 
                        img={project3}
                        title="Search Engine" 
                        description='A search engine usign React, Router Dom, Tailwind & JavaScript. Connects to a Google Search API and displays any results, image or news. Contains dark mode and completely responsive.'
                        stack1={jsIcon} stack2={tailIcon} stack3={routerIcon} stack4={reactIcon}
                        demoLink="https://juanfrawn-search-engine.netlify.app/"
                        codeLink="https://github.com/juanfrawn/search-engine"
                    />
                </div>
            </section>
        </>
    )
}

export default Projects;
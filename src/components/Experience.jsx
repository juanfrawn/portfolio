import ListItem from './Utilities/ListItem';
import SkillIcon from './Utilities/SkillIcon';

import htmlIcon from '../img/html.svg';
import cssIcon from '../img/css.svg';
import jsIcon from '../img/js.svg';
import reactIcon from '../img/react.svg';
import bootsIcon from '../img/bootstrap.svg';
import tailIcon from '../img/tailwind.svg';
import gitIcon from '../img/git.svg';
import sassIcon from '../img/sass.svg';
import nodeIcon from '../img/node.svg';
import routerIcon from '../img/router.svg';
import expressIcon from '../img/express.svg';
import reduxIcon from '../img/redux.svg';

import {sr} from './Utilities/scrollReveal'
import { useEffect } from 'react';


const Experience = () => {
    useEffect(() => {
        sr.reveal('.expert__title', {delay:0, scale: 1, origin: 'top', distance: '60px'})
        sr.reveal('.expert__icons__container', {delay:500, scale: 1, distance: '60px'})
        sr.reveal('.expert__text__container', {delay:500, scale: 1, distance: '60px'})
    } , [])

    return (
        <section className="expert section__res section__des" id='experience'>
            <h2 className="expert__title">Experience</h2>
            <div className='expert__container'>
                <div className="expert__icons__container">
                    <SkillIcon icon={htmlIcon} alt='HTML' />
                    <SkillIcon icon={cssIcon} alt='CSS' />
                    <SkillIcon icon={jsIcon} alt='JavaScript' />
                    <SkillIcon icon={reactIcon} alt='React' />
                    <SkillIcon icon={bootsIcon} alt='Bootstrap' />
                    <SkillIcon icon={tailIcon} alt='Tailwind' />
                    <SkillIcon icon={gitIcon} alt='Git' />
                    <SkillIcon icon={sassIcon} alt='Sass' />
                    <SkillIcon icon={nodeIcon} alt='Node' />
                    <SkillIcon icon={routerIcon} alt='MongoDB' />
                    <SkillIcon icon={expressIcon} alt='Express' />
                    <SkillIcon icon={reduxIcon} alt='Redux' />
                </div>

                <div className='expert__text__container'>
                    <ListItem 
                    year='2022' job='Web Developer' company='Freelance'
                    yearSize='expert__text__year' 
                    jobSize="expert__text__job"
                    companySize="expert__text__company"
                    margin={'expert__text__item'} />

                    <ListItem 
                    year='2021' job='Front End Developer jr' company='Exodus Web Design'
                    yearSize='expert__text__year' 
                    jobSize="expert__text__job"
                    companySize="expert__text__company"
                    margin={'expert__text__item'} />

                    <ListItem 
                    year='2021' job='Content Writer' company='Frowcode'
                    yearSize='expert__text__year' 
                    jobSize="expert__text__job"
                    companySize="expert__text__company"
                    margin={'expert__text__item'} />
                </div>
            </div>
        </section>
    )
}

export default Experience;
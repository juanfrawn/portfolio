import OutlineBtn from './Btn/OutlineBtn';
import PinItem from './Utilities/PinItem';
import SocialIcon from './Utilities/SocialIcon';

import github from '../img/gt.svg';
import instagram from '../img/ig.svg';
import linkedin from '../img/in.svg';

import {sr} from './Utilities/scrollReveal'
import { useEffect } from 'react';

import foto from '../img/foto.png'

const About = () => {
    useEffect(() => {
        sr.reveal('.about__image')
        sr.reveal('.about__text', {delay:500, scale: 1, distance: '60px'})
    } , [])

    return (
        <section className="about section__res section__des" id='aboutMe'>
            <div className='about__container'>
                <div>
                    <div className='about__image'>
                        <img src={foto} alt="" />
                    </div>
                </div>
                <div className='about__text'>
                    <h2 className="about__text__title--small">About me</h2>
                    <h2 className="about__text__title--big">About me</h2>

                    <div className='about__image--small'>
                        <img src={foto} alt="" />
                    </div>
                    
                    <div className="about__text__container">
                        <p className="about__paragraph--small">
                            I'm a Frontend developer who loves building full-stack applications & learning 
                            new technologies. 🔨
                        </p>

                        <p className='about__paragraph--medium'>
                        Also, I love to carry out projects that offer an immersive and attractive UX, through the efficient development of websites and web applications.
                        </p>

                        <p className="about__paragraph--big">
                        I'm a Frontend developer who loves building full-stack applications & 
                        learning new technologies. I’ve also like to share about the topics 
                        from which I learn.
                        </p>
                        <p className="about__paragraph--xlarge">
                        Also, I love to carry out projects that offer an immersive and attractive UX, through the efficient development of websites and web applications.
                        </p>

                        <p className='about__pparagraph--follow'>
                            If you wanna know more, Follow me.
                        </p>

                        <div className='about__pins__container'>
                            <div>
                                <PinItem content='HTML | CSS' />
                                <PinItem content='JavaScript | TypeScript' />
                            </div>
                            <div>
                                <PinItem content='React | Next' />
                                <PinItem content='Tailwind | Bootstrap' />
                            </div>
                        </div>

                        <div className='about__buttons__container__res'>
                            <SocialIcon icon={github} alt='GitHub' />
                            <SocialIcon icon={instagram} alt='GitHub' />
                            <SocialIcon icon={linkedin} alt='GitHub' />
                        </div>

                        <div className='about__buttons__container'>
                            <OutlineBtn 
                            target={true}
                            text={'GitHub'} to={'https://github.com/juanfrawn'} icon={github} 
                            heigth={'h-9 andxs:h-9 bigmd:h-11 tabsm:h-11 tabmd:h-12 tablg:h-14 desxs:h-11 deslg:h-12'} 
                            width={'w-full andxs:w-full biglg:w-88 tabxs:w-1/2 tabxs:mx-4 '} 
                            iconWidth={'tabmd:w-6 deslg:w-7'} iconMargin={'tabmd:mr-2'}
                            fontSize={'tabmd:text-xl deslg:text-xl'} margin={"mb-4 tabmd:mb-0 desxs:mb-0 desxs:mx-0 desxs:mr-4 deslg:mr-6"}
                            animation='animated__button'
                            />
                            
                            <OutlineBtn 
                            target={true}
                            text={'LinkedIn'} to={'https://www.linkedin.com/in/juanfrawn/'} icon={linkedin} 
                            heigth={'h-9 andxs:h-9 bigmd:h-11 tabsm:h-11 tabmd:h-12 tablg:h-14 desxs:h-11 deslg:h-12'} 
                            width={'w-full andxs:w-full biglg:w-88 tabxs:w-1/2 tabxs:mx-4'}
                            iconWidth={'tabmd:w-6 deslg:w-7'} iconMargin={'tabmd:mr-2'} 
                            fontSize={'tabmd:text-xl deslg:text-xl'} margin={"desxs:mx-0 desxs:mb-0"} 
                            animation='animated__button'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
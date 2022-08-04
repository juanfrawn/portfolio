import BigBtn from './Btn/BigBtn';
import OutlineBtn from './Btn/OutlineBtn';

import heroImage from '../img/hero.png'
import resume from '../img/resume.pdf'

import {sr} from './Utilities/scrollReveal'
import { useEffect } from 'react';

const Header = () => {
    
useEffect(() => {
    sr.reveal('.header__text__container')
} , [])

    return (
        <section className='header__container section__des'>
            <img src={heroImage} className="header__image image__animated" alt="Juan Emoji" />
            <div className='header__text__container'>
                <p className='header__text__name'>Hi, I’m Juan Ramirez</p>
                <h1 className='header__text__job'>Frontend Dev!</h1>
                
                <p className='header__paragraph--small'>I like to build experiences for humans 🚀</p>
                <p className='header__paragraph--medium'>I’m focused on learning something new every day and enjoying the moment.</p>
                
                <p className='header__paragraph--large'>I like to build amazing experiences for humans. 🚀</p>
                <p className='header__paragraph--xlarge'>Currently, I’m focused on learning something new every day and enjoying the moment.</p>
                <div className='header__buttons__container'>
                    <BigBtn 
                    text='Contact' to="#contact" width={'w-11/12 max-w-md tabsm:w-60 tabmd:w-68 tablg:w-72 desxs:w-48 desxxl:w-50'} 
                    heigth={'bigmd:h-12 tabsm:h-12 tablg:h-14 desxs:h-11 desxxl:h-12'} 
                    fontSize={'bigxl:text-2xl desxs:text-lg desxxl:text-xl'} margin={'desxs:m-0 desxs:mr-6'} 
                    animation='animated__button'
                    />
                    <OutlineBtn 
                    text='Download CV' to={resume} download="resume" isDownloaded="true" width={'tabsm:w-60 tabmd:w-68 tablg:w-72 desxs:w-48 desxxl:w-50'} 
                    heigth={'tabsm:h-12 tablg:h-14 desxs:h-11 desxxl:h-12'} display={'hidden tabsm:flex desxs:flex'} 
                    margin={'mb-0 desxs:mx-0'} fontSize={'bigxl:text-2xl desxs:text-lg desxxl:text-xl'} 
                    animation='animated__button'
                    />
                </div>
            </div>
        </section>
    )
}

export default Header;
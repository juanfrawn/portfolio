import { useState, useEffect } from 'react'
import logo from '../img/Logo.svg'

import OutlineBtn from './Btn/OutlineBtn'



const Navbar = () => {
    const [background, setBackground] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleActive = () => {
        const li = document.querySelectorAll('.nav__links')
        const sections = document.querySelectorAll('.section__des')

        let len = sections.length;
        while(--len && window.scrollY + 400 < sections[len].offsetTop) {}
        li.forEach(item => item.classList.remove('active__link'));
        li[len].classList.add('active__link');
    }

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleActive);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleActive);
        }
    }, [])



    return (
        <div className={`navbar ${background ? 'bg-primary-300 backdrop-blur-xl' : ''}`}>
            <div className='navbar__container'>
                <div className='navbar__logo__container'>
                    <img src={logo} onClick={() => scrollToTop()} className="navbar__logo nav__links" alt="" />
                </div>

                <div className='navbar__links__container'>
                    <ul className='flex justify-end'>
                        <li className={`navbar__links__item nav__links`}>
                            <a href="#aboutMe">About</a>
                        </li>
                        <li className={`navbar__links__item nav__links`}>
                            <a href="#Projects">Projects</a>
                        </li>
                        <li className={`navbar__links__item nav__links`}>
                            <a href="#experience">Experience</a>
                        </li>
                    </ul>
                </div>
                <div className='w-1/12'>
                    <OutlineBtn text="Contact" to="#contact"
                    width="w-32 desxxl:w-40" heigth="h-8 desxxl:h-10" margin="mb-0"
                    fontSize="text-sm desxxl:text-base" 
                    animation='animated__button nav__links bg-btnColor' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
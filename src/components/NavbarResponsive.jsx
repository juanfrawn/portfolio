import home from '../img/home.svg';
import user from '../img/user.svg';
import work from '../img/bag.svg';
import bracket from '../img/brackets-curly.svg';
import at from '../img/at.svg';
import { useEffect } from 'react';
import {sr} from './Utilities/scrollReveal'


const Navbar = () => {
    useEffect(() => {
        sr.reveal('.navbar__res__container', {delay:1000, scale: 1, origin: 'bottom', distance: '60px'})
    } , [])

    const handleActive = () => {
        const liItems = document.querySelectorAll('.navbar__link')
        const sectionItems = document.querySelectorAll('.section__res')

        let len = sectionItems.length;
        while(--len && window.scrollY + 250 < sectionItems[len].offsetTop) {}
        liItems.forEach(item => item.classList.remove('navbar__active'));
        liItems[len].classList.add('navbar__active');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleActive);
        return () => {
            window.removeEventListener('scroll', handleActive);
        }
    }, [])

    return (
        <div className='navbar__res__container'>
            <a href='#home' className='navbar__res__link navbar__link navbar__active'><img className='navbar__icons shadow-none tabsm:w-7 relative' src={home} alt="Home" /></a>
            <a href='#aboutMe' className='navbar__res__link navbar__link'><img className='navbar__icons shadow-none tabsm:w-7  relative' src={user} alt="About me" /></a>
            <a href='#projects' className='navbar__res__link navbar__link'><img className='navbar__icons shadow-none tabsm:w-7  relative' src={work} alt="Projects" /></a>
            <a href='#experience' className='navbar__res__link navbar__link'><img className='navbar__icons shadow-none tabsm:w-7  relative' src={bracket} alt="Work" /></a>
            <a href='#contact' className='navbar__res__link navbar__link'><img className='navbar__icons shadow-none tabsm:w-7  relative' src={at} alt="Contact" /></a>
        </div>
    )
}

export default Navbar;
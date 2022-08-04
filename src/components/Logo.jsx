import jfLogo from '../img/Logo.svg'
import {sr} from './Utilities/scrollReveal'
import { useEffect } from 'react';


const Logo = () => {
    useEffect(() => {
        sr.reveal('.container__logo', {delay:1000, scale: 1, origin: 'top', distance: '60px'})
    } , [])
    
    return (
        <section className='container__logo section__res' id='home'>
            <img className='logo_image' src={jfLogo} alt="Logo JF" />
        </section>
    )
}

export default Logo;
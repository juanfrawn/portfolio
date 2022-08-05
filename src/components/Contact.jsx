import FormBtn from './Btn/FormBtn'
import SocialIcon from './Utilities/SocialIcon'

import instagram from '../img/ig.svg'
import git from '../img/gt.svg'
import linkedin from '../img/in.svg'
import gmail from '../img/gm.svg'

import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react'

import {sr} from './Utilities/scrollReveal'

const Contact = () => {
    useEffect(() => {
        sr.reveal('.contact__title', {delay:0, scale: 1, origin: 'top', distance: '60px'})
        sr.reveal('.contact__social__container', {delay:500, scale: 1, distance: '60px'})
        sr.reveal('.contact__form', {delay:500, scale: 1, distance: '60px'})
    } , [])

    const form = useRef();
    const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5jyhy1v', 'template_17v2bj6', form.current, '9mV4iV7MqytJsBd-v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setSuccess(true);
  };

    return (
        <section className="contact__container section__res section__des" id="contact">
            <h2 className="contact__title">Contact</h2>
            <div className='contact__social__container'>
                <SocialIcon icon={instagram} alt='Instagram' />
                <SocialIcon icon={git} alt='GitHub' />
                <SocialIcon icon={linkedin} alt='LinkedIn' />
                <SocialIcon icon={gmail} alt='Gmail' />
            </div>

            <form className='flex flex-col contact__form' ref={form} onSubmit={sendEmail} autoComplete="off">
                <div className='form form__text'>
                    <input className='form__input' type="text" name="fullName" id="fullName" placeholder=' ' required />
                    <label className='form__label' htmlFor="fullName">Name</label>
                </div>

                <div className='form form__text'>
                    <input className='form__input' type="email" name="email" id="email" placeholder=' ' required />
                    <label className='form__label' htmlFor="email">Email</label>
                </div>

                <div className='form__textarea'>
                    <textarea className='form__input' name="message" id="message" cols="30" rows="20" placeholder=' ' required></textarea>
                    <label className='form__label' htmlFor="message">Message</label>
                </div>
            <FormBtn 
            text="Send"
            width={'w-40 andxs:w-44 bigmd:w-48 tabsm:w-70 tablg:w-76 desxs:w-1/4 deslg:w-1/5'} 
            heigth={'bigmd:h-12 tabsm:h-12 tablg:h-14 desxs:h-14 desxxl:h-16'}
            fontSize={'tablg:text-2xxl desxs:text-xxl desmd:text-2xl desxxl:text-2xxl'}
            animation='desxs:hover:scale-105 desxs:transition-transform desxs:duration-300 desxs:focus:scale-100'
            />
            </form>
            <p className={`mt-4 ${success ? 'block' : 'hidden'}`}>Your message has been successfully sent.</p>
        </section>
    )
}

export default Contact;
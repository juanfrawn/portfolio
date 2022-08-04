import { useEffect, useState } from 'react'
import arrow from '../../img/arrow.svg'

const ScrollTop = () => {
    const [show, setShow] = useState(false)
    const scrollTopShow = () => {
        if (window.scrollY > 400) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollTopShow)
        return () => {
            window.removeEventListener('scroll', scrollTopShow)
        }
    } , [])

    return (
        <div className={`hidden desxs:flex bg-scroll-bg rounded-xl p-2 fixed bottom-10 right-10  hover:cursor-pointer ${show ? 'desxs:inline-block' : 'desxs:hidden'}`}>
            <img className='w-8 transition-all opacity-50 hover:scale-125 hover:opacity-100' src={arrow} onClick={() => scrollToTop()} alt="" />
        </div>
    )
}

export default ScrollTop;
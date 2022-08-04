import logo from '../img/Logo.svg'

const Footer = () => {
    return (
        <footer className=' hidden desxs:flex justify-center py-10'>
            <img src={logo} alt="Logo" />
        </footer>
    )
}

export default Footer;
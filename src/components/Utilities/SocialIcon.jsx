const SocialIcon = ({ icon, alt, to }) => {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer">
            <img className='contact__social__icon' src={icon} alt={alt} />
        </a>            
    )
}

export default SocialIcon;
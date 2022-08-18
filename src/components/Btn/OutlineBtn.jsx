const OutlineBtn = ({text, to, icon, heigth, width, margin, display, fontSize, iconWidth, iconMargin, isDownloaded, download, animation, target}) => {
    if(isDownloaded) {
        return (
            <a href={to} download={download} className={`gradient-border flex justify-center ${heigth} ${width} font-bold ${fontSize} mx-auto ${display} ${margin} ${animation}`}>
            {
                icon ? <img src={icon} alt="" className={`mr-1 w-5 ${iconWidth} ${iconMargin}`} /> : null
            }
            <span className=" self-center gradient-text">{text}</span>
        </a>
        )
    }

    if(target) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer" className={`gradient-border flex justify-center ${heigth} ${width}  font-bold ${fontSize} mx-auto ${display} ${margin} ${animation}`}>
                {
                    icon ? <img src={icon} alt="" className={`mr-1 w-5 ${iconWidth} ${iconMargin}`} /> : null
                }
                <span className=" self-center gradient-text">{text}</span>
            </a>
        )
    }

    return (
        <a href={to} className={`gradient-border flex justify-center ${heigth} ${width}  font-bold ${fontSize} mx-auto ${display} ${margin} ${animation}`}>
            {
                icon ? <img src={icon} alt="" className={`mr-1 w-5 ${iconWidth} ${iconMargin}`} /> : null
            }
            <span className=" self-center gradient-text">{text}</span>
        </a>
    )
}

export default OutlineBtn;
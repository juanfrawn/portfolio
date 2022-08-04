const BigBtn = ({text, to, width, heigth, fontSize, margin, animation}) => {
    return (
        <a href={to} className={`text-xl ${fontSize} font-bold text-primary gradient block ${width} ${heigth} m-auto ${margin} ${animation} rounded-xl py-1.5 flex place-content-center place-items-center`}>{text}</a>
    )
}

export default BigBtn;
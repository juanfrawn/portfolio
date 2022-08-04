const FormBtn = ({text, width, heigth, fontSize, margin, animation}) => {
    return (
        <input type="submit" value={text} className={`text-xl ${fontSize} font-bold text-primary gradient block ${width} ${heigth} m-auto ${margin} ${animation} rounded-xl py-1.5 flex place-content-center place-items-center`} />
    )
}

export default FormBtn;
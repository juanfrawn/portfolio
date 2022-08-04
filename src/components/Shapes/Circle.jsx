const Circle = ({width, heigth, color, positionX, positionY, blur, opacity}) => {
    return (
        <div className={`${width} ${heigth} ${color} ${positionX} ${positionY} ${blur} ${opacity} absolute rounded-full -z-10 `}></div>
    )
}

export default Circle;
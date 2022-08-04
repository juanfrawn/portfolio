const PinItem = ({content}) => {
    return (
        <div className='flex mb-7'>
            <div className='gradient rounded-full w-3 h-3 mr-3 self-center'></div>
            <p>{content}</p>
        </div>
    )
}

export default PinItem;
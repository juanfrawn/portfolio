const ListItem = ({year, job, company, margin, yearSize, jobSize, companySize}) => {
    return (
        <div className={`grid grid-cols-tab ${margin}`}>
            <div>
                <p className={`${yearSize}`}>{year}</p>
            </div>
            <div className='text-start'>
                <h4 className={`font-bold ${jobSize}`}>{job}</h4>
                <p className={`${companySize}`}>{company}</p>
            </div>
        </div>
    )
}

export default ListItem;
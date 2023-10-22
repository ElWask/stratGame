const Silo = ({ressource, maxCapacity, level, color}) => {
    const capacityPerCent = (ressource/maxCapacity)*100;
    return (
        <div className='silo-capacity'>
            <div 
                className='silo-ressource' 
                style={{ height:`${capacityPerCent}%`, backgroundColor: color }}
            />
            <div className='silo-ressource-details'>
                <p>{Math.round(capacityPerCent, 2)}%</p>
                <p>Level {level}</p>
            </div>
        </div>
    );
}
export default Silo;
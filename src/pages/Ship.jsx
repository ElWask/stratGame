const Ship = ({ name, img, cost }) => {
    return (
        <div className="ship">
            <button className="ship-button">
                <span className="ship-button-img">{img}</span>
                <span>{cost}</span>
                Buy
            </button>
        </div>

    )
}

export default Ship;
const Ship = ({ ressource, setRessource, name, img, cost, qty, increase }) => {
    const add = () => {
        if (ressource >= cost) {
            increase();
            setRessource(ressource - cost);
        } else {
            alert("Not enough ressources to build a factory!");
        }
    }
    return (
        <div className="ship">
            <button className="ship-button" onClick={()=>add()}>
                <span>{qty}</span>
                <span className="ship-button-img">{img}</span>
                <span>{cost}</span>
                Buy
            </button>
        </div>

    )
}

export default Ship;


const LatestCard = ({
    card
}) => {
    return(
        <div className="game">
                        <div className="image-wrap">
                            <img src={card.imageUrl}/>
                        </div>
                        <h3>{card.title}</h3>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">
                                Details
                            </a>
                        </div>
                    </div>
    )
}

export default LatestCard;
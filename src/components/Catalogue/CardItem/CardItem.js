

const CardItem = ({ card }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={card.imageUrl} />
                <h6>{card.category}</h6>
                <h2>{card.title}</h2>
                <a href="#" className="details-button">
                    Details
                </a>
            </div>
        </div>
    )
}

export default CardItem;
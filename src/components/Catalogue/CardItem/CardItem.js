import { Link } from "react-router-dom";


const CardItem = ({ card }) => {
    return (
        <div className="allCards">
            <div className="allCards-info">
                <img src={card.imageUrl} />
                <h2>{card.title}</h2>
                <Link to={`/catalogue/${card._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    )
}

export default CardItem;
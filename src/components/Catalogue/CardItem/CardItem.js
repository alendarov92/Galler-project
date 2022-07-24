import { Link } from "react-router-dom";


const CardItem = ({ card }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={card.imageUrl} />
                <h6>{card.category}</h6>
                <h2>{card.title}</h2>
                <Link to={`/catalogue/${card._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    )
}

export default CardItem;
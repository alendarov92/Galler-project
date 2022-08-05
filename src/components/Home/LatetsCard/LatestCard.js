import { Link } from "react-router-dom";


const LatestCard = ({
    card
}) => {
    return(
        <div className="card">
                        <div className="image-wrap">
                            <img src={card.imageUrl}/>
                        </div>
                        <h3>{card.title}</h3>
                        <div className="data-buttons">
                            <Link to={`/catalogue/${card._id}`} className="btn details-btn">
                                Details
                            </Link>
                        </div>
                    </div>
    )
}

export default LatestCard;
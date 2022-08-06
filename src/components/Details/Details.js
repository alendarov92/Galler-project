import { useParams } from "react-router-dom";

const Details = ({ gallery, addComment }) => {
    const { gameId } = useParams();
    

    const card = gallery.find(x => x._id == gameId)

    
    
    return (
        <section id="card-details">
            <h1>Card Details</h1>
            <div className="info-section">
                <div className="card-header">
                    <img className="card-img" src={card.imageUrl} />
                    <h1>{card.title}</h1>
                </div>
                <p className="text">
                    {card.description}
                </p>

                <div className="buttons">
                    <a href="#" className="button">
                        Edit
                    </a>
                    <a href="#" className="button">
                        Delete
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Details;
import userEvent from "@testing-library/user-event";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CardContext } from "../../contexts/CardContext";

import * as galleryServices from '../../services/galleryServices'

const Details = () => {

    const [cuurentCard, setCurrentCard] = useState({});

    const navigate = useNavigate();
    const { cardDelete } = useContext(CardContext)
    const { cardId } = useParams();

    useEffect(() => {
        galleryServices.getOne(cardId)
            .then(result => {
                setCurrentCard(result);
            })
    }, [])


    const onDelete = () => {
        const confirmation = window.confirm('Are you sure you want to DELETE this Card?');
        if (confirmation) {
            galleryServices.remove(cardId)
                .then(() => {
                    cardDelete(cardId)
                    navigate('/catalogue')
            })
        }
    }



    return (
        <section id="card-details">
            <h1>Card Details</h1>
            <div className="info-section">
                <div className="card-header">
                    <img className="card-img" src={cuurentCard.imageUrl} />
                    <h1 className="card-title">{cuurentCard.title}</h1>
                </div>
                <p className="text">
                    {cuurentCard.summary}
                </p>
                
                <div className="buttons">
                    <Link to={`/gallery/gallery/${cuurentCard._id}/edit`} className="button">
                        Edit
                    </Link>
                    <button onClick={onDelete} className="button">
                        Delete
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Details;
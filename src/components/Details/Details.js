import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as galleryServices from '../../services/galleryServices'

const Details = () => {

    const [cuurentCard, setCurrentCard] = useState({});

    const { cardId } = useParams();

    useEffect(() => {
        galleryServices.getOne(cardId)
            .then(result => {
                setCurrentCard(result);
            })
    }, [])



    return (
        <section id="card-details">
            <h1>Card Details</h1>
            <div className="info-section">
                <div className="card-header">
                    <img className="card-img" src={cuurentCard.imageUrl} />
                    <h1>{cuurentCard.title}</h1>
                </div>
                <p className="text">
                    {cuurentCard.summary}
                </p>

                <div className="buttons">
                    <Link to={`/gallery/gallery/${cuurentCard._id}/edit`} className="button">
                        Edit
                    </Link>
                    <Link to={'/'} className="button">
                        Delete
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default Details;
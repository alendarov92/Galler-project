import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../contexts/CardContext";
import { useNavigate, useParams } from "react-router-dom";
import * as galleryServices from '../../services/galleryServices'


const Edit = () => {
    const [currentCard, setCurrentCard] = useState({});
    const { cardEdit } = useContext(CardContext);
    const { cardId } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        galleryServices.getOne(cardId)
            .then(cardData => {
                setCurrentCard(cardData)
        })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const cardData = Object.fromEntries(new FormData(e.target));

        galleryServices.edit(cardId, cardData)
            .then(result => {
                cardEdit(cardId, result);
                navigate(`/catalogue/${cardId}`)
        })
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Card</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentCard.title} />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentCard.imageUrl} />
                    <label htmlFor="summary">Description:</label>
                    <textarea name="summary" id="summary" defaultValue={currentCard.summary} />
                    <input className="btn submit" type="submit" value="Edit Card" />
                </div>
            </form>
        </section>
    )
}

export default Edit;
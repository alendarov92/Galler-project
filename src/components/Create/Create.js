import { useContext } from 'react';
import { CardContext } from '../../contexts/CardContext';
import * as galleryServices from '../../services/galleryServices'

const Create = () => {
    const { addCardHandler } = useContext(CardContext);
    
    const onSubmit = (e) => {
        e.preventDefault();

        const cardData = Object.fromEntries(new FormData(e.target));

        galleryServices.create(cardData)
            .then(result => {
            addCardHandler(result)
        })


    }
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create card</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter card title..."
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Card"
                    />
                </div>
            </form>
        </section>
    )
}

export default Create;
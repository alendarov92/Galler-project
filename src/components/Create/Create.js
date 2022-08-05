const Create = ({addCardHandler}) => {
    const onSubmit = (e) => {
        e.preventDefault();

        const cardData = Object.fromEntries(new FormData(e.target));

        console.log(cardData);

        addCardHandler(cardData)
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
                    <label htmlFor="summary">Description:</label>
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
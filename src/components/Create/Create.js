const Create = () => {
    return(
<section id="create-page" className="auth">
                <form id="create">
                    <div className="container">
                        <h1>Create card</h1>
                        <label htmlFor="leg-title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter game title..."
                        />
                        <label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter game category..."
                        />
                        <label htmlFor="game-img">Image:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Upload a photo..."
                        />
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" value={""} />
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
const Edit = () => {
    return(
<section id="edit-page" className="auth">
                <form id="edit">
                    <div className="container">
                        <h1>Edit Card</h1>
                        <label htmlFor="leg-title">Title:</label>
                        <input type="text" id="title" name="title" defaultValue="" />
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" defaultValue="" />
                        <label htmlFor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" defaultValue={""} />
                        <input className="btn submit" type="submit" value="Edit Card" />
                    </div>
                </form>
            </section>
    )
}

export default Edit;
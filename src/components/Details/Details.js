const Details = () => {
    return(
<section id="game-details">
                <h1>Card Details</h1>
                <div className="info-section">
                    <div className="game-header">
                        <img className="game-img" src="images/MineCraft.png" />
                        <h1>Bright</h1>
                        <span className="levels">MaxLevel: 4</span>
                        <p className="type">Action, Crime, Fantasy</p>
                    </div>
                    <p className="text">
                        Dospat Reservoir (Bulgarian: язовир Доспат) is situated in the western
                        part of the Rhodope Mountains, Bulgaria. The reservoir (formed by a dam
                        in the town of Dospat, 82 km (51 mi) west of Smolyan) stretches nearly
                        19 km (12 mi) northwest to the city of Sarnitsa. At 1,200 m (3,900 ft)
                        above the sea level, it is one of the highest dams in Bulgaria in terms
                        of altitude, and, with its 22 km2 (8.5 sq mi) of water area, the second
                        largest in capacity. It is fed by the Dospat River.
                    </p>
                    {/* Bonus ( for Guests and Users ) */}
                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {/* list all comments for current game (If any) */}
                            <li className="comment">
                                <p>Content: I rate this one quite highly.</p>
                            </li>
                            <li className="comment">
                                <p>Content: The best game.</p>
                            </li>
                        </ul>
                        {/* Display paragraph: If there are no games in the database */}
                        <p className="no-comment">No comments.</p>
                    </div>
                    {/* Edit/Delete buttons ( Only for creator of this game )  */}
                    <div className="buttons">
                        <a href="#" className="button">
                            Edit
                        </a>
                        <a href="#" className="button">
                            Delete
                        </a>
                    </div>
                </div>
                {/* Bonus */}
                {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form">
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            defaultValue={""}
                        />
                        <input
                            className="btn submit"
                            type="submit"
                            defaultValue="Add Comment"
                        />
                    </form>
                </article>
            </section>
    )
}

export default Details;
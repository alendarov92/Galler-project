import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div id="box">
            <header>
                {/* Navigation */}
                <h1>
                    <a className="home" href="#">
                        Gallery
                    </a>
                </h1>
                <nav>
                    <a href="#">Catalog</a>
                    {/* Logged-in users */}
                    <div id="user">
                        <a href="#">Create</a>
                        <a href="#">Logout</a>
                    </div>
                    {/* Guest users */}
                    <div id="guest">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </nav>
            </header>
            {/* Main Content */}
            <main id="main-content"></main>
            {/*Home Page*/}
            <section id="welcome-world">
                <div className="welcome-message">
                    <h2>You Can Find</h2>
                    <h3>THE NATURE Here</h3>
                </div>
                <img
                    src="https://i.pinimg.com/736x/72/16/a7/7216a77ec1ae893b9b38b3b596f69392.jpg"
                    alt="hero"
                />
                <div id="home-page">
                    <h1>Latest Pictures</h1>
                    {/* Display div: with information about every game (if any) */}
                    <div className="game">
                        <div className="image-wrap">
                            <img src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT5mQWMcSOAjKkFZ4T6nPxQbqwHXiyrd745WfU4yauywBoLLScAIe0_CF0NPQo0bnjU" />
                        </div>
                        <h3>Rila Mountain</h3>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">
                                Details
                            </a>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap">
                            <img src="https://www.bestplacesinbulgaria.com/wp-content/uploads/2016/03/dospat_04.jpg" />
                        </div>
                        <h3>River Dospat</h3>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">
                                Details
                            </a>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap">
                            <img src="https://img.hotelo.bg/a/261/846.jpg" />
                        </div>
                        <h3>Shiroka Polyana</h3>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">
                                Details
                            </a>
                        </div>
                    </div>
                    {/* Display paragraph: If there is no games  */}
                    <p className="no-articles">No articles yet</p>
                </div>
            </section>
            {/* Login Page ( Only for Guest users ) */}
            <section id="login-page" className="auth">
                <form id="login">
                    <div className="container">
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Sokka@gmail.com"
                        />
                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" />
                        <input type="submit" className="btn submit" defaultValue="Login" />
                        <p className="field">
                            <span>
                                If you don't have profile click <a href="#">here</a>
                            </span>
                        </p>
                    </div>
                </form>
            </section>
            {/* Register Page ( Only for Guest users ) */}
            <section id="register-page" className="content auth">
                <form id="register">
                    <div className="container">
                        <h1>Register</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="maria@email.com"
                        />
                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password" />
                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password" />
                        <input className="btn submit" type="submit" defaultValue="Register" />
                        <p className="field">
                            <span>
                                If you already have profile click <a href="#">here</a>
                            </span>
                        </p>
                    </div>
                </form>
            </section>
            {/* Create Page ( Only for logged-in users ) */}
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
                        <textarea name="summary" id="summary" defaultValue={""} />
                        <input
                            className="btn submit"
                            type="submit"
                            defaultValue="Create Card"
                        />
                    </div>
                </form>
            </section>
            {/* Edit Page ( Only for the creator )*/}
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
                        <input className="btn submit" type="submit" defaultValue="Edit Card" />
                    </div>
                </form>
            </section>
            {/*Details Page*/}
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
            {/* Catalogue */}
            <section id="catalog-page">
                <h1>All Cards</h1>
                {/* Display div: with information about every game (if any) */}
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>Cover Fire</h2>
                        <a href="#" className="details-button">
                            Details
                        </a>
                    </div>
                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>Zombie lang</h2>
                        <a href="#" className="details-button">
                            Details
                        </a>
                    </div>
                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>MineCraft</h2>
                        <a href="#" className="details-button">
                            Details
                        </a>
                    </div>
                </div>
                {/* Display paragraph: If there is no games  */}
                <h3 className="no-articles">No articles yet</h3>
            </section>
        </div>
    );
}

export default App;

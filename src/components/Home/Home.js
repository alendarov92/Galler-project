import { useEffect, useState } from "react";


const Home = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {

    });
    return(
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
    )
}

export default Home;
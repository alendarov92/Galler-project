import { useEffect, useState } from "react";

import * as gallerServices from '../../services/galleryServices'
import LatestCard from "./LatetsCard/LatestCard";

const Home = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        gallerServices.getAll()
        .then(result => {
            setGallery(result)
        }, [])
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
                    {gallery.map(x => <LatestCard card={x} />)}
                    {/* Display paragraph: If there is no games  */}
                    <p className="no-articles">No articles yet</p>
                </div>
            </section>
    )
}

export default Home;
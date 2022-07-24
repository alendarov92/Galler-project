
import LatestCard from "./LatetsCard/LatestCard";

const Home = ({ gallery }) => {

    return (
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

                {gallery.length > 0
                    ? gallery.map(x => <LatestCard key={x._id} card={x} />)
                    : <p className="no-articles">No articles yet</p>
                }

            </div>
        </section>
    )
}

export default Home;
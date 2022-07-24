import CardItem from "./CardItem/CardItem";

const Catalogue = ({ gallery }) => {
    return (
        <section id="catalog-page">
            <h1>All Cards</h1>
            {gallery.length > 0
                ? gallery.map(x => <CardItem key={x._id} card={x} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    )
}

export default Catalogue;
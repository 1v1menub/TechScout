import ratingstar from "../../assets/ratingstar.svg"
import lightbluetimelogo from "../../assets/lightbluetimelogo.svg"
import "./ProductCard.css"

function ProductCard({image, name, rating, dtime, tags}) {

    return (
        <div className="product-card-cont">
            <div className="product-card-top-cont" style={{ backgroundImage: `url(${image})`}}>
                <div className="product-card-rating-cont">
                    <span className="product-card-rating">{rating}</span>
                    <img className="product-card-timelogo" src={ratingstar}></img>
                </div>
            </div>
            <div className="product-card-bottom-cont"> 
                <span className="product-card-name">{name}</span>
                <div className="product-card-info-cont">
                    <span className="product-card-dtime-sample-text">Tiempo de envío:</span>
                    <img className="product-card-timeicon" src={lightbluetimelogo}></img>
                    <span className="product-card-dtime">{dtime} días</span>
                </div>
                <div className="product-card-tags-cont">
                    {tags.map((tag) => {
                        return <div className="product-card-tag">{tag}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
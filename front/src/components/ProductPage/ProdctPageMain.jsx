import { useState } from "react"

function ProductPageMain({images, name, price, shopname, description, rating, tags, specs, stores}) {

    const [index, setIndex] = useState(0)

    return (
        <div className="product-page-main-cont">
            <div className="product">
                <span className="product-name">{name}</span>
                <img src={images[index]}></img>
                {}
            </div>
            <div className="stores">
                
            </div>
        </div>
    )
}

export default ProductPageMain
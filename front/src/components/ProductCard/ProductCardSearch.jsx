import ratingstar from '../../assets/ratingstar.svg';
import lightbluetimelogo from '../../assets/lightbluetimelogo.svg';
import './ProductCardSearch.css';

function ProductCardSearch({ image, name, rating, price, tags }) {
  return (
    <div className="product-card-search-cont">
      <div className="product-card-search-top-cont" style={{ backgroundImage: `url(${image})` }}>
        <div className="product-card-search-rating-cont">
          <span className="product-card-search-rating">{rating}</span>
          <img className="product-card-search-timelogo" src={ratingstar}></img>
        </div>
      </div>
      <div className="product-card-search-bottom-cont">
        <span className="product-card-search-name">{name}</span>
        <div className="product-card-search-info-cont">
          <svg viewBox="0 15 80 12" className="product-card-search-dtime-sample-text">
            <text x="10" y="15">Precios desde:</text>
          </svg>
          <svg viewBox="0 0 56 18" className="product-card-search-dtime">
            <text x="0" y="15">
              S/.{price}
            </text>
            {/* <text x="0" y="15">
              S/.{price}
            </text> */}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSearch;

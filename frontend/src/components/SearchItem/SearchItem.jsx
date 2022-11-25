import './SearchItem.css';
import ratingstar from '../../assets/ratingstar.svg';

function SearchItem({ img, name, price, shopname, description, rating, tags }) {
  return (
    <div className="search-item-cont">
      <img className="search-item-img" src={img}></img>
      <div className="info-cont">
        <div className="title-rating-cont">
          <span className="search-item-title">{name}</span>
          <span className="search-item-rating">{rating}</span>
          <img className="rating-star" src={ratingstar}></img>
          <span>Precio: S/ {price}</span>
        </div>
        <div className="description-cont">
          <span className="search-item-description">{description}</span>
        </div>
        <div className="search-item-tags-cont">
          {tags.map((tagname) => {
            return <div className="search-item-tag">{tagname}</div>;
          })}
          <a className="search-item-shop" href={shopname}>
            {shopname}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;

import { useState } from "react";
import ratingstar from "../../assets/ratingstar.svg";
import timelogo from "../../assets/timelogo.svg";
import "./WelcomePage.css";

function WelcomePage({
  images,
  name,
  price,
  description,
  rating,
  tags,
  specs,
  stores,
  dtime,
}) {
  const [index, setIndex] = useState(0);

  return (
    <div className="product-page-main-cont">
      <div className="product-page-img-buttons-cont">
        <img className="product-page-main-img" src={images[index]}></img>
        <div className="product-page-img-nav-buttons-cont">
          {images.map((img, i) => {
            console.log(i);
            return (
              <div
                id={i}
                style={{
                  backgroundColor: index === i ? "#505050" : "lightgray",
                }}
                onClick={() => {
                  setIndex(i);
                }}
                className="product-page-img-nav-button"
              ></div>
            );
          })}
        </div>
      </div>
      <div className="product-page-name-rating-cont">
        <span className="product-page-product-name">{name}</span>
        <span className="product-page-rating">{rating}</span>
        <img className="ratingstar" src={ratingstar}></img>
      </div>
      <div className="product-page-bprice-dtime-cont">
        <div className="product-page-bprice-cont">
          <span className="product-page-bprice-title">Mejor precio</span>
          <div className="diosmiopqnousogrid">
            <span className="product-page-soles">S/</span>
            <span className="product-page-bprice">{price.toFixed(2)}</span>
          </div>
        </div>
        <div className="product-page-dtime-cont">
          <span className="product-page-dtime-title">Tiempo de envio</span>
          <div className="diosmiopqnousogrid2">
            <img className="timelogo" src={timelogo}></img>
            <span className="product-page-dtime">{dtime} días</span>
          </div>
        </div>
      </div>
      <div className="product-page-specs-cont">
        {specs.map((specname) => {
          return <div className="product-page-spec">{specname}</div>;
        })}
      </div>
      <div className="product-page-tags-cont">
        {tags.map((tagname) => {
          return <div className="product-page-tag">{tagname}</div>;
        })}
      </div>
    </div>
  );
}

export default WelcomePage;

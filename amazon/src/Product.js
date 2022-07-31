import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  function addToBasket(){
    console.log("in action");
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title, // es6 notation if the key and value are same we can use like this
        image,
        price: price,
        rating
      }
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={()=>addToBasket()}>Add to cart</button>
    </div>
  );
}

export default Product;

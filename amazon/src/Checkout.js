import React from "react";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";


function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/imports/GREAT/Banner-stripe_PC_1500-x-300._V536323387_.jpg"
          />
          {basket?.length === 0 ? (
            <div>
              <h2> Your shopping basket is empty</h2>
              <h3>
                To add products to basket, click on 'Add to basket' button next
                to the item. Please
                <Link to="/">
                  <span style={{ padding: "4px" }}>continue shopping</span>
                </Link>
                .
              </h3>
            </div>
          ) : (
            <div className="checkout__title">
              <h2>Your shopping cart</h2>

              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
        {basket?.length > 0 && (
          <div className="checkout__right">
            <div className="checkout__subtotal">
              <Subtotal />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;

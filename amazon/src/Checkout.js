import React from "react";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import "./Checkout.css"

function Checkout() {

  const [basket, dispatch] = useStateValue();

  return (
    <>
      <div className="checkout">
        <Header/>
      </div>
    </>
  );
}

export default Checkout;

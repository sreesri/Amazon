import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal(total) {
    const [{ basket }, dispatch] = useStateValue();
    function getBasketTotal(basket){
        return basket.reduce((total,item) => total + item.price ,0)
    }
  return (
    <div className="subtotal">
      <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>Subtotal of {basket.length} items: <strong>{value}</strong></p>
        <small className="subtotal__gift">
            <input type="checkbox"/> This order contains gifts
        </small>
        </>
      )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;

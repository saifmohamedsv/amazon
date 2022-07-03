import React from 'react';
import CurrencyFormat from 'react-currency-format'
import './SubTotal.css'
import {useStateValue} from "../../context/CartContext";

const SubTotal = () => {
    const [{basket}, dispatch] = useStateValue()

    const getSubTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

    return (
        <div className={"subtotal"}>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            SubTotal ({basket.length} items):
                            <strong>{` ${value} `}</strong>
                        </p>
                        <small className={"subtotal__gift"}>
                            <input type="checkbox"/>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getSubTotal(basket)}
                displayType={"text"}
                thousandSeparator
                prefix={"EGP"}
            />
            <button>Proceed to checkout</button>
        </div>
    );
};

export default SubTotal;
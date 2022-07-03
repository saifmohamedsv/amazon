import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from "../../context/CartContext";

const CheckoutProduct = ({img, title, price, rating}) => {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = (title) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: title
        })
    }

    return (
        <div className={'checkoutProduct'}>
            <img className={"checkoutProduct__image"} src={img} alt=""/>
            <div className={"checkoutProduct__info"}>
                <p className={"checkoutProduct__title"}>{title}</p>
                <p className={"checkoutProduct__price"}>
                    <small>
                        $
                    </small>
                    <strong>
                        {price}
                    </strong>
                </p>
                <div className={"checkoutProduct__rating"}>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
                <button onClick={() => removeFromBasket(title)}>Remove from basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
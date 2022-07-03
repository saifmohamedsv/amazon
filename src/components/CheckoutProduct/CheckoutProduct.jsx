import React from 'react';
import './CheckoutProduct.css'

const CheckoutProduct = ({img, title, price, rating}) => {
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
                <button>Remove from basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
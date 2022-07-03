import React from 'react';
import './Product.css'
import {useStateValue} from "../../context/CartContext";

const Product = ({title, img, price, rating}) => {

    const [state, dispatch] = useStateValue()


    const onAddToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            payload: {title, img, price, rating}
        })
    }

    return (
        <div className={"product"}>
            <div className={"product__info"}>
                <p>{title}</p>
                <p className={"product__price"}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={"product__rating"}>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>
            <img
                src={img}
                alt="Product Amazon Banner"
            />
            <button onClick={onAddToBasket}>Add To Basket
            </button>
        </div>
    );
};

export default Product;
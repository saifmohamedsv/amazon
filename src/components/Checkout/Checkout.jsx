import React from 'react';
import './Checkout.css'
import SubTotal from "../SubTotal/SubTotal";

const Checkout = () => {
    return (
        <div className={"checkout"}>
            <div className={"checkout__left"}>
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/April/XCM_Manual_4645157_1500x250_2X.jpg"
                    alt="Ad Banner Amazon" className={"checkout__ad"}/>
                <div>
                    <h2 className={"checkout__title"}>
                        Your Shopping Basket
                    </h2>
                </div>
            </div>
            <div className={"checkout__right"}>
                <SubTotal />
            </div>
        </div>
    );
};

export default Checkout;
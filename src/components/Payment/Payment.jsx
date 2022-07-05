import React, {useEffect, useState} from 'react';
import {useStateValue} from "../../context/CartContext";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import './Payment.css'
import {Link, useNavigate} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../../axios";

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue()
    const history = useNavigate()
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState('')

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            history('/orders')
        })
    }

    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }


    const getSubTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)


    useEffect(() => {
        // generate special stripe client secret
        const getClientSecret = async () => {
            const res = await axios({
                method: "post",
                url: `/payments/create?total=${getSubTotal(basket) * 100}`
            })
            setClientSecret(res.data.clientSecret)
        }

        getClientSecret()

    }, [basket])

    return (<div className={"payment"}>
        <div className={"payment__container"}>
            <h1>
                Checkout <Link to={"/checkout"}>({basket?.length}) items</Link>
            </h1>
            <div className={"payment__section"}>
                <div className={"payment__title"}>
                    <h3>Delivery Address</h3>
                </div>
                <div className={"payment__address"}>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className={"payment__section"}>
                <div className={"payment__title"}>
                    <h3>Review Items</h3>
                </div>
                <div className={"payment__items"}>
                    {basket?.map(({img, title, price, rating,}) => (
                        <CheckoutProduct img={img} title={title} price={price} rating={rating}/>))}
                </div>
            </div>
            <div className={"payment__section"}>
                <div className={"payment__title"}>
                    <h3>Payment Methods</h3>
                </div>
                <div className={"payment__details"}>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className={"payment__priceContainer"}>
                            <CurrencyFormat
                                renderText={(value) => (<>
                                    <h3>
                                        Order Total : {value}
                                    </h3>
                                </>)}
                                decimalScale={2}
                                value={getSubTotal(basket)}
                                displayType={"text"}
                                thousandSeparator
                                prefix={"EGP"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>);
};

export default Payment;
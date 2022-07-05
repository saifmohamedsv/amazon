import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./context/CartContext";
import Payment from "./components/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51LHoCuCajsSYQyt62Mk7QQpfFB02M0WlxvV2ChvnuLC53AdryXEeCz6IMnrOULpEZxywKLwccWcqNF4EF5Bzgjob00gMQhTwWR')

const App = () => {
    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch({
                    type: "SET_USER",
                    payload: user
                })
            } else {
                dispatch({
                    type: "SET_USER",
                    payload: null
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route exact path={'/login'} element={<Login/>}/>
                    <Route exact path={'/checkout'} element={<Checkout/>}/>
                    <Route exact path={'/payment'} element={
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    }/>
                    <Route exact path={"/"} element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

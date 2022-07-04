import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./context/CartContext";

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
                    <Route exact path={"/"} element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

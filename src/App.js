import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Checkout from "./components/Checkout/Checkout";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route exact path={'/checkout'} element={<Checkout/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

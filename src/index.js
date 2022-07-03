import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StateProvider} from "./context/CartContext";
import {initState, reducer} from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initState={initState} reducer={reducer}>
        <App/>
    </StateProvider>
);



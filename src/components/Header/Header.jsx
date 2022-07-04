import React from 'react';
import "./Header.css"
import {Search, ShoppingBasket} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useStateValue} from "../../context/CartContext";
import {auth} from "../../firebase";

const Header = () => {
    const [{basket, user}, dispatch] = useStateValue()
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <div className={"header"}>

            <Link to={'/'}>
                <img
                    className={"header__logo"}
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className={"header__search"}>
                <input className={"header__searchInput"} type="text"/>
                <Search className={"header__searchIcon"}/>
            </div>

            <div className={"header__nav"}>

                <Link to={!user && '/login'} onClick={handleAuthentication}>
                    <div className={"header__option"}>
                        <span className={"header__optionLineOne"}>Hello, {user?.displayName || user?.email}</span>
                        <span className={"header__optionLineTwo"}>{user ? "Sign Out" : "Sign in"}</span>
                    </div>
                </Link>

                <div className={"header__option"}>
                    <span className={"header__optionLineOne"}>Returns</span>
                    <span className={"header__optionLineTwo"}>& Orders</span>
                </div>

                <div className={"header__option"}>
                    <span className={"header__optionLineOne"}>You</span>
                    <span className={"header__optionLineTwo"}>& Prime</span>
                </div>

            </div>

            <Link to={"/checkout"}>
                <div className={"header__optionBasket"}>
                    <ShoppingBasket/>
                    <span className={"header__optionLineTwo header__basketCount"}>{basket?.length}</span>
                </div>
            </Link>

        </div>
    );
};

export default Header;

import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom"; 

const AppHeader = ({total}) => {
    return (
        <>
        
        <header className="header">
            <Link to="/" className="header__link">Menu</Link>
            <Link to="/cartpage/" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                <div>Total: {total} $</div>
            </Link>
        </header>
        </>
    )
};

export default AppHeader;
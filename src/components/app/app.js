import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";

import Background from './food-bg.jpg';

const App = ({finalPrice}) => {

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={finalPrice}/>
            <Route path="/" exact component={MainPage}/>
            <Route path="/cartpage" component={CartPage}/>
        </div>
    )
}

const mapStateToProps = ({finalPrice}) => {
    return {
        finalPrice
    }
}

export default connect(mapStateToProps)(App);
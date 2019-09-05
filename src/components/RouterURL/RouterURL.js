import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';
import Home from '../Home/Home';
import Error from '../Errorrr/Error';
import {Route,Switch} from "react-router-dom";
import Detail from '../Detail/Detail';

class RouterURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/san-pham" component={Product} />
                <Route path="/lien-he" component={Contact} />
                <Route path="/chi-tiet/:id/:slug.html" component={Detail} />
                <Route  component={Error} />
                </Switch>
                </div>
        );
    }
}

export default RouterURL;
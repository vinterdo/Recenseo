import React from "react";
import 'bootstrap';
require('../../scss/style.scss');

import {Header} from './Header';
import {Home} from './Home';

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}
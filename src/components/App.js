import React from "react";
import 'bootstrap';

require('../../scss/style.scss');

import {Header} from './header/Header';
import {Home} from './pages/Home';

export class App extends React.Component {
    render() {
        return (
            <div id="mainContainer" className="container-fluid">
                <div id="mainJumbo" className="jumbotron jumbotron-fluid m-0">
                    <div className="container">
                        <h1 className="display-1">Recenseo</h1>
                        <p className="lead">A code reivew tool</p>
                    </div>
                </div>
                <div id="headerRow" className="row bg-secondary">
                    <div className="container">
                        <div className="col-12">
                            <Header/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Home/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
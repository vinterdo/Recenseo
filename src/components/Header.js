import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <nav id="mainNav" className="navbar navbar-default navbar-dark">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
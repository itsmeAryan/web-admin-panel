import React, { Component } from 'react'
import ERrorimg from "../img/Error1.png";
import { Link } from 'react-router-dom';
import "./Error.scss"
export class Errorpage extends Component {
    render() {
        return (
            <div className="ErrorPage">
                <div className="Error-controller">
                    <div className="Error-row">
                        <div className="Error-img">
                            <img src={ERrorimg}   alt="error page"/>
                        </div>
                        <div className="Error-text">
                            <div className="Error-title">
                                <h1 className="text">
                                Oops! It looks like you're lost.
                                </h1>
                            </div>
                            <div className="Error-body">
                                <p className="text">
                                The page you're looking for isn't available. Try to search again or use the go to.
                                </p>
                            </div>
                        </div>
                        <div className="Back-to-home">
                            <span className="text"><Link to="/">home page</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Errorpage
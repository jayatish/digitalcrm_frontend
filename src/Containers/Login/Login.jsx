import React, { Component } from 'react';
import PublicLayout from '../../Components/Layout/PublicLayout';
import LoginComp from '../../Components/Login/Login';


class Login extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div id="slide-section">
                <div className="container">
                    <div className="row">
                        <PublicLayout />
                        <LoginComp />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
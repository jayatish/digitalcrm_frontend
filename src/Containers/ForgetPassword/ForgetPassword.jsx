import React, { Component } from 'react';
import ForgetPasswordComp from '../../Components/ForgetPassword/ForgetPassword';
import PublicLayout from '../../Components/Layout/PublicLayout';


class ForgetPassword extends Component {
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
                        <ForgetPasswordComp />
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgetPassword;
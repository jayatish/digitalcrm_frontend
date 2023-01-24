import React, { Component } from 'react';
import CreatePasswordComp from '../../Components/CreatePassword/CreatePassword';
import PublicLayout from '../../Components/Layout/PublicLayout';


class CreatePassword extends Component {
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
                        <CreatePasswordComp />
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePassword;
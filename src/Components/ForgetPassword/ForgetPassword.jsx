import React from "react";

const ForgetPasswordComp = () => {
    return (
        <div className="col-md-6">
            <div className="password-form">
                <figure>
                    <img src="/images/arrow-logo.svg" alt="" />
                </figure>
                <h2>Set Password</h2>
                <p>Enter Your Email Id to Set Password</p>
                <form >
                    <div className="password-form-input">
                        <div className="password-form-input-box">
                            <label >Email ID</label>
                            <figure>
                                <img src="/images/mail.svg" alt="" />
                            </figure>
                            <input type="text" placeholder="jhondoe123@gmail.com" required />
                        </div>
                    </div>
                    <input type="submit" value="Create" className="password-form-input-btn" />
                </form>
            </div>
        </div>
    )
}
export default ForgetPasswordComp;
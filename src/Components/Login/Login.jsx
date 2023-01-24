import React from "react";
import { Link } from "react-router-dom";

const LoginComp = () => {
    return (
        <div className="col-md-6">
            <div className="password-form">
                <figure>
                    <img src="/images/arrow-logo.svg" alt="" />
                </figure>
                <h2>Welcome Back</h2>
                <p>Login To Continue</p>
                <form >
                    <div className="password-form-input creat-password">
                        <div className="password-form-input-box">
                            <label >LOGIN ID</label>
                            <figure>
                                <img src="/images/mail.svg" alt="" />
                            </figure>
                            <input type="text" placeholder="jhondoe123@gmail.com" required />
                        </div>
                        <div className="password-form-input-box">
                            <label >PASSWORD</label>
                            <figure>
                                <img src="/images/lock.svg" alt="" />
                            </figure>
                            <input type="password" placeholder="******" required />
                        </div>
                        <div className="display-space-between">
                            <div className="display-space">
                                <input type="checkbox" id="password" />
                                <label for="password">Remember Me</label>
                            </div>
                            <div className="forget-pass">
                                <Link to={'/forget-password'}>Forget password</Link>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Login" className="password-form-input-btn" />
                </form>
            </div>
        </div>
    )
}
export default LoginComp;
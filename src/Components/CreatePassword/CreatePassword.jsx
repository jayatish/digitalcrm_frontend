import React from "react";

const CreatePasswordComp = () => {
    return (
        <div className="col-md-6">
            <div className="password-form">
                <figure><img src="/images/arrow-logo.svg" alt="" /></figure>
                <h2>Create Password</h2>
                <p>Create Password to your Account</p>
                <form >
                    <div className="password-form-input creat-password">
                        <div className="password-form-input-box">
                            <label >Email ID</label>
                            <figure>
                                <img src="/images/mail.svg" alt="" />
                            </figure>
                            <input type="text" placeholder="jhondoe123@gmail.com" required />
                        </div>
                        <div className="password-form-input-box">
                            <label >CREATE NEW PASSWORD</label>
                            <figure>
                                <img src="/images/lock.svg" alt="" />
                            </figure>
                            <input type="password" placeholder="******" required />
                        </div>
                        <div className="password-form-input-box">
                            <label >CONFIRM NEW PASSWORD</label>
                            <figure>
                                <img src="/images/lock.svg" alt="" />
                            </figure>
                            <input type="password" placeholder="******" required />
                        </div>
                    </div>
                    <input type="submit" value="Create" className="password-form-input-btn" />
                </form>
            </div>
        </div>
    )
}
export default CreatePasswordComp;
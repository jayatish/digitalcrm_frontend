import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const LoginComp = () => {

    const Navigate = useNavigate();
    const [value,setValue]=useState({
        email:"",
        password:""

    })
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name] : e.target.value});
        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       const url = "http://localhost:8030/api/login";
       var obj={
           "email": value.email,
           "password":value.password
       }
       console.log("obj",obj)
       axios.post(url, obj)
           .then((res) =>{
               console.log("password response",res)
               if (res.data.success===true){
                   alert("Login Successful")
                   Navigate("/dashboard")
                 }
                 else{
                   alert("Login failed")
                 }
           
           // setData(res.data.data)
       })
       .catch(err => {
           alert("password miss match");
           console.log("error is" + err);
         });
     }
  
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
                            <input type="text" placeholder="jhondoe123@gmail.com" name="email" onChange={handleChange} required />
                        </div>
                        <div className="password-form-input-box">
                            <label >PASSWORD</label>
                            <figure>
                                <img src="/images/lock.svg" alt="" />
                            </figure>
                            <input type="password" placeholder="******" name="password" onChange={handleChange} required />
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
                    <button onClick={handleSubmit} className="password-form-input-btn" >Login</button>
                </form>
            </div>
        </div>
    )
}
export default LoginComp;
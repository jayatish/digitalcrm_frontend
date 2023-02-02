import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import axios from "axios";

const CreatePasswordComp = () => {
    
    const Navigate = useNavigate();
    const [data,setData] = useState('')
    const [value,setValue]=useState({
        email:"",
        create_password:"",
        confirm_password:""

    })
    console.log("value",value)
    let { slug } = useParams();

    useEffect(()=>{
        
        console.log('slug ==> ', slug);
      const url = "http://localhost:8030/api/companydetails";
      var data={
          "slug": slug
      }
      axios.post(url, data).then((res) =>{
          console.log("res",res)
          setData(res.data.data)
      })
    },[])

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name] : e.target.value});
        
      };

    // create password API
    const handleSubmit = (e) => {
         e.preventDefault();
        const url = "http://localhost:8030/api/set-password";
        var obj={
            "slug": slug,
            "email": value.email,
            "password":value.confirm_password
        }
        console.log("obj",obj)
        axios.post(url, obj)
            .then((res) =>{
                console.log("password response",res)
                if (res.data.success===true){
                    alert("Password Update Successful")
                    Navigate("/login")
                  }
                  else{
                    alert("This profile is already activated")
                  }
            
            // setData(res.data.data)
        })
        .catch(err => {
            alert("password updation failed");
            console.log("error is" + err);
          });
      }



    return (
        <div className="col-md-6">
            <div className="password-form">
             {  data ? <figure><img src={data.image} alt="" /></figure>
            :
            <figure><img src="/images/arrow-logo.svg" alt="" /></figure> 
            }
                <h2>Create Password</h2>
                <p>Create Password to your Account</p>
                <form >
                    <div className="password-form-input creat-password">
                        <div className="password-form-input-box">
                            <label >Email ID</label>
                            <figure>
                                <img src="/images/mail.svg" alt="" />
                            </figure>
                            <input type="text" placeholder="jhondoe123@gmail.com" name="email" onChange={handleChange} required />
                        </div>
                        <div className="password-form-input-box">
                            <label >CREATE NEW PASSWORD</label>
                            <figure>
                                <img src="/images/lock.svg" alt="" />
                            </figure>
                            <input type="password" placeholder="******" name="create_password" onChange={handleChange} required />
                        </div>
                        <div className="password-form-input-box">
                            <label >CONFIRM NEW PASSWORD</label>
                            <figure>
                                <img src="/images/lock.svg" alt="" />
                            </figure>
                            <input type="password" placeholder="******" name="confirm_password" onChange={handleChange} required />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="password-form-input-btn">Create</button>
                </form>
            </div>
        </div>
    )
}
export default CreatePasswordComp;
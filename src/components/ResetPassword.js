import React from 'react'
import { TextField } from "@mui/material"
import '../css/ResetPassword.css'
import BookLogo from '../assets/booklogo.png'
import { useHistory } from "react-router-dom"
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default function ResetPassword() {
    let history = useHistory()

    const gotocreateaccount = function(){
      history.push("/")
    }
    return (
        <div className="forgotpassword">           
           <div className="header"> 
           <p className="bookstoreheader">BookStore</p>
           <img src={BookLogo} alt="" class="booklogo"/> 
            </div>
            <div>
            <h3 className = "passwordmessage">Forgot Your Password?</h3>
            </div>
            <br/>
            <div className="box">
            <div className="form-field">
            <span className="forgot">Enter your email address and we'll send you a link to reset your password.</span>
            <div className = "formemail1">
                      <label className = "forgotemaillabel" htmlFor = "exampleemail">Email Id</label> <br/>
                      <input variant = "outlined" label = "email" 
                          placeholder = "" type = "text" className = "forgotemail"/>
                    
            </div>
            <div>
            <button className="button">Reset Password</button>
            </div>
            <div class="createacount">
            <div class="createacountbtn">
                <button className="buttontwo" onClick = {gotocreateaccount}><h2>Create Account</h2></button>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

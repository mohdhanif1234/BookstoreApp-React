import React from 'react'
import { TextField } from "@mui/material"
import '../css/ResetPassword.css'
import BookLogo from '../assets/booklogo.png'
import { useHistory } from "react-router-dom"
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default function ResetPassword() {
    let history = useHistory()
    const[email, setEmail] = React.useState("")
    const takeEmail = function(event){
        setEmail(event.target.value)
      }
    const Submit = function(){
        let statusEmail
        if(!emailRegex.test(email))                
        {
          console.log("true")
          statusEmail = false
        }
        else
        {
          console.log("false")
          statusEmail = true
        }
        if (statusEmail == true)
        {
            let obj = {
            Email: email                                                   
        }
         console.log(obj)
        //  forgotpassword(obj).then(function(response){
        //  console.log(response)
        //  })
         .catch(function(error){
         console.log(error)
         })
      }
    }

    const gotocreateaccount = function(){
      history.push("/")
    }
    return (
        <div className="forgotpassword">           
           <div className="header"> 
           <img src={BookLogo} alt="" class="booklogo"/> 
           <p className="bookstoreheader">BookStore</p>
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
                          placeholder = "" type = "text" className = "forgotemail" onChange = {takeEmail}/>
                    
            </div>
            <div>
            <button onClick = {Submit} className="button">Reset Password</button>
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

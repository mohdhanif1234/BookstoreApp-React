import React from 'react'
import cartimage from '../assets/cartlogo.png'
import { useHistory } from "react-router-dom";
import '../css/SignUp.css'
const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
const mobileNumberRegex = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

export default function SignUp(props) {
    let history = useHistory()
     
    const click=function(){
      props.listentosignup(false)
   }
    return (
        <div className = "signuppage">
              <div className="signupleftlogo">
                  <img src={cartimage} alt="cartimage" className="logoimage"/>  
                  <p>Online Book Shopping</p>
              </div>
            <div className = "signup">
                <div className = "buttons">
                    <div className="div" onClick = {click}>
                    Login
                        <button className="tab-btn" ></button>
                    </div>
                    <div className="div">
                        SignUp
                        <button className="tab-btn" ></button>
                    </div>
                </div>             
                <div className = "fullnameform">
                  <label className = "fullnamelabel">Full Name</label>
                  <input name = "full name" label = "First Name"
                   placeholder = "" className = "fullname"/>
                </div>
                <div className = "emailform">
                  <label htmlFor = "exampleemail"  className = "labelemail">Email Id</label>
                  <input variant = "outlined" label = "email" placeholder = ""
                     type = "text" type = "email" className = "signupemail"/>
                </div>
                <div className = "passwordform">
                    <label htmlFor = "examplepassword" className = "labelpassword">Password</label>
                    <input variant = "outlined" type = "password" label = "Password"
                      placeholder = "" type = "text" className = "signuppassword"/>
                </div>
                <div className = "mobileform">
                    <label htmlFor = "exampleMobileNumber" className = "labelmobilenumber">Mobile Number</label>
                    <input variant = "outlined" type = "mobilenumber" label = "mobilenumber"
                         placeholder = "" type = "text" className = "signupmobilenumber"/>

                </div>
                <button type = "button" className = "signupbutton">SignUp</button>
            </div>
            </div>
    )
}

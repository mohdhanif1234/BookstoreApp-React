import React from 'react'
import cartimage from '../assets/cartlogo.png'
import { useHistory } from "react-router-dom"
import '../css/Login.css'
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

export default function Login(props) {
    let history = useHistory()
    const [email, setEmail] = React.useState("")
     const [password, setPassword] = React.useState("")
 

     const takeEmail = function(event)
     {
        setEmail(event.target.value)
     }
     const takePassword = function(event)
     {
         setPassword(event.target.value)
     }
const submit = function()
{
    let statusEmail 
    if(emailRegex.test(email))
    {      
     console.log("false")
     statusEmail = true
    }
    else
    {
      console.log("true")
      statusEmail = false
    }
    let statusPassword 
    if(passwordRegex.test(password))
    {      
     console.log("false")
     statusPassword = true
    }
    else
    {
      console.log("true")
      statusPassword = false
    }
    if(statusEmail == true && statusPassword == true)
    {
         let obj = {
              Email: email,
              Password: password
         }
    
    // console.log(obj) 
    // signIn(obj).then(function(response){
    //     console.log(response)
    //    let tokenArray = response.data.result._Id
    //    localStorage.setItem("userId", tokenArray)
    //    localStorage.setItem("Token", response.data.result.accessToken)
    //    if(response.status==200){
    //    history.push("/Home")
    //  }
    // })
    .catch(function(error){
      console.log(error)  
    })
}
}
  const gotoforgotpassword = function(){
    history.push("/forgotpassword")
  }
    const click=function(){
        props.listentosignup(true)
    }
    return (
        <div className = "loginpage">
                <div className="leftlogo">
                    <img src={cartimage} alt="cartimage" className="image"/>  
                    <p>Online Book Shopping</p>
                </div>
                <div className = "signin">
                    <div className = "buttons">
                <div className="div">
                    Login
                    <button className="tab-btn" ></button>
                </div>
                <div className="div" onClick = {click}>
                SignUp
                    <button className="tab-btn" ></button>
                </div>
            </div>
              
              <div className = "adminbody">
                  <div className = "formemail">
                      <label className = "emaillabel" htmlFor = "exampleemail">Email Id</label> <br/>
                      <input variant = "outlined" label = "email" 
                          placeholder = "" type = "text" className = "email" onChange = {takeEmail}/>
                    
                  </div>
                  <div className = "formpassword">
                  <label className = "passwordlabel" htmlFor = "exampleemail">Password</label>
                <input variant = "outlined" type = "Password" 
                  label = "password" placeholder = "" type = "text"
                  className = "password" onChange = {takePassword}/>
                  </div>
                  <button className = "passwordbutton" onClick = {gotoforgotpassword}>Forgot Password?</button>
                  <button type = "button" onClick = {submit} className = "loginbutton">Login</button>
                  <div className="or">
                    <h5>-------------OR--------------</h5>
                </div>
                <div className = "account">
                <button type="button" className="Facebook btn-primary">
                    Facebook
                </button>
                <button type="button" className="Google btn-outline-secondary">
                    Google
                </button>
                </div>
              </div>
            </div>
            </div>
    )
}

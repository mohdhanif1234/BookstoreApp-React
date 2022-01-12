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
     const [fullName, setFullName] = React.useState("")
     const [email, setEmail] = React.useState("")
     const [password, setPassword] = React.useState("")
     const [phoneNumber, setPhoneNumber] = React.useState()

      const takeFullName = function(event){
        setFullName(event.target.value)
      }
      const takeEmail = function(event){
        setEmail(event.target.value)
      }
      const takePassword = function(event){
        setPassword(event.target.value)
      }
      const takePhoneNumber = function(event){
        setPhoneNumber(event.target.value)
      }

      const submit = function(){
          // status for first name
            let statusFullName
            if(nameRegex.test(fullName))
            {
            console.log("false")
            statusFullName = true
            }
            else
            {
            console.log("true")
            statusFullName = false
            }

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
            
            let statusPhoneNumber
            if(mobileNumberRegex.test(phoneNumber))
            {
            console.log("false")
            statusPhoneNumber = true
            }
            else
            {
            console.log("true")
            statusPhoneNumber = false
            }
            if(statusFullName == true && statusEmail == true && statusPassword == true && statusPhoneNumber == true)
                {
                let obj = {

                    CustomerName: fullName,
                    Email: email,
                    Password: password,
                    PhoneNumber: phoneNumber
                }
                console.log(obj)
                // signUp(obj).then(function(response){
                //     console.log(response)
                //     if(response.status==200){
                //        history.push("/")
                //     }
                // })
                .catch(function(error){                
                    console.log(error)               
                })
            }
        }
        
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
                   placeholder = "" className = "fullname" onChange = {takeFullName}/>
                </div>
                <div className = "emailform">
                  <label htmlFor = "exampleemail"  className = "labelemail">Email Id</label>
                  <input variant = "outlined" label = "email" placeholder = ""
                     type = "text" type = "email" className = "signupemail" onChange = {takeEmail}/>
                </div>
                <div className = "passwordform">
                    <label htmlFor = "examplepassword" className = "labelpassword">Password</label>
                    <input variant = "outlined" type = "password" label = "Password"
                      placeholder = "" type = "text" className = "signuppassword" onChange = {takePassword} />
                </div>
                <div className = "mobileform">
                    <label htmlFor = "exampleMobileNumber" className = "labelmobilenumber">Mobile Number</label>
                    <input variant = "outlined" type = "mobilenumber" label = "mobilenumber"
                         placeholder = "" type = "text" className = "signupmobilenumber" onChange = {takePhoneNumber}/>

                </div>
                <button type = "button" onClick = {submit} className = "signupbutton">SignUp</button>
            </div>
            </div>
    )
}

import React from 'react'
import SignUp from './SignUp'
import Login from './Login'


export default function Container(props) {
    const [clickfirstnote, setclickfirstnote]=React.useState(false)
    const listentosignup = function(data){
        if(data==true){
            setclickfirstnote(true)
        }
        else if(data==false)
        {
            props.listentoLoginSignup(false)
            setclickfirstnote(false)
        }
    }
    return (
        <div>
            <div className="signupLoginPage">
            {                   
            clickfirstnote ? <SignUp listentosignup={listentosignup}/> : <Login listentosignup={listentosignup} /> 
            }        
        </div>
        </div>
    )
}

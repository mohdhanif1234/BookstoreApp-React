import React from 'react'
import Container from './Container'

export default function SignInandSignUp() {
    const listentoLoginSignup=function(data){
        console.log(data)
    }
    return (
        <div>
            <div className="SignInSignup">
             <Container listentoLoginSignup={listentoLoginSignup}/>
         </div>
        </div>
    )
}

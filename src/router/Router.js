import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInAndSignUp from "../components/SignInandSignUp";
import SignUp from "../components/SignUp";
import ResetPassword from '../components/ResetPassword';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
             <Switch>
                  <Route path = "/" exact component = {SignInAndSignUp}/>
                  <Route path = "/signup" component = {SignUp}/>
                  <Route path = "/forgotpassword" component = {ResetPassword}/>
             </Switch>
        </BrowserRouter>
        </div>
    )
}

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInAndSignUp from "../components/SignInandSignUp";
import SignUp from "../components/SignUp";

export default function Router() {
    return (
        <div>
            <BrowserRouter>
             <Switch>
                  <Route path = "/" exact component = {SignInAndSignUp}/>
                  <Route path = "/signup" component = {SignUp}/>
             </Switch>
        </BrowserRouter>
        </div>
    )
}

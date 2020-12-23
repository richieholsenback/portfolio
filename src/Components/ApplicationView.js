import React from "react";
import { Route } from "react-router-dom"
import { ContactSection } from "./Contact/Contact";
import { NavBar } from "./NavBar/NavBar";
import { Resume } from "./Resume/Resume";
import { GreetingSection } from "./Work/Greet";

export const ApplicationViews = props => {
    return (
        <div>
            <Route exact path='/'>
                <NavBar />
                <GreetingSection />
            </Route>

            <Route exact path='/contact'>
                <NavBar />
                <ContactSection />
            </Route>
            
            <Route exact path='/resume'>
                <NavBar />
                <Resume />
            </Route>
        </div>
    )
}
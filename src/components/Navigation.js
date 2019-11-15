import React from "react";
import Header from "./Header.js";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import styled from "styled-components";

const NavLinks = styled.div`
text-align: center;
`

export default function Navigation() {
    return (
        <Router>
            <nav>
                <NavLinks className="nav-links">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/character-list" className="nav-link">Characters</NavLink>
                </NavLinks>
            </nav>
            <Header />
            <Route exact path="/" component={WelcomePage}/>
            <Route exact path ="/character-list" component={CharacterList}/>
        </Router>
    )
}
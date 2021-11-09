import React from 'react'
import { NavLink } from "react-router-dom";
export const NavBar = () => {
    return (

        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink activeclassname="active" to="./" className="nav-link">
                    use Context</NavLink> </li>
            <li className="nav-item">
                <NavLink activeclassname="active" to="./" className="nav-link">
                    Home</NavLink></li>
            <li className="nav-item">
                <NavLink activeclassname="active" to="./about" className="nav-link">
                    About</NavLink> </li>
            <li className="nav-item">
                <NavLink activeclassname="active" to="./login" className="nav-link">
                    Login</NavLink> </li>
        </ul>


    )
}

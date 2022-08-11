import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/genres'>Stories</NavLink>
        <NavLink to='/account'>Account</NavLink>
        <NavLink to='/signup'>Create Account</NavLink>
        </>
    )
}

export default NavBar
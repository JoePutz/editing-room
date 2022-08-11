import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({onLogin}) {

    const logout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogin(null));
    }

    return (
        <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/genres'>Stories</NavLink>
        <NavLink to='/account'>Account</NavLink>
        <NavLink to='/signup'>Create Account</NavLink>
        <button onClick={logout}>Log Out</button>
        </>
    )
}

export default NavBar
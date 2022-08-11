import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onLogin, user }) {

    const logout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogin(null));
    }

    return (
        <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/genres'>Stories</NavLink>
        {user?
        <>
        <NavLink to='/account'>Account</NavLink>
        <button onClick={logout}>Log Out</button>
        </>
        :<>
        <NavLink to='/signup'>Create Account</NavLink>
        <NavLink to='/loginpage'>Log In</NavLink>
        </>
        }
        </>
    )
}

export default NavBar
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onLogin, user }) {

    const logout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogin(null));
    }

    return (
        <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/genres'>Stories</NavLink>
        <NavLink to='/userspage'>Authors</NavLink>
        {user?
        <span className="loginout">
        <NavLink to='/account'>{user.username}</NavLink>
        |
        <button onClick={logout}>Log Out</button>
        </span>
        :<span className="loginout">
        <NavLink to='/signup'>Create Account</NavLink>
        |
        <NavLink to='/loginpage'>Log In</NavLink>
        </span>
        }
        </nav>
    )
}

export default NavBar
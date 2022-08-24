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
        <h3>The Editing Room</h3>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/genres'>Stories</NavLink>
        <NavLink to='/userspage'>Authors</NavLink>
        {user?
        <>
        <NavLink className="loginout" to='/account'>{user.username}</NavLink>
        |
        <button className="loginout" onClick={logout}>Log Out</button></>
        :<>
        <NavLink className="loginout" to='/signup'>Create Account</NavLink>
        |
        <NavLink className="loginout" to='/loginpage'>Log In</NavLink>
        </>
        }
        </nav>
    )
}

export default NavBar
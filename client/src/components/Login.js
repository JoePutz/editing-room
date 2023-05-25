import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  // The login form
    const navigate = useNavigate();
  
    const [loginError,setLoginError] = useState(false)
    const [showLoginError, setShowLoginError] = useState([])
    const [user, setUser] = useState({
      username: null,
      password: null
    })

    const handleChange = (e) => {
      const {placeholder, value} = e.target
      setUser({...user, [placeholder]:value})
      if (loginError) {
        // stop displaying login error after 30 seconds
        setTimeout(() => {  setLoginError(false) }, 3000);
    }
    }

    function handleSubmit(e) {
      // submits the login form, sends directly to account page
      e.preventDefault();
      const {username, password} = user
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then(user => onLogin(user)).then(() => navigate(`/account`))
          } else {
            setLoginError(true)
            r.json().then(error => setShowLoginError(error.error))
          }
        })
    }

    
  
    return (
      <div className="submitsmallform">
        <br></br>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:  </label>
      <br></br>
        <input
          style={{width: 250}}
          placeholder='username'
          type="text"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="password">Password:  </label>
        <br></br>
        <input 
          style={{width: 250}}
          type="password"
          placeholder='password'
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button className="fancybutton" type="submit">Login</button>
      </form>
      <br></br>
      {loginError? <><a>{showLoginError}</a><br></br></> : <></>}
      </div>
    );
  }

  export default Login
import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const navigate = useNavigate();
  
    const [loginError,setLoginError] = useState(null)
    const [user, setUser] = useState({
      username: null,
      password: null
    })

    const handleChange = (e) => {
      const {placeholder, value} = e.target
      setUser({...user, [placeholder]:value})
      if (loginError) {
        setTimeout(() => {  setLoginError(false) }, 3000);
    }
    }

    function handleSubmit(e) {
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
            r.json().then(error => console.log(error))
          }
        })
    }

    
  
    return (
      <div className="submitform">
      <form onSubmit={handleSubmit}>
        <input
          placeholder='username'
          type="text"
          onChange={handleChange}
        />
        <br></br>
        <input 
          type="password"
          placeholder='password'
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>
      </div>
    );
  }

  export default Login
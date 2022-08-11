import React from 'react'
import { useState } from "react"

function Login({ onLogin }) {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
  
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
            r.json().then(user => onLogin(user))
          } else {
            setLoginError(true)
            r.json().then(error => console.log(error))
          }
        })
    }

    
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder='username'
          type="text"
          onChange={handleChange}
        />
        <input 
          type="text"
          placeholder='password'
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  export default Login
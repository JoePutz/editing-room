import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ onLogin }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    // const [userImage, setUserImage] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();
    
  
    function handleSubmit(e) {
      e.preventDefault();
      const user = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        // image_url: userImage,
        password: password,
        password_confirmation: passwordConfirmation,
      }
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      .then((r) => {
        if (r.ok) {
          r.json()
          fetch("login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
          })
          .then((r) => r.json())
          .then(user => {
            onLogin(user)
          })
          .then(() => navigate(`/account`))
        }
      })
    }
  
    return (
      <div className="submitform">
        <br></br>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name:  </label>
        <br></br>
        <input
          style={{width: 250}}
          type="text"
          id="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="last_name">Last Name:  </label>
        <br></br>
        <input
          style={{width: 250}}
          type="text"
          id="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="username">Username:  </label>
        <br></br>
        <input
          style={{width: 250}}
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="email">Email:  </label>
        <br></br>
        <input
          style={{width: 250}}
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <br></br>
        <br></br>
        <label htmlFor="user_image">User Image:  </label>
        <br></br>
        <input
          style={{width: 250}}
          type="text"
          id="user_image"
          value={userImage}
          onChange={(e) => setUserImage(e.target.value)}
        /> */}
        <br></br>
        <br></br>
        <label htmlFor="password">Password:  </label>
        <br></br>
        <input
          style={{width: 250}}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="password_confirmation">Confirm Password:  </label>
        <br></br>
        <input
          style={{width: 250}}
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }

  export default SignUp
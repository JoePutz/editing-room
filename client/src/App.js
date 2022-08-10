import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Genre from "./components/Genre";


function App() {
  // const [user, setUser] = useState(null);
  
  //   useEffect(() => {
  //     fetch("/me").then((response) => {
  //       if (response.ok) {
  //         response.json().then((user) => setUser(user));
  //       }
  //     });
  //   }, []);
  
    // if (user) {
    //   return <h2>Welcome, {user.username}!</h2>;
    // } else {
    //   return <h2>Sup?</h2>
    //   // return <Login onLogin={setUser} />;
    // }

    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/genres" element={<Genre/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  
  }
  

export default App;

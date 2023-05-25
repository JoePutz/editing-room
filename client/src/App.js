import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Genre from "./components/Genre";
import NavBar from "./components/NavBar";
import User from "./components/User";
import GenrePage from "./components/GenrePage";
import StoryPage from "./components/StoryPage";
import Login from "./components/Login";
import StoryForm from "./components/StoryForm";
import EditStoryForm from "./components/EditStoryForm";
import CritiquePage from "./components/CritiquePage";
import CritiqueForm from "./components/CritiqueForm";
import UsersPage from "./components/UsersPage";


function App() {
  const [user, setUser] = useState(null);
  
    useEffect(() => {
      // immediately gathers user data
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);

    // keep alive on heroku

      // const https = require("https");

      // setInterval(function() {
      //     https.get("https://your-heroku-app-name.herokuapp.com/");
      // }, 300000); // every 5 minutes (300000)




    return (
      <>
      <BrowserRouter>
      <NavBar user ={user} onLogin={setUser}/>
      <Routes>
        <Route path="/" element={<Home user={user} />}></Route>
        <Route path="/signup" element={<SignUp onLogin={setUser}/>}></Route>
        <Route path="/genres" element={<Genre/>}></Route>
        <Route path="/genres/:id" element={<GenrePage />} />
        <Route path="/account" element={<User user={user}/>}></Route>
        <Route path="/storypage/:id" element={<StoryPage user={user}/>}></Route>
        <Route path="/storypage/:id/edit" element={<EditStoryForm user={user}/>}></Route>
        <Route path="/storypage/:id/critiques" element={<CritiquePage user={user}/>}></Route>
        <Route path="/storypage/:id/critiques/add" element={<CritiqueForm user={user}/>}></Route>
        <Route path="/loginpage" element={<Login onLogin={setUser}/>}></Route>
        <Route path="/writestory" element={<StoryForm user={user} />}></Route>
        <Route path="/userspage" element={<UsersPage user={user} />}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  
  }
  

export default App;

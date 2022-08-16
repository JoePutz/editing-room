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


function App() {
  const [user, setUser] = useState(null);
  
    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);
  
    // if (user) {
    //   return <h2>Welcome, {user.username}!</h2>;
    // } else {
    //   return <h2>Sup?</h2>
    //   // return <Login onLogin={setUser} />;
    // }

    return (
      <>
      <BrowserRouter>
      <NavBar user ={user} onLogin={setUser}/>
      {user? <h1>User</h1> : <h1> No User</h1>}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp onLogin={setUser}/>}></Route>
        <Route path="/genres" element={<Genre/>}></Route>
        <Route path="/genres/:id" element={<GenrePage />} />
        <Route path="/account" element={<User user={user}/>}></Route>
        <Route path="/storypage/:id" element={<StoryPage user={user}/>}></Route>
        <Route path="/storypage/:id/edit" element={<EditStoryForm user={user}/>}></Route>
        <Route path="/loginpage" element={<Login onLogin={setUser}/>}></Route>
        <Route path="/writestory" element={<StoryForm user={user} />}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  
  }
  

export default App;

import React, { useState, useEffect } from "react";
import StoryCard from "./StoryCard"
import { useNavigate } from "react-router-dom";

function User( {user} ) {
    const [stories, setStories] = useState([])
    const [favorites, setFavorites] = useState([])
    const navigate = useNavigate();
    const writeStoryClick = (e) => {
        navigate(`/writestory`)
    }

    useEffect(() => {
        fetch(`/stories?user_id=${user.id}`)
          .then((response) => response.json())
          .then((data) => setStories(data));
    }, []);

    useEffect(() => {
        fetch(`/favorites?fav_user_id=${user.id}`)
          .then((response) => response.json())
          .then((data) => setFavorites(data));
    }, []);



    
    return (
        <>
        {user?
        <>
        <h1>Welcome {user.username}</h1>
        {user.bio? 
        <p>user.bio</p>
        :<p>Empty bio</p>}
        <button>Write/Edit Bio</button>
        <button onClick ={writeStoryClick}>Write Story</button>
        <h2>Edit Account</h2>
        <h2>Personal Stories</h2>
        {stories? stories.map((story) => <StoryCard story={story}/>) : <></>}
        <h2>Favorite Stories</h2>
        {favorites? favorites.map((favorite) => <StoryCard story={favorite.fav_story}/>) : <></>}
        </>
        :<h1>Must Log In</h1>}
        </>
    )
}

export default User
import React, { useState, useEffect } from "react";
import StoryCard from "./StoryCard"
import { useNavigate } from "react-router-dom";

function User( {user} ) {
    // const [secretUser, setSecretUser] = useState({})
    const navigate = useNavigate();
    const writeStoryClick = (e) => {
        navigate(`/writestory`)
    }

    // useEffect(() => {
    //     fetch(`/users/${user.id}`)
    //       .then((response) => response.json())
    //       .then((data) => setSecretUser(data));
    // }, []);

    // console.log(secretUser)

    
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
        {user.stories.map((story) => <StoryCard story={story}/>)}
        <h2>Favorite Stories</h2>
        {/* {user.fav_stories.map((story) => <li>Hi</li>)} */}
        </>
        :<h1>Must Log In</h1>}
        </>
    )
}

export default User
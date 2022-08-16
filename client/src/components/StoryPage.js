import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function StoryPage( user ) {
    const navigate = useNavigate();
    const [ story, setStory ] = useState([])
    let { id } = useParams();

    useEffect(() => {
        fetch(`/stories/${id}`)
          .then((response) => response.json())
          .then((data) => setStory(data));
    }, []);

    // console.log(story.id)

    function handleFavorite() {
            //favorites
    }

    function handleEdit() {
        navigate(`/storypage/${story.id}/edit`)
    }

    return(
        <>
        {user.user.username === story.author?
        <button onClick={handleEdit}>Edit Story</button>
        : <></>}
        <h2>{story.title}</h2>
        <h3>by: {story.author}</h3>
        <p>{story.text}</p>
        {user.user?
        <button onClick={handleFavorite}>Favorite</button>
        :<button>must log in to favorite</button>}
        <h1>
            This should have a Favorite button
            A note who the author is or whatever
            then just the whole text of the story
        </h1>
        </>
    )
}

export default StoryPage
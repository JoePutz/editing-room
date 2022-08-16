import React from 'react'
import { useNavigate } from "react-router-dom";

function StoryCard( { story} ) {
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate(`/storypage/${story.id}`)
    }

    return (
        <div onClick={handleClick}>
            <h2>{story.title}</h2>
            <h3>by: {story.author}</h3>
            <h3>synopsis: {story.synopsis}</h3>
        </div>
    )
}

export default StoryCard
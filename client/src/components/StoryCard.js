import React from 'react'
import { useNavigate } from "react-router-dom";

function StoryCard( { story} ) {
    // display of each individual story card
    const navigate = useNavigate();
    const handleClick = (e) => {
        // on click sends to the actual full story page
        navigate(`/storypage/${story.id}`)
    }


    return (
        <div id="storyCard" onClick={handleClick}>
            <a className="title">{story.title}   </a>
            <a className="author">by: {story.author}</a>
            <br></br>
            <a>{story.synopsis}</a>
            <br></br>
            {story.totalFavorites > 0 ? <a className="favorites">Favorites: {story.totalFavorites}</a> : <a className="favorites">Favorites: 0</a>}
            <a>                      Last Updated: {story.updated_at}</a>
        </div>
    )
}

export default StoryCard
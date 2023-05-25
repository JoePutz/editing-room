import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import StoryCard from "./StoryCard";

function GenrePage( {genre} ) {
    // The page of all stories for each individual genre
    const [stories, setStories] = useState([])
    let { id } = useParams();

    useEffect(() => {
        fetch(`/stories?genre=${id}`)
          .then((response) => response.json())
          .then((data) => setStories(data));
    }, []);

    return (
        <div id="contains">
            <div className="userpage">
        <h1>{id}</h1></div>
        {stories.map((story) => <StoryCard key={story.id} story = {story} />)}
        <br></br>
        </div>
    )
}

export default GenrePage
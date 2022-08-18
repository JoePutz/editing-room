import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import StoryCard from "./StoryCard";

function GenrePage( {genre} ) {
    const [stories, setStories] = useState([])
    let { id } = useParams();

    useEffect(() => {
        fetch(`/stories?genre=${id}`)
          .then((response) => response.json())
          .then((data) => setStories(data));
    }, []);

    return (
        <>
        <h1>Should autofill the header with the genre selected then have an assortment of stories beneath in Story Cards that can be searched through</h1>
        {stories.map((story) => <StoryCard story = {story} />)}
        </>
    )
}

export default GenrePage
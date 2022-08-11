import React, { useEffect, useState } from "react";

function GenrePage( {genre} ) {
    const [stories, setStories] = useState([])

    useEffect(() => {
        fetch(`/stories?genre=${genre}`)
          .then((response) => response.json())
          .then((data) => setStories(data));
    }, []);

    return (
        <h1>Should autofill the header with the genre selected then have an assortment of stories beneath in Story Cards that can be searched through</h1>
    )
}

export default GenrePage
import React from 'react'
import { useNavigate } from "react-router-dom";

function GenreCard( {genre} ) {
    // Each inidivudal genre to be placed on the list of genres
    const navigate = useNavigate();
    const handleClick = (e) => {
        // goes to the individual genre page
        navigate(`/genres/${genre}`)
    }

    return (
        <div id="genreCard" onClick={handleClick}>
            <h3>{genre}</h3>
        </div>
    )
}

export default GenreCard
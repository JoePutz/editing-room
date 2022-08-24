import React from 'react'
import { useNavigate } from "react-router-dom";

function GenreCard( {genre} ) {
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate(`/genres/${genre}`)
    }

    return (
        <div id="genreCard" onClick={handleClick}>
            <h3>{genre}</h3>
        </div>
    )
}

export default GenreCard
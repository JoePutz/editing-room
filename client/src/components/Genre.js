import React from "react";
import GenreCard from "./GenreCard";

function Genre ()  {
// The page that is the list of genres

const crime = "Crime"
const fantasy = "Fantasy"
const romance = "Romance"
const scifi = "Science Fiction"
const horror = "Horror"
const historical = "Historical"
const literary = "Literary"
const thriller = "Thriller"
const western = "Western"
const nonfi = "Non-Fiction"

    return (
        <div id="contains">
        <GenreCard genre={crime}/>
        <GenreCard genre={fantasy}/>
        <GenreCard genre={romance}/>
        <GenreCard genre={scifi}/>
        <GenreCard genre={horror}/>
        <GenreCard genre={historical}/>
        <GenreCard genre={literary}/>
        <GenreCard genre={thriller}/>
        <GenreCard genre={western}/>
        <GenreCard genre={nonfi}/>
        </div>
    )
}

export default Genre
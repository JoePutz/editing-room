import React from "react";
import { Link } from "react-router-dom";
import GenreCard from "./GenreCard";
// import { Card } from 'semantic-ui-react'


function Genre ()  {

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
        <>
        <div>Crime</div>
        <Link to='/genres/:id'>Crime</Link>
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
        </>
    )
}

export default Genre
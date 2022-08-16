import React from 'react'
import CritiqueCard from "./CritiqueCard"

function CritiquePage( {user, story} ) {


    return(
        <>
        {story.critiques.map(critique => <CritiqueCard critique={critique} user={user}/>) }
        </>
    )
}

export default CritiquePage
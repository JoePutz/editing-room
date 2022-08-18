import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CritiqueCard from "./CritiqueCard"
import { useNavigate } from "react-router-dom";

function CritiquePage( {user} ) {
    const [ critiques, setCritiques ] = useState([])
    // const [ story, setStory ] = useState([])
    let { id } = useParams();

    const navigate = useNavigate();
    function handleClick() {
        navigate(`/storypage/${id}/critiques/add`)
    }

    useEffect(() => {
        fetch(`/critiques?crit_story=${id}`)
          .then((response) => response.json())
          .then((data) => setCritiques(data));
    }, []);

    // useEffect(() => {
    //     fetch(`/stories/${id}`)
    //       .then((response) => response.json())
    //       .then((data) => setStory(data));
    // }, []);


    return(
        <>
        {user? <button onClick={handleClick}>Add Critique</button> : <></>}
        {critiques.map(critique => <CritiqueCard critique={critique} user={user}/>) }
        </>
    )
}

export default CritiquePage
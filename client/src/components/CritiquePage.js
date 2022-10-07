import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CritiqueCard from "./CritiqueCard"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CritiquePage( {user} ) {
    const [ critiques, setCritiques ] = useState([])
    const [ story, setStory ] = useState([])
    const [ refresh, setRefresh ] = useState(false)
    let { id } = useParams();

    const navigate = useNavigate();
    function handleClick() {
        navigate(`/storypage/${id}/critiques/add`)
    }

    useEffect(() => {
        fetch(`/critiques?crit_story_id=${id}`)
          .then((response) => response.json())
          .then((data) => setCritiques(data));
    }, [refresh]);

    useEffect(() => {
        fetch(`/stories/${id}`)
          .then((response) => response.json())
          .then((data) => setStory(data));
    }, []);

    function handleCritiqueDelete(critiqueID) {
        fetch(`/critiques/${critiqueID}`,{
            method: "DELETE"
       })
       .then(()=> setRefresh(!refresh))
    }




    return(
        <>
        <span className="leftRight">
            <p className="bookLink"><i class="arrow left"></i> Return to  <Link className="truelink" to={`/storypage/${id}`}>{story.title}</Link></p>
        {user? <button className="fancybutton" onClick={handleClick}>Add Critique</button> : <></>}
        </span>
        <br></br>
        <br></br>
        <div id="contains">
        <br></br>
        {critiques.map(critique => <CritiqueCard key={critique.id} critique={critique} user={user} handleCritiqueDelete={handleCritiqueDelete} />) }
        <br></br>
        </div>
        </>
    )
}

export default CritiquePage
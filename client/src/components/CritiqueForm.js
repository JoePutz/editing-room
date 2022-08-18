import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


function CritiqueForm ( user ) {
    const [criticism, setCriticism] = useState("")
    const navigate = useNavigate();
    let { id } = useParams();
    // :criticism, :crit_story_id, :crit_writer_id


    function handleSubmit (e) {
        e.preventDefault();
        fetch("/critiques", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              criticism: criticism,
              crit_writer_id: user.user.id,
              crit_story_id: `${id}`
            }),
          })
            .then((r) => r.json())
            .then(() => navigate(`/storypage/${id}/critiques`));
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea onChange={(e) => setCriticism(e.target.value)} name="criticism" rows="5" cols="30" style={{width: 1200}}></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CritiqueForm
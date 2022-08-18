import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


function ResponseForm ( {user, critique, setRefresh, refresh} ) {
    const [response, setResponse] = useState("")
    const navigate = useNavigate();
    let { id } = useParams();
    // :criticism, :crit_story_id, :crit_writer_id


    function handleSubmit (e) {
        e.preventDefault();
        fetch("/responses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              response: response,
              resp_user_id: user.id,
              resp_critique_id: critique.id
            }),
          })
            .then((r) => r.json())
            // .then(() => window.location.reload())
            .then(() => setRefresh(!refresh));
    }

    // console.log(user.id)

    return (
        <form onSubmit={handleSubmit}>
            <textarea onChange={(e) => setResponse(e.target.value)} name="response" rows="5" cols="25" style={{width: 1100}}></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ResponseForm
import React, { useEffect, useState } from 'react'
import ResponseForm from './ResponseForm'
import ResponseCard from './ResponseCard'

function CritiqueCard( {critique, user} ) {
    const [ responses, setResponses ] = useState([])
    const [ refresh, setRefresh ] = useState(false)

    useEffect(() => {
        fetch(`/responses?resp_critique_id=${critique.id}`)
          .then((response) => response.json())
          .then((data) => setResponses(data));
    }, [refresh]);

    function handleResponse() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }


return(
    <div>
        <h3>Critique by: {critique.crit_writer.username}</h3>
        <p>{critique.criticism}</p>
        {responses.map((response) => <ResponseCard response={response} setRefresh={setRefresh} refresh={refresh} />)}
        {user? <>        
        <button onClick={handleResponse}>this buttone will eventually hide ResponseForm</button>
        <div id="myDIV">
        <ResponseForm user={user} critique={critique} />
        </div>
        </> : <></>}
    </div>
)

}

export default CritiqueCard
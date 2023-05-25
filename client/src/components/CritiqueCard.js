import React, { useEffect, useState } from 'react'
import ResponseForm from './ResponseForm'
import ResponseCard from './ResponseCard'

function CritiqueCard( {critique, user, handleCritiqueDelete} ) {
    //Component for displaying individual critiques 
    const [ responses, setResponses ] = useState([])
    const [ refresh, setRefresh ] = useState(false)
    const [ response, setResponse ] =useState("")
    const [ visible, setVisible ] = useState(false)


    useEffect(() => {
        fetch(`/responses?resp_critique_id=${critique.id}`)
          .then((response) => response.json())
          .then((data) => setResponses(data));
    }, [refresh]);

    function handleResponse() {
        // flips the visuals of all responses to the critique from off to on
        setVisible(!visible)
    }

    function handleSubmit(e) {
        // submits the response form, at a lower layer
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
            .then(() => {setRefresh(!refresh)
                handleResponse()
            
            })
    }

    function handleResponseDelete(id) {
        // deletes the response to the critique, goes to lower layer
        fetch(`/responses/${id}`,{
            method: "DELETE"
       })
       .then(()=> setRefresh(!refresh))
    }

    function handleDeleteClick() {
        // deletes the critique
        handleCritiqueDelete(critique.id)
    }




return(
    <div id="critiqueCard">
        <a className="poster">{critique.user}</a>
        {user && user.id === critique.crit_writer_id ? <button onClick={handleDeleteClick} className="deleteCritique">Delete</button> : <></>}
        <p>{critique.criticism}</p>
        {responses.map((response) => <ResponseCard key={response.id} response={response} user={user} handleResponseDelete={handleResponseDelete}/>)}
        {user? <>        
        {visible? 
        <>
        <button className="fancybutton" onClick={handleResponse}>Close</button>
        <ResponseForm user={user} critique={critique} handleResponseDelete={handleResponseDelete} submitResponse={handleSubmit} setResponse={setResponse} />
        </>
        : <button className="fancybutton" onClick={handleResponse}>Reply</button>}
        </> : <></>}
    </div>
)

}

export default CritiqueCard
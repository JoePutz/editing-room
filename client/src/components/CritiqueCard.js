import React, { useEffect, useState } from 'react'
import ResponseForm from './ResponseForm'
import ResponseCard from './ResponseCard'
import DOMPurify from 'dompurify';

function CritiqueCard( {critique, user, handleCritiqueDelete} ) {
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
        setVisible(!visible)
    }

    function handleSubmit(e) {
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
        fetch(`/responses/${id}`,{
            method: "DELETE"
       })
       .then(()=> setRefresh(!refresh))
    }

    function handleDeleteClick() {
        handleCritiqueDelete(critique.id)
    }

    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }


return(
    <div id="critiqueCard">
        <a className="poster">{critique.user}</a>
        {user && user.id === critique.crit_writer_id ? <button onClick={handleDeleteClick} className="deleteCritique">Delete</button> : <></>}
        <div className="storytext">
            <div className="preview" dangerouslySetInnerHTML={createMarkup(critique.criticism)}></div>
        </div>
        
        {/* <p>{critique.criticism}</p> */}
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
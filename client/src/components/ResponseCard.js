import React from 'react'

function ResponseCard( {user, response, handleResponseDelete} ) {
    // Display of the responses to the initial critiques
    function handleClick() {
        // implements the delete response fucntion recieved from the critique card
        handleResponseDelete(response.id)
    }

    return(
        <div id="critiqueCard">
            <a className="responder">{response.user}</a>
            {user && user.id === response.resp_user_id ? <button onClick={handleClick} className="deleteCritique">Delete</button> : <></>}
            <br></br>
            <a>{response.response}</a>
        </div>
    )
}

export default ResponseCard
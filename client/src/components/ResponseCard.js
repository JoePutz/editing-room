import React from 'react'

function ResponseCard( {user, response, handleResponseDelete} ) {

    function handleClick() {
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
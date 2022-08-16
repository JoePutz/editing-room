import React from 'react'

function CritiqueCard( {critique} ) {

    function handleResponse() {
        console.log("hi")
    }

return(
    <div>
        <h3>Critique by: {critique.user}</h3>
        <p>{critique.criticism}</p>
        {/* <container>{critique.responses.map((response) => <ResponseCard/>)}</container> */}
        <button onClick={handleResponse}>Respond</button>
    </div>
)

}

export default CritiqueCard
function ResponseForm ( {submitResponse, setResponse} ) {



    function handleSubmit (e) {
        e.preventDefault();
        submitResponse(e)
    }



    return (
        <div className="submitform">
        <form onSubmit={handleSubmit}>
            <textarea onChange={(e) => setResponse(e.target.value)} name="response" rows="5" className="resizeText"></textarea>
            <br></br>
            <button className="fancybutton" type="submit">Submit</button>
        </form>
        </div>
    )
}

export default ResponseForm
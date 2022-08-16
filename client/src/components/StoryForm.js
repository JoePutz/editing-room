import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StoryForm ( user ) {
    //title, :user_id, :genre, :text, :synopsis
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [text, setText] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();
        fetch("/stories", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              user_id: user.user.id,
              genre: genre,
              text: text,
              synopsis: synopsis,
            }),
          })
            .then((r) => r.json())
            .then(() => navigate(`/account`));
        }
      

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        <label for="genre-select">Choose a genre:</label>

        <select id="genre-select" onChange={(e) => setGenre(e.target.value)}>
            <option value={""}>--Please choose an option--</option>
            <option value={"Crime"} >Crime</option>
            <option value={"Fantasy"} >Fantasy</option>
            <option value={"Romance"} >Romance</option>
            <option value={"Science Fiction"} >Science Fiction</option>
            <option value={"Horror"} >Horror</option>
            <option value={"Historical"} >Historical</option>
            <option value={"Literary"} >Literary</option>
            <option value={"Thriller"} >Thriller</option>
            <option value={"Western"} >Western</option>
            <option value={"Non-Fiction"} >Non-Fiction</option>
        </select>
        <br></br>
        <textarea onChange={(e) => setSynopsis(e.target.value)} name="synopsis" rows="5" cols="30" style={{width: 1200}}></textarea>
        <br></br>
        <textarea onChange={(e) => setText(e.target.value)} name="text" rows="50" cols="30" style={{width: 1200}}></textarea>
        <br></br>
        <button type="submit">Submit</button>
        </form>
    )
}

export default StoryForm
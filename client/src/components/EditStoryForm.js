import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


function EditStoryForm ( user ) {
    const [editTitle, setEditTitle] = useState("")
    const [editText, setEditText] = useState("")
    const [editSynopsis, setEditSynopsis] = useState("")
    const [editGenre, setEditGenre] = useState("")
    const navigate = useNavigate();
    const [ story, setStory ] = useState([])
    let { id } = useParams();

    useEffect(() => {
        fetch(`/stories/${id}`)
          .then((response) => response.json())
          .then((data) => setStory(data))
          .then(() => {
            setEditTitle(story.title)
            setEditText(story.text)
            setEditSynopsis(story.synopsis)
            setEditGenre(story.genre)
          });
    }, []);


    function handleSubmit (e) {
        e.preventDefault();
        fetch(`/stories/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: editTitle,
              text: editText,
              synopsis: editSynopsis,
              genre: editGenre
            }),
          })
            .then((r) => r.json())
            .then(() => navigate(`/account`));
        }

        function handleDelete() {
            fetch(`/stories/${id}`,{
                method: "DELETE"
            })
        }

      
    return (
        <div className="submitform">
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          className="signupInput"
          type="text"
          id="title"
          defaultValue={story.title}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <br></br>
        <label htmlFor="genre-select">Choose a genre:</label>
        <select id="genre-select" onChange={(e) => setEditGenre(e.target.value)}>
            <option value={story.genre}>{story.genre}</option>
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
        <label htmlFor="synopsis">Synopsis:</label>
        <br></br>
        <textarea defaultValue={story.synopsis} onChange={(e) => setEditSynopsis(e.target.value)} name="synopsis" rows="5" className="resizeText">{story.synopsis}</textarea>
        <br></br>
        <span id="chars">{editSynopsis ? 300 - editSynopsis.length : 300 }</span> characters remaining
        <br></br>
        <br></br>
        <label htmlFor="text">Story:</label>
        <br></br>
        <textarea defaultValue={story.text} onChange={(e) => setEditText(e.target.value)} name="text" rows="50" className="resizeText"></textarea>
        <br></br>
        <button className="fancybutton" type="submit">Submit</button>
        <button className="fancybutton" onClick={handleDelete}>Delete Story</button>
        </form>
        </div>
    )
}

export default EditStoryForm
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


function EditStoryForm ( user ) {
    //title, :user_id, :genre, :text, :synopsis
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

    // console.log(story.text)

    // const handleEditReview = (e) => {
    //     setEditReview(false)
    //     console.log(starAmount)
    //     fetch(`/reviews/${userReview.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({comment: editComment, star: starAmount})
    //     }).then(r => r.json())
    //     .then(d => console.log(d))
    // }

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

        console.log(story.genre)
      
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          defaultValue={story.title}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <br></br>
        <label for="genre-select">Choose a genre:</label>
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
        <textarea defaultValue={story.synopsis} onChange={(e) => setEditSynopsis(e.target.value)} name="synopsis" rows="5" cols="30" style={{width: 1200}}>{story.synopsis}</textarea>
        <br></br>
        <textarea defaultValue={story.text} onChange={(e) => setEditText(e.target.value)} name="text" rows="50" cols="30" style={{width: 1200}}></textarea>
        <br></br>
        <button type="submit">Submit</button>
        <button onClick={handleDelete}>Delete Story</button>
        </form>
    )
}

export default EditStoryForm
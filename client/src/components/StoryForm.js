import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';

function StoryForm ( user ) {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const  [convertedContent, setConvertedContent] = useState(null);
    const [editorState, setEditorState] = useState(
      () => EditorState.createEmpty(),
    );
    const navigate = useNavigate();

    const handleEditorChange = (state) => {
      setEditorState(state);
      convertContentToHTML();
    }
    const convertContentToHTML = () => {
      let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
      setConvertedContent(currentContentAsHTML);
    }

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
              text: convertedContent,
              synopsis: synopsis,
            }),
          })
            .then((r) => r.json())
            .then(() => navigate(`/account`));
        }


    return (
        <div className="submitform">
            <br></br>
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="signupInput"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="genre-select">Choose a genre:</label>

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
        <br></br>
        <label htmlFor="synopsis">Synopsis:</label>
        <br></br>
        <textarea className="resizeText" onChange={(e) => setSynopsis(e.target.value)} maxLength="300" name="synopsis" rows="5"></textarea>
        <br></br>
        <span id="chars">{300 - synopsis.length}</span> characters remaining
        <br></br>
        <br></br>
        <label htmlFor="text">Story:</label>
        <br></br>
        <Editor 
          defaultEditorState={editorState} 
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        <br></br>
        <br></br>
        <button className="fancybutton" type="submit">Submit</button>
        </form>
        <br></br>
        </div>
    )
}

export default StoryForm
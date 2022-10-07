import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';

function CritiqueForm ( user ) {
    // const [criticism, setCriticism] = useState("")
    const navigate = useNavigate();
    const [convertedContent, setConvertedContent] = useState(null);
    const [editorState, setEditorState] = useState(
      () => EditorState.createEmpty(),
    );
    let { id } = useParams();
    
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
        fetch("/critiques", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              criticism: convertedContent,
              crit_writer_id: user.user.id,
              crit_story_id: `${id}`
            }),
          })
            .then((r) => r.json())
            .then(() => navigate(`/storypage/${id}/critiques`));
    }

    return (
        <div className="submitform">
        <form onSubmit={handleSubmit}>
            <br></br>
            <Editor 
          defaultEditorState={editorState} 
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
            {/* <textarea onChange={(e) => setCriticism(e.target.value)} name="criticism" rows="5" cols="30" style={{width: 1200}}></textarea> */}
            <br></br>
            <button className="fancybutton" type="submit">Submit</button>
        </form>
        <br></br>
        </div>
    )
}

export default CritiqueForm
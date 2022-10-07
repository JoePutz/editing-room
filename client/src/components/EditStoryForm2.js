import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';

function EditStoryForm2() {
    const [text, setText] = useState("")
    const navigate = useNavigate();
    const [ story, setStory ] = useState([])
    const  [convertedContent, setConvertedContent] = useState(null);
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
        );
    let { id } = useParams();

    useEffect(() => {
        fetch(`/stories/${id}`)
          .then((response) => response.json())
          .then((data) => setStory(data))
          .then(() => {
            setEditText(story.text)
          })
          .then;
    }, []);

    

    return (
        <div className="submitform">
        <form onSubmit={handleSubmit}>
        <Editor 
          defaultEditorState={editorState} 
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        </form>
        </div>
    )
}

export default EditStoryForm2
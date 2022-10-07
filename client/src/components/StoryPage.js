import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

function StoryPage( user ) {
    const navigate = useNavigate();
    const [ story, setStory ] = useState([])
    const [ refresh, setRefresh] = useState(false)
    const [ favorite, setFavorite] = useState(false)
    let { id } = useParams();

    useEffect(() => {
        fetch(`/stories/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setStory(data)
          })
    }, [refresh]);


    useEffect(() => {
        if (user.user) {
            fetch(`/favorites?fav_story_id=${id}&fav_user_id=${user.user.id}`)
            .then(r => {
                if (r.ok) {
                    r.json().then(favorite => {
                        setFavorite(favorite)
                    })
                } else {
                    console.log('no favorite')
                }})
        }
    },[user])

    function handleFavorite() {
        fetch("/favorites", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fav_user_id: user.user.id,
              fav_story_id: story.id,
            }),
          })
            .then((r) => r.json())
            .then((favorite) => setFavorite(favorite))
            .then(() => {setRefresh(!refresh)
            });
      
    }


    function handleUnfavorite() {
        fetch(`/favorites/${favorite.id}`,{
             method: "DELETE"
        })
        .then(() => setFavorite({}))
    }

    function handleEdit() {
        navigate(`/storypage/${story.id}/edit2`)
    }

    function handleCritiques() {
        navigate(`/storypage/${story.id}/critiques`)
    }

    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }

    return(
        <div id="contains">
        {user.user && user.user.username === story.author?
        <button className="fancybutton" onClick={handleEdit}>Edit Story</button>
        : <></>}
        <div className="storypage">
            <br></br>
            <div className="storyHeader">
                <h2>{story.title}</h2>
                <h3>by: {story.author}</h3>
            </div>
            <div className="storytext">
                {story? <div className="preview" dangerouslySetInnerHTML={createMarkup(story.text)}></div> : <></>}
            </div>
        </div>
        <div className="storyHeader">
        {user.user?
        <>
        {favorite.id ? <button className="fancybutton" onClick={handleUnfavorite}>Unfavorite</button> : <button className="fancybutton" onClick={handleFavorite}>Favorite</button>}
        </>
        :<button className="fancybutton">must log in to favorite</button>}
        <button className="fancybutton" onClick = {handleCritiques} >See Critiques</button>
        </div>
        <br></br>
        </div>
    )
}

export default StoryPage
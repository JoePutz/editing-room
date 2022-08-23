import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function StoryPage( user ) {
    const navigate = useNavigate();
    const [ story, setStory ] = useState([])
    const [ refresh, setRefresh] = useState(false)
    const [ favorite, setFavorite] = useState(false)
    let { id } = useParams();

    useEffect(() => {
        fetch(`/stories/${id}`)
          .then((response) => response.json())
          .then((data) => setStory(data));
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
        navigate(`/storypage/${story.id}/edit`)
    }

    function handleCritiques() {
        navigate(`/storypage/${story.id}/critiques`)
    }

    return(
        <>
        {user.user && user.user.username === story.author?
        <button onClick={handleEdit}>Edit Story</button>
        : <></>}
        <div className="storypage">
            <br></br>
            <div className="storyHeader">
                <h2>{story.title}</h2>
                <h3>by: {story.author}</h3>
            </div>
            <div className="storytext">
                <p>{story.text}</p>
            </div>
        </div>
        <div className="storyHeader">
        {user.user?
        <>
        {favorite.id ? <button onClick={handleUnfavorite}>Unfavorite</button> : <button onClick={handleFavorite}>Favorite</button>}
        </>
        :<button>must log in to favorite</button>}
        <button onClick = {handleCritiques} >See Critiques</button>
        </div>
        </>
    )
}

export default StoryPage
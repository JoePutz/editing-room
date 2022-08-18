import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function StoryPage( user ) {
    const navigate = useNavigate();
    const [ story, setStory ] = useState([])
    const [ refresh, setRefresh] = useState(false)
    const [ favorite, setFavorite] = useState(false)
    // const [ favDetails, setFavDetails] = useState({})
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

    // console.log(story.id)

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
            .then(() => {
                // setFavorite(!favorite)
                setRefresh(!refresh)
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
        <h2>{story.title}</h2>
        <h3>by: {story.author}</h3>
        <p>{story.text}</p>
        {user.user?
        <>
        {favorite.id ? <button onClick={handleUnfavorite}>Unfavorite</button> : <button onClick={handleFavorite}>Favorite</button>}
        </>
        :<button>must log in to favorite</button>}
        <button onClick = {handleCritiques} >See Critiques</button>
        </>
    )
}

export default StoryPage
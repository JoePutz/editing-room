import React, { useState, useEffect } from "react";
import StoryCard from "./StoryCard";
import { useNavigate } from "react-router-dom";

function User( {user} ) {
    const [stories, setStories] = useState([])
    const [favorites, setFavorites] = useState([])
    const [ hidden, setHidden ] = useState(false)
    const [bio, setBio] = useState("")
    // const [image, setImage] = useState("")
    const [ users, setUsers ] = useState({})
    const [ refresh, setRefresh ] = useState(false)
    const navigate = useNavigate();
    const writeStoryClick = (e) => {
        navigate(`/writestory`)
    }


    function handleSubmit (e) {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
             bio: bio,
            //  image_url: image,
            }),
          })
            .then((r) => r.json())
            .then(() => {
                handleEditClick()
                setRefresh(!refresh)
            })
    }

    useEffect(() => {
        fetch(`/users?id=${user.id}`)
            .then((r) => r.json())
            .then((data) => setUsers(data))
    }, [refresh]);

    useEffect(() => {
        fetch(`/stories?user_id=${user.id}`)
          .then((response) => response.json())
          .then((data) => setStories(data));
    }, []);

    useEffect(() => {
        fetch(`/favorites?fav_user_id=${user.id}`)
          .then((response) => response.json())
          .then((data) => setFavorites(data));
    }, []);

    function handleEditClick() {
        setHidden(!hidden)
    }


{/* <BioForm handleEditclick={handleEditClick} user = {user}/>  */}
    
    return (
        <div id="contains">
        {user?
        <>
        <div className="userpage">
        <h1>Welcome {user.username}</h1>
        </div>
            {users[0]? <p className="userp">{users[0].bio}</p> : <>Empty Bio</>}
        {/* {user.bio?  

        <p>{user.bio}</p>
        
        :<p>Empty bio</p>} */}
        <div className="userpage">
        {hidden? 
        <button className="fancybutton" onClick={handleEditClick}>Close</button> 
        : <button className="fancybutton" onClick={handleEditClick}>Edit Bio</button>}
        <button className="fancybutton" onClick ={writeStoryClick}>Write Story</button></div>
        {hidden?
                <div className="submitform">
                <form onSubmit={handleSubmit}>
                    {/* <a>Personal Image</a>
                    <br></br>
                    <input defaultValue={user.image_url} onChange={(e) => setImage(e.target.value)} name="image" className="resizeText"/>
                    <br></br> */}
                    <a>Personal Bio</a>
                    <br></br>
                    <textarea maxLength="300" defaultValue={user.bio} onChange={(e) => setBio(e.target.value)} name="bio" rows="5" className="resizeText"></textarea>
                    <br></br>
                    <span id="chars">{bio ? 300 - bio.length : 300 }</span> characters remaining
                    <br></br>
                    <br></br>
                    <button className="fancybutton" type="submit">Submit</button>
                </form>
                </div>
        
        
        : <></>}
        <div className="userpage">
        <h2>Your Stories</h2>
        </div>
        {stories? stories.map((story) => <StoryCard story={story} key={story.id}/>) : <></>}
        <div className="userpage">
            <h2>Your Favorites</h2>
        </div>
        {favorites? favorites.map((favorite) => <StoryCard key={favorite.id} story={favorite.fav_story}/>) : <></>}
        <br></br>
        </>
        :<h1>Must Log In</h1>}
        </div>
    )
}

export default User
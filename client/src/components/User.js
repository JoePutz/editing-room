import React from "react";

function User( {user} ) {

    
    return (
        <>
        {user?
        <>
        <h1>Welcome {user.username}</h1>
        {user.bio? 
        <p>user.bio</p>
        :<p>Empty bio</p>}
        <button>Write/Edit Bio</button>
        <h2>Edit Account</h2>
        <h2>Personal Stories</h2>
        {/* {user.stories.map((story) => <li>Hi</li>)} */}
        <h2>Favorite Stories</h2>
        {/* {user.fav_stories.map((story) => <li>Hi</li>)} */}
        </>
        :<h1>Must Log In</h1>}
        </>
    )
}

export default User
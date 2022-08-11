import React from "react";

function User( {user} ) {
    return (
        <>
        {user?
        <h1>{user.username}</h1> :<h1>Nope</h1>}
        <h1>Here should be all the stories written or favorited. only works if you log in as a user though, othewise just says "Please Log In"</h1>
        </>
    )
}

export default User
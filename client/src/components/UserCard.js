import React from 'react'
import { Link } from "react-router-dom";

function UserCard( { user} ) {

    return (
        <div id="authorCard" >
            <a className="title">{user.username}</a>
            <br></br>
            <a>{user.bio}</a>
            <br></br>
            <a>Author of: </a>
            {user.stories.map((story) => <><Link to={`/storypage/${story.id}`}>{story.title}</Link><a>          </a></>)}
        </div>
    )
}

export default UserCard
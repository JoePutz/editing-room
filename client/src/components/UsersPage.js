import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UsersPage( ) {
    // Page that lists all users
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`/users`)
          .then((response) => response.json())
          .then((data) => setUsers(data));
    }, []);

    return (
        <div id="contains">
            <div className="userpage">
        <h1>Our Authors</h1></div>
        {users.map((user) => <UserCard user = {user} key={user.id}/>)}
        <br></br>
        </div>
    )
}

export default UsersPage
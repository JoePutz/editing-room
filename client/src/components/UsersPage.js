import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UsersPage( ) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`/users`)
          .then((response) => response.json())
          .then((data) => setUsers(data));
    }, []);

    return (
        <div id="contains">
        <h1>Our Authors</h1>
        {users.map((user) => <UserCard user = {user} key={user.id}/>)}
        </div>
    )
}

export default UsersPage
import { useState } from "react";


function BioForm ( {user, handleEditClick } ) {
    const [bio, setBio] = useState("")
    // const [image, setImage] = useState("")


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
            .then(() => handleEditClick())
    }

    return (
        <div className="submitform">
        <form onSubmit={handleSubmit}>
            {/* <a>Personal Image</a>
            <br></br>
            <input defaultValue={user.image_url} onChange={(e) => setImage(e.target.value)} name="image" style={{width: 1200}}/>
            <br></br> */}
            <a>Personal Bio</a>
            <br></br>
            <textarea maxLength="300" defaultValue={user.bio} onChange={(e) => setBio(e.target.value)} name="bio" rows="5" className="resizeText"></textarea>
            <br></br>
            <span id="chars">{bio ? 300 - bio.length : 300 }</span> characters remaining
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default BioForm
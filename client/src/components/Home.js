import React from "react";


function Home ( {user} )  {
  // The home page
    return  (
      <div className="hello">
      {user? <h1>Welcome </h1> : <h1>The Editor's Table</h1>}
      </div>
    )
}
export default Home
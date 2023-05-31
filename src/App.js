import React from 'react'
import Login from "./components/Login"
import Register from "./components/Register"
import ReadUsers from "./components/ReadUsers"
// TODO: import register componet here
import {authCheck} from "./utils"
import {getCookie} from "./common"

import {useState, useEffect} from 'react'


function App() {

  const [user, setUser] = useState()

  // useEffect will run everytime the page reloads
  useEffect (() => {
    console.log("use effect ran")
    // cookie varible stores the jwt token stored in the cookie
    let cookie = getCookie("jwt_token")
    // if a cookie is present with the name jwt_token
    if(cookie !== false) {
      loginWithToken(cookie)
    }
  }, [])

  const loginWithToken = async (cookie) => {
      let user = await authCheck(cookie)
      console.log(user)
      setUser(user)
  }

  return (
    <div className="App">
      <h1>My amazing app!</h1>
      <Register />
      <br></br>
      <br></br>
      <Login newUser={setUser} />
      {/* TODO: render Register componet here */}

      {
        user
          ?
          <>
            <h2>Hello welcome {user} you have logged in</h2>
            <ReadUsers />
          </>
          :
          <h2>Please log in</h2>
      }

    </div>
  );
}

export default App;

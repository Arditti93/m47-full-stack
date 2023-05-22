import React from 'react'
import Login from "./components/Login"
// TODO: import register componet here

import {useState} from 'react'


function App() {

  const [user, setUser] = useState()

  return (
    <div className="App">
      <h1>My amazing app!</h1>

      <Login newUser={setUser} />
      {/* TODO: render Register componet here */}

      {
        user
          ?
          <h2>Hello welcome {user} you have logged in</h2>
          :
          <h2>Please log in</h2>
      }

    </div>
  );
}

export default App;

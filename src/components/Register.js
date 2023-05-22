import React from 'react'
import {useState} from "react"

import {registerUser} from "../utils"

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()


    return (
        <div className="login">
            <h2>Register Below</h2>
            {/* //TODO: Add a form to register  */}
        </div>

    )

}

export default Login
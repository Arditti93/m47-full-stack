export const loginUser = async (username, password, newUser) => {
    try {
        const response = await fetch("http://localhost:5002/users/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json" // tells our rest api that the body of this 
                                                    // request will be in JSON format
            },
            body: JSON.stringify({
                "username": username,
                "password" : password
            })
        })
        const data = await response.json()
        console.log(data)
        newUser(data.user)

    } catch (error) {
        console.log(error)
    }
}

export const registerUser = async (username, email, password) => {
    try {
        // add fetch here
    } catch (error) {
        console.log(error)
    }
}

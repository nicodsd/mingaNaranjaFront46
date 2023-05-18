import React, { useRef }  from "react";

const SignUp = () => {

    let username = useRef()
    let password = useRef()
    console.log(username)
    console.log(password)
    function handleForm(e){
        e.preventDefault()
        console.log(username.current.value)
        console.log(username.current.value)
        let data 
    }
    return (
        <div>
            <input type="text" />
            <input type="text" />
            <input type="submit" />
        </div>
    )
} 
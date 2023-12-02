import { useState } from "react"
import Register from "./Register"
import LogIn from "./LogIn"

export default function Authform(){

    const [show, setShow] = useState(true)

    return (
        <>
            {show ? <LogIn setShow={setShow}/> : <Register setShow= {setShow} />}
        </>
    )

}
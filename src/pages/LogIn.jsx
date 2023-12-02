import { Link as Anchor, useNavigate } from "react-router-dom"
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../api";
import Swal from 'sweetalert2';

export default function LogIn(props) {

    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const handleForm = (e) => {

        e.preventDefault()

        let inputEmail = email.current.value
        let inputPassword = password.current.value

        let dataUser = {
            email: inputEmail,
            password: inputPassword
        }

        axios.post(apiUrl+"auth/signin", dataUser)
        .then(res=>{
            console.log(res)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            Swal.fire({
                title: 'Welcome!',
                icon: 'success',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                allowOutsideClick: false
            })
            navigate("/")
        })
        .catch(err=>{
            console.log(err.response.data.message)
            Swal.fire(`${err.response.data.message}`)
        }) 



    }

    return (
        <div className="flex">
            <div className="bg-white w-[100%] sm:w-[30%] flex flex-col justify-center items-center">
                <img src="/public/images/Logo 2 1.png" className="h-[4rem] my-[2rem]" alt="" />
                <div className="flex flex-col items-center  mt-6">
                    <h2 className="font-bold text-center text-3xl/[39px]">Welcome!</h2>
                    <span className="text-center text-xs px-10 py-4">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</span>
                    <form className="flex flex-col w-[75%]">
                        <label htmlFor="email" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Email</label>
                        <input type="email" name="email" id="email" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" ref={email}/>
                        <label htmlFor="password" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Password</label>
                        <input type="password" name="password" id="password" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" ref={password}/>
                        <input type="submit" value="Sign In" className="bg-gradient-to-r from-[#434343]  to-black  text-white rounded-lg py-3 text-sm my-3" onClick={handleForm}/>
                    </form>
                    <button className="flex border w-[75%] py-3 rounded-lg border-[#1f1f1f78] justify-center ">
                        <img src="/public/images/Google.png" alt="" /><span>Sign in with Google</span>
                    </button>

                    <div className="flex flex-col items-center">
                        {props.setShow ? (
                            <span className="w-[75%] text-xs mt-4">you don't have an account yet?  <span onClick={()=>props.setShow(false)} className="cursor-pointer text-red-600 font-bold">Sign up</span></span>
                        ) : (
                            <Anchor to="/Register" className="w-[75%] text-xs mt-4">Already have an account? <span className="cursor-pointer text-red-600 font-bold">Sign in</span></Anchor>
                        )}
                    </div>
                </div>
            </div>
            <img src="/public/images/pexels-aleksandar-pasaric-2339009 2.png" className="w-[70%] h-screen object-cover hidden sm:block" alt="" />
        </div>
    )
}

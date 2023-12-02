import React from "react"
import { Link as Anchor, useNavigate } from "react-router-dom"
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../api";
import { AiOutlineUpload } from "react-icons/ai"
import Swal from 'sweetalert2';

export default function Register(props) {

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const notifications = useRef(null)
    const photo = useRef(null);

    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault();

        let inputName = name.current.value;
        let inputEmail = email.current.value;
        let inputPhoto = photo.current.files[0]
        let inputPassword = password.current.value;
        let inputNotifications = notifications.current.value;

        /* let dataUserRegister = {
            name: inputName,
            email: inputEmail,
            photo: inputPhoto,
            password: inputPassword,
            notifications: inputNotifications
        }; */
        
        const formData = new FormData();
        formData.append('name', inputName);
        formData.append('email', inputEmail);
        formData.append('password', inputPassword);
        formData.append('photo', inputPhoto);
        formData.append('notifications', inputNotifications);

        let dataUser = {
            email: inputEmail,
            password: inputPassword
        };

        axios
            .post(apiUrl + "auth/signup", formData)
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data.user));

                // Realizar la solicitud de inicio de sesión después de que la solicitud de registro haya finalizado
                axios
                    .post(apiUrl + "auth/signin", dataUser)
                    .then((res) => {
                        console.log(res);
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("user", JSON.stringify(res.data.user));
                        Swal.fire({
                            title: "User created succesfully, welcome!",
                            icon: "success",
                            showConfirmButton: true,
                            confirmButtonText: "OK",
                            allowOutsideClick: false
                        });
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err.response.data.message);
                        Swal.fire(`${err.response.data.message}`);
                    });
            })
            .catch((err) => {
                console.log(err.response.data.message);
                Swal.fire(`${err.response.data.message}`);
            });
    };


    return (
        <div className="flex">
            <img src="/public/images/pexels-aleksandar-pasaric-2339009 1.png" className="w-[70%] h-screen object-cover hidden md:block" alt="" />
            <div className="bg-white w-full md:w-[30%] py-10 md:py-0 flex flex-col justify-center items-center">
                <img src="/public/images/Logo 2 1.png" className="h-[3rem]" alt="" />
                <div className="flex flex-col items-center mt-6">
                    <h2 className="font-bold text-center text-3xl/[39px]">Welcome!</h2>
                    <span className="text-center text-xs px-10 py-4">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</span>
                    <form encType="multipart/form-data" className="flex flex-col w-[75%]">
                        <label htmlFor="name" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Name</label>
                        <input type="text" name="name" id="name" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" ref={name} />
                        <label htmlFor="email" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Email</label>
                        <input type="email" name="email" id="email" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" ref={email} />
                        <label htmlFor="photo" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Photo</label>
                        <input type="url" name="photo" id="photo" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" /* ref={photo} */ />
                        
                        <input ref={photo} autoComplete="off" className="text-[4px] px-[5px] hidden text-black font-montserrat font-[500] outline-none" type="file" name="photo" id="upload" />
                        <label className="bg-black hover:bg-[#222222d8] text-white cursor-pointer duration-100 flex items-center justify-center font-[600] w-[9rem] h-[1.6rem] text-sm rounded-[0_0_4px_4px]" htmlFor="upload">Upload Image<AiOutlineUpload className="text-lg ml-2" /></label>
           
                        <label htmlFor="password" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Password</label>
                        <input type="password" name="password" id="password" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" ref={password} />
                        <label htmlFor="notification" className="text-xs"><input type="checkbox" name="notification" id="notification" className="mt-4 text-xs" ref={notifications} /> Send notification to my email</label>
                        <input type="submit" value="Sign Up" className="bg-gradient-to-r from-[#434343]  to-black  text-white rounded-lg py-3 text-sm my-3" onClick={handleForm} />
                    </form>
                    <button className="flex border w-[75%] py-3 rounded-lg border-[#1f1f1f78] justify-center ">
                        <img src="/public/images/Google.png" alt="" /><span>Sign up with Google</span>
                    </button>
                    <div className="flex flex-col items-center">
                        {props.setShow ? (
                            <span className="w-[75%] text-xs mt-4">Already have an account? <span onClick={() => props.setShow(true)} className="cursor-pointer text-red-600 font-bold">Log in</span></span>
                        ) : (
                            <Anchor to="/login" className="w-[75%] text-xs mt-4">Already have an account? <span className="cursor-pointer text-red-600 font-bold">Sig in</span></Anchor>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

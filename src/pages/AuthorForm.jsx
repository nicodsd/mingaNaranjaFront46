import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import apiUrl from '../../api'
import { useNavigate } from 'react-router-dom';
import { AiOutlineUpload } from "react-icons/ai"

export default function AuthorForm() {
    let user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate();

    const [$currentDate, setCurrentDate] = useState('');
    const name = useRef(null);
    const last_name = useRef(null);
    const cityCountry = useRef(null);
    const date = useRef(null);
    const photo = useRef(null);

    useEffect(() => {
        const inputDate = document.querySelector('#date-input');
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        setCurrentDate(new Date().toLocaleDateString('en-GB', options));
        inputDate.value = $currentDate;
    }, []);


    function handleForm(e) {
        e.preventDefault();
        const cityCountryValue = cityCountry.current.value;
        const [city, country] = cityCountryValue.includes(",") ? cityCountryValue.split(",").map(value => value.trim()) : ["", ""];

        let inputName = name.current.value
        let inputLastName = last_name.current.value
        let inputCity = city.trim()
        let inputCountry = country.trim()
        let inputPhoto = photo.current.files[0]

        const formData = new FormData();
        formData.append('name', inputName);
        formData.append('last_name', inputLastName);
        formData.append('country', inputCountry);
        formData.append('city', inputCity);
        formData.append('photo', inputPhoto);

        let token = localStorage.getItem("token")
        let headers = { headers: { "Authorization": `Bearer ${token}` } }
        axios.post(`${apiUrl}api/authors`, formData, headers)
            .then((res) => {
                console.log(res.data)
                Swal.fire({
                    title: 'Author successfully created',
                    icon: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'Go to homepage',
                    allowOutsideClick: false,
                }).then(() => {
                    navigate('/');
                });
            })
            .catch(err => {
                const joi = err.response.data.message
                console.log(err.response.data.message)
                Swal.fire(`${joi}`)
            })
    }

    return (
        <form onSubmit={handleForm} encType="multipart/form-data" className='h-screen bg-black flex flex-col items-center justify-center'>
            <img
                className="rounded-full object-cover object-center h-16 w-16"
                src={user.photo}
                alt="user avatar"
            />
            <div className='flex flex-col justify-center w-[50%] sm:w-[30%] text-white font-montserrat font-normal	text-base'>
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Insert name" ref={name} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Insert last name" ref={last_name} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="City, country" ref={cityCountry} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder={$currentDate} readOnly id="date-input" ref={date} />

                <input ref={photo} className="text-[4px] px-[5px] hidden text-black font-montserrat font-[500] outline-none" type="file" name="photo" id="upload" />
                <label className="bg-black hover:bg-[#222222d8] text-white cursor-pointer duration-100 flex items-center justify-center font-[600] w-[9rem] h-[1.6rem] text-sm rounded-[0_0_4px_4px]" htmlFor="upload">Upload Image<AiOutlineUpload className="text-lg ml-2" /></label>

                <button className=" p-2 mb-4 bg-white text-black rounded-md font-bold text-2xl my-4" type="submit">Send</button>
            </div>
        </form>
    );

}

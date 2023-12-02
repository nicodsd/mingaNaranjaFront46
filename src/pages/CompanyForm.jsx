import axios from 'axios';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import apiUrl from '../../api'
import { useNavigate } from 'react-router-dom';
import { AiOutlineUpload } from "react-icons/ai"

export default function CompanyForm() {
    let user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate();
    const name = useRef(null);
    const website = useRef(null);
    const logo = useRef(null);
    const description = useRef(null);

    function handleForm(e) {
        e.preventDefault()

        let inputName = name.current.value
        let inputWebsite = website.current.value
        let inputLogo = logo.current.files[0]
        let inputDescription = description.current.value

        const formData = new FormData()
        formData.append('name', inputName)
        formData.append('website', inputWebsite)
        formData.append('logo', inputLogo)
        formData.append('description', inputDescription)

        let token = localStorage.getItem("token")
        let headers = { headers: { "Authorization": `Bearer ${token}` } }
        axios.post(`${apiUrl}api/companies`, formData, headers)
            .then((res) => {
                console.log(res.data)
                Swal.fire({
                    title: 'Company successfully created',
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
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Name" ref={name} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="url" placeholder="Website" ref={website} />

                <input ref={logo} className="text-[4px] px-[5px] hidden text-black font-montserrat font-[500] outline-none" type="file" name="photo" id="upload" />
                <label className="bg-black hover:bg-[#222222d8] text-white cursor-pointer duration-100 flex items-center justify-center font-[600] w-[9rem] h-[1.6rem] text-sm rounded-[0_0_4px_4px]" htmlFor="upload">Upload Image<AiOutlineUpload className="text-lg ml-2" /></label>

                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Description" ref={description} />
                <button className=" p-2 mb-4 bg-white text-black rounded-md font-bold text-2xl my-4" type="submit">Send</button>
            </div>
        </form>
    );
}
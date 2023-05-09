import { useState, useEffect } from "react"
import axios from "axios"
import apiUrl from "../../api"


export default function Carrousel() {
    useEffect(
        () => { axios(apiUrl + 'resources').then(res => setImages(res.data.resources)).catch(err => console.log(err)) },
        [] //array de dependencia vacio ya que necesitamos fetchear una unica vez al montarse el componente
    )
    let [images, setImages] = useState([])

    let [counter, setCounter] = useState(0)
    let sumar = () => {
        setCounter(counter + 1)
        if (counter === images.length - 1) {
            setCounter(0)
        }
    }
    let restar = () => {
        setCounter(counter - 1)
        if (counter === 0) {
            setCounter(images.length - 1)
        }
    }
    return (
        <div className="flex justify-center lg:justify-start">
            <svg onClick={restar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="bi bi-arrow-bar-left w-0 lg:w-5">
                <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
            </svg>

            <div className='transition ease-in-out duration-300 lg:mx-8 md:object-none absolute lg:relative z-1'>
                <img className="lg:w-[30rem]" src={images[counter]?.cover_photo} alt={images[counter]?.name} />
            </div>

            <svg onClick={sumar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="bi bi-arrow-bar-right w-0 lg:w-5">
                <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
        </div>

    )
}


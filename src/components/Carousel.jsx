import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';

export default function Carousel() {
    useEffect(
        () => {
            axios(apiUrl + 'carousels').then(res => setImages(res.data.carousels)).catch(err => console.log(err))
        },
        [] //array vacio, ya que necesitamos fetchear una sola vez al montar el componente
    )

    let [images, setImages] = useState([])
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        // Cambiar de imagen cada 4 segundos
        const interval = setInterval(() => {
            setCounter(prevCounter => (prevCounter + 1) % images.length);
        }, 4000);
        return () => {
            clearInterval(interval); // Limpiar el intervalo al desmontar el componente
        };
    }, [images]);

    return (
        <div>
            <img className="hidden sm:flex h-full w-full lg:w-[30rem] filter brightness-50 md:filter md:brightness-50" src={images[counter]?.cover_photo} alt="" />
        </div>
    )
}
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SwitchButton({ setIsOn, id, dispatch, saveMangas, switchOn, headers, apiUrl }) {
    const [mangas, setMangas] = useState([]);
    useEffect(() => {
        axios
            .get(`${apiUrl}mangas/authors/${id}`, headers)
            .then((response) => {
                setMangas(response.data.response);
                /* console.log(response.data.response); */
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    if (mangas.length <= 4) {
        return null;
    }

    const handleToggle = () => {
        setIsOn(!switchOn);
        dispatch(saveMangas({ switchOn: !switchOn }));
    };

    return (
        <div className="flex items-center pt-2">
            <a className="text-sm px-2 py-1 rounded-md ml-1">New</a>
            <div className="flex items-center justify-between w-12 h-6 bg-[#12B28C] rounded-full p-0.5">
                <div
                    className={`cursor-pointer w-[50%] h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${switchOn ? "translate-x-5" : ""
                        }`}
                    onClick={handleToggle}
                    defaultValue={switchOn}
                />
            </div>
            <a className="text-sm px-2 py-1 rounded-md ml-1">Old</a>
        </div>
    );
}

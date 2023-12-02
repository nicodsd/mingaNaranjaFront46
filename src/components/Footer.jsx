import React from "react";
import { Link } from 'react-router-dom';

import imgFooter from "../assets/images/Footer.png";
import logoFooter from "../assets/images/Logo.png";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    return (
        <footer className="bg-transparent text-white relative z-20">
            <img
                className="w-[100vw] rounded-[100%_100%_100%_100%/_0%_0%_100%_100%]"
                src={imgFooter}
                alt="Footer"
            />
            <div className="bg-black h-auto flex flex-col sm:flex-row justify-center items-center py-12 gap-4">
                <div className="w-[30%] flex justify-evenly items-center px-10">
                    <Link to="/" onClick={scrollToTop}
                        className="mx-[0.5rem] md:m-0 font-poppins text-base font-normal"
                    >
                        Home
                    </Link>
                    <Link to="/mangas/:pages" onClick={scrollToTop}
                        className="mx-[0.5rem] md:m-0 font-poppins text-base font-normal"
                    >
                        Mangas
                    </Link>
                </div>
                <div className="w-[30%] flex justify-center items-center">
                    <Link to="/" onClick={scrollToTop}>
                        <img
                            className="h-[5.5vh]"
                            src={logoFooter}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="w-[50%] md:w-[30%] flex justify-center items-center flex-col">
                    <div className="w-[100%] mb-2 md:mb-4 sm:w-[50%] flex justify-between">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            title="Facebook"
                            className="flex items-center justify-center rounded-full fill-white"
                        >
                            {/* Icono de Facebook */}
                        </a>
                        {/* Resto de enlaces */}
                    </div>
                    <Link to="/donation"
                        className="w-full sm:w-1/2 bg-white rounded-[5px] text-black rounded-4px p-3 flex justify-center 
                        hover:bg-[#0e0d0d] hover:text-white transition duration-200"
                        onClick={scrollToTop}
                    >
                        Donate
                        {/* Icono de Donate */}
                    </Link>
                </div>
            </div>
        </footer>
    );
}

import React from 'react'
import { Link as Anchor } from "react-router-dom";

export default function MangaAuthor({ mangas }) {
    /* mangas.map((manga) => (
        console.log(manga._id)
    )) */
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2'>
            {mangas.map((manga) => (
                <div className='flex flex-col items-center' key={manga.title}>
                    <Anchor to={`/manga/${manga._id}`}>
                        <img
                            className="rounded-xl h-40 w-[8rem] sm:h-[15rem] sm:w-[9rem] object-cover hover:shadow-lg hover:opacity-50 cursor-pointer"
                            src={manga.cover_photo}
                            alt={manga.title}
                        />
                    </Anchor>
                    <div >
                        <p className="my-2 text-white font-montserrat font-normal text-lg leading-5 w-[8rem]">
                            {manga.title}
                        </p>
                    </div>
                </div>
            ))}
            {mangas.length < 4 && Array.from({ length: 4 - mangas.length }).map((_, index) => (
                <div className='flex flex-col items-center' key={index}>
                    <div className='rounded-xl h-40 w-[8rem] bg-gray-500 sm:h-[15rem] sm:w-[9rem] hover:opacity-50 cursor-pointer' />
                    <div >
                        <p className="my-2 text-white font-montserrat font-normal text-lg leading-5 w-[8rem]">
                            Coming soon
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

import React from 'react';
import { Link as Anchor } from 'react-router-dom'

export default function NewRole() {
    return (
        <div className="flex h-screen">
            <div className="bg-white w-full sm:w-1/2 flex justify-center items-center flex-col gap-4">
                <p className='font-montserrat font-normal text-xl '>Change role to</p>
                <img src="/public/images/Logo 2 1.png" className="h-[6vh] my-2" alt="background" />
                <Anchor to="/author-form" className='w-[70%] flex justify-center'>
                    <label htmlFor="author" className="w-full cursor-pointer text-center border-2 border-black/25 rounded-lg | md:flex md:justify-center | lg:justify-between lg:text-start active:border-3 active:border-black">
                        <div className="flex">
                            <img src="/public/images/roleAuthor.png" className="lg:inline-block w-20 h-9 self-center m-2" />
                            <div className="m-2">
                                <h1 className="font-bold">Join as an Author!</h1>
                                <p className="text-sm text-slate-500">I'm a reader writting a manga</p>
                            </div>
                        </div>
                    </label>
                </Anchor>
                <Anchor to="/company-form" className='w-[70%] flex justify-center'>
                    <label htmlFor="company" className="w-full cursor-pointer text-center border-2 border-black/25 rounded-lg | md:flex md:justify-center | lg:justify-between lg:text-start active:border-3 active:border-black">
                        <div className="flex">
                            <img src="/public/images/roleCompany.png" className="lg:inline-block w-20 h-9 self-center m-2" />
                            <div className="m-2">
                                <h1 className="font-bold">Join as an Company!</h1>
                                <p className="text-sm text-slate-500">I'm a company and i want to publish my comics</p>
                            </div>
                        </div>
                    </label>
                </Anchor>
            </div>
            <div className='hidden sm:flex sm:flex-col h-screen w-1/2 bg-[url(images/bg-new-role.png)] bg-no-repeat bg-center bg-cover'>
                <p className='text-white font-montserrat font-medium text-2xl leading-7	mt-[15vh] px-[10%]'>Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.</p>
                <p className='text-white font-montserrat font-normal text-base leading-5 mt-[15vh] px-[10%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                    Ignacio Borraz
                </p>

            </div>
        </div>
    )
}

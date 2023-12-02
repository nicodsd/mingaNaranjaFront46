import React from 'react'

export default function ButtonWelcome() {
    return (

            <div className='bg-[#ffffff2a] rounded-[5px] mt-4 p-2 flex items-center border-[1px] border-[#ffffff1e] w-[18rem] lg:w-full h-11 lg:bg-[#ffffff1e]'>    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-7 h-7 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                <p className=' text-[17px] lg:text-[15px] lg:font-thin w-[14rem] lg:w-[20rem] text-[#ffffffea]'>Search</p>
            </div>
            
    )
}

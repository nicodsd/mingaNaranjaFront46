import Carrousel from '../components/Carrousel'

export default function index({ title, subtitle, paraf, search}) {
    return (
        <div>
            <div className='lg:w-full lg:h-[1px]' style={{ backgroundImage: 'linear-gradient(to right, #000, #ffffff40, #000)' }}></div>

            <main className='text-white w-[200rem] h-screen lg:flex lg:flex-col lg:items-center bg-no-repeat bg-center'>
                <h1 className='lg:text-[3.1rem] lg:h-[7rem] flex items-center absolute lg:relative text-black lg:text-white titleMon'>{title}</h1>
                <div className='lg:bg-[#615bff56] absolute right-0 w-[30rem] rounded-[50%] h-[30rem] blur-[9rem] z-0'></div>
                <div className='lg:w-full lg:flex lg:items-center lg:justify-around'>
                    <Carrousel />
                    <div className='w-full lg:w-0 h-full lg:h-0 bg-black lg:bg-transparent absolute opacity-80 z-2'></div>
                    <div className='flex flex-col items-center lg:items-start z-0 w-full lg:w-[24rem] p-3 sm:px-[10rem] lg:px-0 lg:pb-[18rem] absolute lg:relative z-3'>
                        <h1 id='text-home' className='text-[2.5rem] text-center lg:text-start lg:text-[2.4rem] mt-[7rem] lg:mt-0 mb-[1rem]'>{subtitle}</h1>
                        <p id='paraf' className='text-center text-sm p-[.4rem] lg:text-start lg:p-0 lg:w-[80%] lg:text-[12px]'>{paraf}</p>
                        <div className='w-[18rem] lg:w-full backdrop-blur-[4px] mt-5'>
                            <button className='bg-[#ffffff2a] rounded-[5px] p-2 flex items-center border-[1px] border-[#ffffff1a] w-[18rem] lg:w-full h-11 lg:bg-[#ffffff0f]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <p className='text-white text-[17px] lg:text-[15px] lg:font-thin w-[14rem] lg:w-[20rem] lg:text-[#d1d1d1]'>{search}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

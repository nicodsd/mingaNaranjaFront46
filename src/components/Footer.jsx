
export default function Footer() {
    return (
        <footer className='h-[15rem] md:h-[19rem] lg:h-[39rem] w-full relative'>
            <img className='rounded-b-[50%] w-full' src="./src/assets/images/Footer.png" alt="" />
            <div className='flex justify-center items-center h-[3rem] lg:h-[12rem]'>
                <div className='w-full mt-8 lg:w-[60rem] lg:mt-[6rem] flex items-center justify-around lg:justify-between lg:border-b-[1px] lg:border-[#ffffff40]'>
                    <div className='text-white text-[10px] w-[6rem] lg:w-[9rem] flex justify-between'>
                        <a className='font-semibold' href="_blank">Home</a>
                        <a className='font-semibold' href="_blank">Mangas</a>
                    </div>
                    <img className='h-[1.5rem] lg:h-12' src="./src/assets/images/logos/logo21.png" alt="" />
                    <div className='h-[3.5rem] lg:h-[6.5rem] flex flex-col justify-around'>
                        <div className='w-full gap-1 lg:w-[13rem] flex justify-center lg:gap-[2.3rem]'>
                            <img className='w-[18px] h-[18px] lg:w-[1.4rem] lg:h-[1.4rem]' src="./src/assets/images/icons/Facebook.png" alt="" />
                            <img className='w-[22px] h-[18px] lg:w-[30px] lg:h-[1.2rem]' src="./src/assets/images/icons/Twitter.png" alt="" />
                            <img className='w-[22px] h-[18px] lg:w-[30px] lg:h-[1.2rem]' src="./src/assets/images/icons/Vimeo.png" alt="" />
                            <img className='w-[22px] h-[18px] lg:w-[35px] lg:h-[1.2rem]' src="./src/assets/images/icons/Youtube.png " alt="" />
                        </div>
                        <button className='bg-white w-full h-[1.5rem] lg:w-[13rem] lg:h-[2.6rem] rounded-[5px] flex justify-center items-center'>
                            <p className='font-semibold text-[4px] lg:text-[15px]'>Donate</p>
                            <img className='h-[13px] ml-1 lg:ml-4' src="./src/assets/images/icons/Union.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

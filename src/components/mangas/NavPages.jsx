
function NavPages(props) {

    const {
        prevPage,
        nextPage,
        currentPage,
        AiOutlineArrowLeft,
        mangas,
        AiOutlineArrowRight
    } = props

    return (
        <>
            <div className="flex w-full md:w-[95%] lg:w-[82%] justify-evenly md:justify-between my-6 md:my-[2.4rem]">
                {currentPage > 1 ? (
                    <button onClick={prevPage} className="bg-white text-[0px] w-[3rem] h-4 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md text-black"><span> <AiOutlineArrowLeft className="text-[0.8rem]" /></span></button>
                ) : <button className="text-[0px] w-[3rem] h-4 opacity-50 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md bg-[#9d9d9d]" disabled><span> <AiOutlineArrowLeft className="text-[0.8rem]" /></span></button>}
                {mangas && mangas.length > 7 ? (
                    <button onClick={nextPage} className="bg-white text-[0px] w-[3rem] h-4 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md text-black"><span> <AiOutlineArrowRight className="text-[0.8rem]" /></span></button>
                ) : <button className="text-[0px] w-[3rem] h-4 opacity-50 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md bg-[#9d9d9d]" disabled><span> <AiOutlineArrowRight className="text-[0.8rem] md:text-sm" /></span></button>}
            </div>
        </>
    )
}

export default NavPages
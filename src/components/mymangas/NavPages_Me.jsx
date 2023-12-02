
function NavPages_Me() {

    const {
        prevPage,
        nextPage,
        currentPage,
        AiOutlineArrowLeft,
        mangas_me,
        AiOutlineArrowRight
    } = props

    return (
        <>
            <div className="flex w-full md:w-[95%] lg:w-[75%] justify-evenly md:justify-between my-6 md:my-[2.4rem]">
                {currentPage > 1 ? (
                    <button onClick={prevPage} className="bg-[#ca2828] text-[0px] w-[3rem] h-4 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md text-white"><span> <AiOutlineArrowLeft className="text-[0.8rem]" /></span></button>
                ) : <button className="text-[0px] w-[3rem] h-4 opacity-50 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md bg-[#402222]" disabled><span> <AiOutlineArrowLeft className="text-[0.8rem]" /></span></button>}
                {mangas_me && mangas_me.length >= 6 ? (
                    <button onClick={nextPage} className="bg-[#ca2828] text-[0px] w-[3rem] h-4 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md text-white"><span> <AiOutlineArrowRight className="text-[0.8rem]" /></span></button>
                ) : <button className="text-[0px] w-[3rem] h-4 opacity-50 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md bg-[#402222]" disabled><span> <AiOutlineArrowRight className="text-[0.8rem] md:text-sm" /></span></button>}
            </div>
        </>
    )
}

export default NavPages_Me
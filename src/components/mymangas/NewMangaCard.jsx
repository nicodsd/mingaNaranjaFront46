import { Link as Anchor } from "react-router-dom"
import { AiFillPlusCircle } from "react-icons/ai";

function NewMangaCard() {
    return (
        <>      
            <Anchor to={'/manga-form'} key="-1" className="relative h-[8rem] lg:h-[19rem] w-[6rem] z-10 rounded-md lg:w-[12rem]">
                <div className="bg-[#52525228] duration-300 ease-in-out h-full w-full absolute z-0 rounded-md"></div>
                <div className=" w-full h-full flex flex-col items-center justify-center duration-100 ease-in-out hover:text-[#ff3b3b] animate-pulse hover:animate-none z-1 absolute">
                    <AiFillPlusCircle className="w-[40%] h-[30%]" />
                    <p className="text-[2px] font-[200] cursor-pointer sm:font-[700] sm:text-sm md:text-lg"> New Manga </p>
                </div>
            </Anchor>
        </>
    )
}

export default NewMangaCard
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import mangaNoFound from '../../assets/images/R.png'
import mangas_actions from '../../redux/actions/mangaGet_Me'

function MangaCard_Me(props) {

    const {
        cates,
        title,
        openModalEdit,
        deleteShowAlert,
        setElementId
    } = props

    const mangas_me = useSelector(store => store.mangasGetMe_reducer.mangas_me)
    const imageMangaNoFound = <img className="w-[10rem] absolute right-100 bottom-52" src={mangaNoFound} alt="mangaNofound" />
    const navigate = useNavigate()

    // ROUTES >>>>>>>>>>>>>>>>>>>>><><><>
    const editChapter = (id) => {
        navigate(`/edit/${id}`)
    }
    const moreChapter = (id) => {
        navigate(`/chapter-form/${id}`)
    }
    const handleMangaDetails = (mangaId) => {
        mangaDetails(mangaId)
    }
    const mangaDetails = (id) => {
        navigate(`/manga/${id}`)
    }
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>><><><>

    return (
        <>
            {mangas_me.length > 0 ? mangas_me.map((eachManga, index) => (
                <div key={index} className="h-full w-[26vw] md:w-[10rem] z-10 lg:w-[12rem] text-[#979797] rounded-md hover:drop-shadow-[0_0_100px_rgba(250,0,0,0.5)] hover:text-white hover:font-bold md:h-[16rem] lg:h-[21rem] lg:min-h-[21rem] flex-col flex justify-between hover:scale-[1.05] hover:-translate duration-100 ease-in">
                    <img className="sm:h-[3rem] h-[8rem] relative z-1 cursor-pointer md:h-[14rem] lg:h-[19rem] object-cover rounded-md" src={eachManga.cover_photo} alt={eachManga.title} />
                    <p onClick={() => handleMangaDetails(eachManga._id)} className="text-[2px] font-[200] cursor-pointer sm:font-[300] sm:text-sm md:text-md">{eachManga.title}</p>
                    <div className="w-[22vw] md:w-[10rem] lg:w-[12rem] md:h-[14rem] lg:h-[19.06rem] sm:h-[3rem] h-[8rem] flex flex-col items-center justify-between absolute z-10 border-[1.5px] border-transparent hover:border-[#ff0606] rounded-md hover:shadow-[0_5px_0px_rgba(250,0,0,0.3)] ease-in">

                        <div className="relative z-4 h-[2rem] w-full flex justify-end p-[5px] text-[#ffffff] drop-shadow-[0_1px_1px_rgba(100,0,0,0.4)]">
                            <BsFillPatchPlusFill onClick={() => moreChapter(eachManga._id)} className="hover:text-[#ff3b3bd3] duration-100" />
                            <RiEditBoxFill onClick={() => editChapter(eachManga._id)} className="hover:text-[#ff3b3bd3] duration-100" />
                        </div>
                        <div onClick={() => handleMangaDetails(eachManga._id)} className="bg-transparent relative w-full h-full cursor-pointer"></div>
                        <div className="flex justify-evenly relative gap-2 items-center w-[60%] h-[14%] bg-[#ff3b3bd3] rounded-t-md">
                            <button onClick={() => openModalEdit(eachManga._id)} className="rounded-full text-[#ffffff] hover:text-[#ffffff80] duration-100"> <AiFillEdit className="w-5 h-5 " /> </button>
                            <button onClick={() => deleteShowAlert(eachManga._id)} className="rounded-full text-[#ffffff] hover:text-[#ffffff80] duration-100"> <AiFillDelete className="w-5 h-5 " /> </button>
                        </div>

                    </div>
                </div>
            )) : <div className="flex relative items-center justify-center w-screen">
                {imageMangaNoFound}
                <p className="text-[#ffffff] relative text-4xl bottom-52  font-black">¡Ups! No Mangas found</p>
            </div>}
        </>
    )
}

export default MangaCard_Me
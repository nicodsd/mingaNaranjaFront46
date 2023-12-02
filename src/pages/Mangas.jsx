import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import actions from '../redux/actions/mangasCards'
import mangas_actions from '../redux/actions/mangasGet'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import mangaNoFound from '../assets/images/R.png'
import CategoriesList from "../components/CategoriesList"
import NavPages from "../components/mangas/NavPages"
import MangaCard from "../components/mangas/MangaCard"
import ScrollTop from "../components/ScrollTop"
import BrowserMangas from "../components/BrowserMangas"
//import BrowserMangas from "../components/BrowserMangas.jsx";
//import MangaCard from "../components/MangaCard.jsx";
const { pageMangasCards } = actions
const { read_mangas, read_categories } = mangas_actions

function Mangas() {

    const imageMangaNoFound = <img className="w-[10rem] absolute right-100 bottom-52" src={mangaNoFound} alt="mangaNofound" />
    const mangas = useSelector(store => store.mangasGet_reducer.mangas)
    const categories = useSelector(store => store.mangasGet_reducer.categories)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title, setTitleValue] = useState('')
    const [cates, setCates] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const dispatchBroser = (e) => {
        setTitleValue(e.target.value)
        captureText()
    }
    function captureText() {
        dispatch(pageMangasCards({
            title,
            page: currentPage,
        }))
    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            navigate(`/mangas/${currentPage - 1}`)
        }
        captureText()
    }
    const nextPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage + 1);
            navigate(`/mangas/${currentPage + 1}`)
        }
        captureText()
    }

    function setCats(ids) {
        if (!cates.includes(ids)) {
            setCates([...cates, ids])
        } else {
            const filteredCategories = cates.filter((e) => e !== ids)
            setCates(filteredCategories)
        }
    }

    useEffect(
        () => {
            dispatch(read_mangas({ title: title || "", cates, currentPage }))
        },
        [cates, currentPage, title]
    )

    useEffect(
        () => {
            if (categories.length === 0) {
                dispatch(read_categories())
            }
        },
        []
    )

    return (
        <>
            <ScrollTop />
            <div className="md:right-1 md:bottom-[-10rem] md:opacity-60 z-0 md:h-[60%] md:w-[50%] md:absolute rounded-full md:bg-gradient-to-r from-black to-indigo-800 animate-pulse-md md:blur-[115px]"></div>
            <div className="text-white z-1 flex items-start w-full md:min-h-screen">
                <div className="w-[25%] md:w-[20%] lg:w-[15%] h-[79vw] flex items-start pt-[13rem] justify-center">
                    <div className="flex-col flex gap-3 md:gap-10">
                        <h3 className="text-[4px] font-light md:text-xl">Categories</h3>
                        <div className="h-full md:h-full text-[3px] md:text-sm flex-col flex gap-1 md:gap-3">
                            <CategoriesList categories={categories} cates={cates} setCats={setCats} />
                        </div>
                    </div>
                </div>
                <div className="w-[80%] flex flex-col lg:min-h-[83vw] md:w-[80%] lg:w-[80%] lg:ml-10 mt-4">
                    <h1 className="md:text-[2rem] md:mt-16 md:mb-[3rem]">Search your next manga <span className="drop-shadow-[0_0_30px_rgba(256,150,0,1)] animate-pulse">🤤</span></h1>
                    <BrowserMangas title={title} setTitleValue={(e)=>dispatchBroser(e)} captureText={captureText} />
                    <div className="md:w-full lg:w-[90%] flex flex-wrap gap-2 md:gap-7 md:mr-2 w-full min-h-[16rem] md:min-h-[34rem] lg:min-h-[60vw] xl:min-h-[54vw]">
                        <MangaCard mangas={mangas} imageMangaNoFound={imageMangaNoFound} />
                    </div>
                    <NavPages prevPage={prevPage} mangas={mangas} nextPage={nextPage} currentPage={currentPage} AiOutlineArrowLeft={AiOutlineArrowLeft} AiOutlineArrowRight={AiOutlineArrowRight} />
                </div>
            </div>
        </>
    )
}

export default Mangas
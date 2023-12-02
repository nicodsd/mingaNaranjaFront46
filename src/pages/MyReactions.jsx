import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BrowserMangas from '../components/BrowserMangas.jsx'
import { BiSortZA, BiSortAZ } from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux"
import categories_actions from '../redux/actions/mangasGet'
import reactions_actions from '../redux/actions/reactionsLD_action.js'
import CategoriesListHorizontal from "../components/CategoriesListHorizontal.jsx"


function MyReactions() {

  const [title, setTitleValue] = useState('');
  const [isSort, setIsSort] = useState(false)
  const [sort, setSort] = useState(false)
  const [cates, setCates] = useState([])
  const [order, setOrder] = useState(-1)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { read_categories } = categories_actions
  const { read_reactionsFav } = reactions_actions
  const categories = useSelector(store => store.mangasGet_reducer.categories)
  const reactions = useSelector(store => store.reactionLD.reaction)

  function SORT(boolean) {
    if (sort == false) {
      setSort(true)
      setIsSort(!isSort)
      return setOrder(1)
    }
    if (boolean == true) {
      setSort(false)
      setIsSort(!isSort)
      return setOrder(-1)
    }
  }

  function setCats(ids) {
    if (!cates.includes(ids)) {
      setCates([...cates, ids])
    } else {
      const filteredCategories = cates.filter((e) => e !== ids)
      setCates(filteredCategories)
    }
  }

  const mangaDetail = (id) => {
    navigate(`/manga/${id}`);
  };

  useEffect(() => {
    dispatch(read_reactionsFav({ title: title || "", cates, order }))
      .then((res) => {
        console.log(res.data.reaction);
      })
      .catch(err => {
        console.log(err);
      });
  }, [sort, cates, title]);

  useEffect(
    () => {
      if (categories.length == 0) {
        dispatch(read_categories())
      }
    },
    []
  )

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="md:right-1 md:bottom-[-2rem] md:opacity-60 z-0 md:h-[60%] md:w-[50%] md:absolute rounded-full md:bg-gradient-to-r from-black to-indigo-700 animate-pulse-md md:blur-[115px]"></div>
        <div className="flex text-white w-full h-full flex-col items-center relative">
          <h1 className="mt-[6rem] text-2xl md:mb-5 md:text-[2rem]">Favourites</h1>
          <BrowserMangas title={title} setTitleValue={(e)=>setTitleValue(e.target.value)} />
          <div className="flex flex-col w-full h-full items-center">
            <div className="flex w-[80%] items-center mb-[2rem] justify-center md:mb-[3rem]">
              <div className="md:w-[38%]">
                {!categories.length == 0 ? <CategoriesListHorizontal categories={categories} cates={cates} setCats={setCats} />
                  : <p className="text-[#9d9d9d]">No categories found!</p>
                }
              </div>
              <div className="flex text-xs">
                {isSort ?
                  <div onClick={() => SORT(true)} className="flex w-[6.7rem] md:w-[8rem] h-6 pr-1 md:pr-3 bg-[#ff3b3bd3] rounded-md text-lg items-center md:justify-between cursor-pointer">
                    <BiSortAZ className="bg-gradient-to-l from-[#a3a3a3be] to-transparent w-6 md:w-7 h-full rounded-md rounded-r-xl" />
                    <p className="text-sm p-1">Ascending</p>
                  </div>
                  :
                  <div onClick={() => SORT(true)} className="flex w-[6.7rem] md:w-[8rem] h-6 pr-1 md:pr-3 bg-[#585858] rounded-md text-lg items-center justify-between cursor-pointer">
                    <BiSortZA className="bg-gradient-to-l from-[#a3a3a3be] to-transparent w-6 md:w-7 h-full rounded-md rounded-r-xl" />
                    <p className="text-sm">Descending</p>
                  </div>}
              </div>
            </div>

            <div className="gap-2 px-2 md:gap-[1.5rem] flex items-center flex-col w-full mb-[5rem]">

              {reactions?.length > 0 ? reactions.map((eachReaction, index) => (
                <div
                  onClick={() => mangaDetail(eachReaction.manga_id)}
                  className="flex w-full md:w-[60%] hover:border-[3px] hover:border-[#ffffff] justify-between cursor-pointer text-sm text-white md:rounded-md h-[6rem] md:h-[7.5rem] drop-shadow-[0_0_6px_rgba(250,250,250,)] md:hover:scale-[1.05] md:hover:-translate duration-100 ease-in-out"
                  key={index}
                  style={{
                    backgroundImage: 'linear-gradient(to left, rgba(250, 250, 250, 0.3), rgba(0, 0, 0, 1)), url(' + eachReaction.cover_photo + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                >
                  <div className="w-[70%] ml-3 h-full md:w-full flex flex-col justify-center">
                    <h2 className="text-3xl md:text-[3rem] font-bold">{eachReaction.title}</h2>
                  </div>
                  <img className="h-full max-w-[19%] md:max-w-[10%] object-cover shadow-[-17px_0_30px_-10px_rgba(0,0,50,0.6)] rounded-r-lg" src={eachReaction.cover_photo} alt="" />
                </div>
              )) : null}


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyReactions
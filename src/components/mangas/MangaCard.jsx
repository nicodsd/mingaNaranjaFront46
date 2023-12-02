import { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike, AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import reactions from "../../redux/actions/reactionsLD_action"
const { post_reactions, read_reactions } = reactions

function MangaCard(props) {

  const { mangas, imageMangaNoFound } = props;
  const [mangaID, setMangaID] = useState(null)
  const [react, setReact] = useState(false)

  const dispatch = useDispatch()
  const reactions = useSelector(store => store.reactionLD.reaction)
  console.log(reactions)

  const sendReaction = (id, title, categories, reaction, photo) => {
    const data = {
      category_id: categories,
      title: title,
      name: reaction,
      manga_id: id,
      cover_photo: photo
    }

    dispatch(post_reactions(data))
      .unwrap()
      react(!react)
  };

  useEffect(
    () => {
      if (reactions.length === 0) {
        dispatch(read_reactions(mangaID))
      }
    },
    [react]
  )

  const navigate = useNavigate();
  const mangaDetail = (id) => {
    navigate(`/manga/${id}`);
  };

  return (
    <>
      {mangas.length > 0 ? mangas.map((eachManga, index) => (
        <div key={index} className="w-[22vw] md:w-[10rem] z-10 lg:w-[12rem] text-[#979797] hover:text-white hover:drop-shadow-[0_0_5px_rgba(250,250,250,0.4)] hover:font-bold md:h-[16rem] lg:h-[21rem] lg:min-h-[21rem] duration-50 ease-in">
          <div className="h-full relative flex-col flex justify-between hover:scale-[1.05] hover:-translate hover:drop-shadow-[0_0_90px_rgba(0,0,250,0.5)] duration-100 ease-in">
            <img
              onClick={() => mangaDetail(eachManga._id)}
              className="sm:h-[3rem] h-[8rem] md:h-[14rem] cursor-pointer md:w-[10rem] lg:w-full lg:h-[19rem] border-[1.5px] border-transparent hover:border-[#ffbb00] hover:border-[1.5px] hover:shadow-[0_4px_0px_rgba(250,250,250,0.7)] hover:drop-shadow-[0_0_10px_rgba(80,80,250,0.5)] object-cover rounded-lg duration-100 ease-in"
              src={eachManga.cover_photo}
              alt={eachManga.title}
            />
            <p className="text-[2px] w-[80%] font-[200] sm:font-[300] cursor-pointer sm:text-sm md:text-md">
              {eachManga.title}
            </p>
            <div className="flex justify-evenly z-30 items-center absolute w-[20%] h-[1.2rem] right-0 bottom-0 text-white text-[.9rem]">

              {reactions?.some(reaction => reaction?.manga_id === eachManga._id && reaction?.name == "like") ? (
                <AiTwotoneLike
                  key={index}
                  className="cursor-pointer text-[1rem] hover:scale-125"
                  onClick={() =>
                    sendReaction(
                      eachManga._id,
                      eachManga.title,
                      eachManga.category_id,
                      "like",
                      eachManga.cover_photo
                    )
                  }
                />
              ) : (
                <AiOutlineLike
                  className="text-[#ffffff8a] cursor-pointer hover:scale-125"
                  onClick={() =>
                    sendReaction(
                      eachManga._id,
                      eachManga.title,
                      eachManga.category_id,
                      "like",
                      eachManga.cover_photo
                    )
                  }
                />
              )}
              {reactions?.some(reaction => reaction?.manga_id === eachManga._id && reaction?.name == "dislike") ? (
                <AiTwotoneDislike
                  className="text-[#ff3b3b] text-[1rem] cursor-pointer hover:scale-125"
                  onClick={() =>
                    sendReaction(
                      eachManga._id,
                      eachManga.title,
                      eachManga.category_id,
                      "dislike",
                      eachManga.cover_photo
                    )
                  }
                />
              ) : (
                <AiOutlineDislike
                  className="text-[#ffffff8a] cursor-pointer hover:scale-125"
                  onClick={() =>
                    sendReaction(
                      eachManga._id,
                      eachManga.title,
                      eachManga.category_id,
                      "dislike",
                      eachManga.cover_photo
                    )
                  }
                />
              )}

            </div>
          </div>
        </div>
      )) : <div className="flex items-center justify-center w-full">
        {imageMangaNoFound}
        <p className="text-[#ffffff] relative text-4xl bottom-20  font-black">¡Ups! No Mangas found</p>
      </div>}
    </>
  )
}

export default MangaCard
import Nav from './Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import chapterDataAction from "../../src/redux/actions/chapterData"  // Es un objeto con todas las acciones que se configuraron 

const {chapterData} = chapterDataAction

export default function Page() {
  const store = useSelector(store=> console.log(store.dataChapter))
  const dispatch = useDispatch()

  const { id, page } = useParams();
  const [chapters, setChapters] = useState([]);
  const [currentPage, setPage] = useState(parseInt(page));
  const navigate = useNavigate();
  const currentChapter = chapters.findIndex((chapter) => chapter._id === id);

  useEffect(() => {
    let token = localStorage.getItem('token');
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    axios(apiUrl + `chapters/${id}/0`, headers)
      .then((res) => {
        setChapters(res.data.chapters)
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    navigate(`/chapters/${id}/${currentPage}`);
  }, [currentPage, navigate, id]);

  function handleClick(event) {
    const { clientX } = event;
    const { left, right } = event.target.getBoundingClientRect();
  
    if (clientX < (left + right) / 2) {
      // Si se hace clic en la mitad izquierda de la imagen
      if (currentPage > 0) {
        // Si no es la primera página del capítulo, retrocede una página
        setPage(currentPage - 1);
      } else {
        // Si es la primera página del capítulo
        if (currentChapter === 0) {
          // Si es el primer capítulo, redirige al enlace del manga
          const mangaId = chapters[currentChapter].manga_id;
          navigate(`/manga/${mangaId}`);
          return;
        } else {
          // Si no es el primer capítulo, retrocede al capítulo anterior
          const previousChapterIndex = currentChapter - 1;
          const previousChapterId = chapters[previousChapterIndex]._id;
          const lastPage = chapters[previousChapterIndex].pages.length - 1;
          setPage(lastPage);
          navigate(`/chapters/${previousChapterId}/${lastPage}`);
          dispatch(chapterData({
            title: chapters[previousChapterIndex].title,
            pageRef: lastPage + 1,
            _id: previousChapterId,
            manga_id: chapters[previousChapterIndex].manga_id
          }));
          return;
        }
      }
    } else {
      // Si se hace clic en la mitad derecha de la imagen
      if (currentPage === chapters[currentChapter].pages.length - 1) {
        // Si es la última página del capítulo
        if (currentChapter === chapters.length - 1) {
          // Si es el último capítulo, redirige al enlace del manga
          const mangaId = chapters[currentChapter].manga_id;
          navigate(`/manga/${mangaId}`);
          return;
        } else {
          // Si no es el último capítulo, avanza al siguiente capítulo
          const nextChapterIndex = currentChapter + 1;
          const nextChapterId = chapters[nextChapterIndex]._id;
          setPage(0);
          navigate(`/chapters/${nextChapterId}/0`);
          dispatch(chapterData({
            title: chapters[nextChapterIndex].title,
            pageRef: 1,
            _id: nextChapterId,
            manga_id: chapters[nextChapterIndex].manga_id
          }));
          return;
        }
      } else {
        // Si no es la última página del capítulo, avanza a la siguiente página
        setPage(currentPage + 1);
      }
    }
  
    // Actualiza los datos del capítulo actual en el store
    dispatch(chapterData({
      title: chapters[currentChapter].title,
      pageRef: currentPage + 1,
      _id: chapters[currentChapter]._id,
      manga_id: chapters[currentChapter].manga_id
    }));
  }
  

  return (
    <div style={{ position: 'relative' }}>
      <Nav />
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {chapters.length > 0 && currentChapter >= 0 && currentPage < chapters[currentChapter].pages.length && (
          <h1 className='text-white text-center p-4 text-lg tracking-[-0.08em]'>
            Chapter #{currentChapter + 1} - {chapters[currentChapter].title}
          </h1>
        )}
      </div>
      <div className="w-screen h-screen bg-[url('/images/Ellipse.png')] bg-cover flex flex-col items-center p-[3%] pb-20">
        {chapters.length > 0 && currentChapter >= 0 && currentPage < chapters[currentChapter].pages.length && (
          <img
            onClick={handleClick}
            src={chapters[currentChapter].pages[currentPage]}
            className="h-[100%]"
            alt=""
          />
        )}
      <div className='w-screen flex justify-end mr-[20%]'>
        {chapters.length > 0 && currentChapter >= 0 && currentPage < chapters[currentChapter].pages.length && (
          <h2 className='text-white '> {currentPage+1}/{chapters[currentChapter].pages.length} </h2>
        )}
      </div>
      </div>
    </div>
  );
}

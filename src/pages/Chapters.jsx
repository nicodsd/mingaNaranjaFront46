import React from 'react'
import pru from '../assets/images/image4.png'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { Link as Anchor, useNavigate, useParams } from "react-router-dom"
import apiUrl from '../../api.js'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'
import commentsActions from '../redux/actions/comments'
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const { read_comments, is_editing_comment, edit_comment } = commentsActions

export default function Chapters() {
  const { cover_photo, title, manga_id } = useSelector(store => store.inputManga)
  let store = useSelector(store => store.commentStore)
  console.log(store.comments)
  let dispatch = useDispatch()
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }
  let email = JSON.parse(localStorage.getItem("user"))?.email
  let photo = JSON.parse(localStorage.getItem("user"))?.photo
  let userId = JSON.parse(localStorage.getItem("user"))?.id
  console.log('Legal? ', userId)
  const searchTitle = useRef()
  const formComment = useRef()
  let [chapter, setChapters] = useState([])
  let [page, setPage] = useState(1)
  let [idChapterComment, setIdChapterComment] = useState()
  let [reload, setReload] = useState(false)
  const [modalStates, setModalStates] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(
    () => {
      if (store.comments.length === 0) {
        dispatch(read_comments())
      }
    },
    []
  )

  const handleSubmit = (id) => (event) => {
    event.preventDefault();
    console.log('Este es el ID', idChapterComment)
    const comment = formComment.current.value
    let data = {
      comment: comment,
      chapter_id: idChapterComment
    }
    const newComment = { comment };
    setComments((prevComments) => [...prevComments, newComment]);

    axios.post(apiUrl + 'api/comments', data, headers)
      .then(res => {
        dispatch(read_comments())
        console.log(res)
      })
      .catch(err => console.log(err))
    event.target.elements.comment.value = '';
    console.log('Comentario:', comment);

  };

  let handleClick = (id) => {
    console.log(id)
    setIdChapterComment(id)

    setModalStates(prevState => ({
      ...prevState,
      [id]: true,
    }));
  }
  const closeModal = (chapterId) => {
    setModalStates(prevState => ({
      ...prevState,
      [chapterId]: false, // Actualiza el estado del modal para este elemento a false
    }));
  }

  useEffect(
    () => {
      axios(apiUrl + `chapters/get?manga_id=${manga_id}&title=${searchTitle.current.value}&page=${page}&limit=${4}`)
        .then(res => {
          setChapters(res.data.response)

        })
        .catch(err => console.log(err))
    },
    [reload]
  )

  let next = () => {
    setPage(page + 1)
    setReload(!reload)

  }

  let prev = () => {
    setPage(page - 1)
    setReload(!reload)

  }

  let deleteComment = (id) => {
    console.log('por que se ejecuta esta wea')
    axios.delete(apiUrl + `api/comments/${id}`, headers)
      .then(
        res => {
          console.log('comentario elimido')
          dispatch(read_comments())
        }
      )
      .catch(err => console.log(err))
  }

  let editThisComment = (comment) => {
    console.log(comment)
    dispatch(is_editing_comment(comment))
  }

  let handleEdit = async (comment) => {
    let newComment = formComment.current.value
    console.log(newComment)
    await dispatch(edit_comment({ comment, newComment }))

    await dispatch(read_comments())
  }

  return (
    <>
      <div className='flex flex-col items-center justify-around min-h-screen'>
        <div className='container cel:w-[80%] lg:w-[90rem] h-[30rem] bg-cover bg-center' style={{ backgroundImage: `url(${cover_photo})` }}>
          <div className=' bg-[#0000007a] h-[100%]'>
            <div className='flex flex-col justify-center items-center h-full'>
              <p className='text-white text-xl'>Chapter of</p>
              <h3 className='text-white text-5xl font-bold mb-10'>{title}</h3>
              <div className="bg-[#ffffff2a] rounded-[5px] p-2 flex items-center border-[1px] border-[#ffffff1e]  lg:bg-[#ffffff1e] w-[60%]">
                <input onKeyUp={() => setReload(!reload)} ref={searchTitle} type="text" placeholder="Search..." className="bg-transparent flex-grow px-2 outline-none text-white" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l6-6m0 0l-6-6m6 6h-18" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-around items-center'>
          {page > 1 ? <svg onClick={prev} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg> : <div></div>}
          <div className='flex w-[100%] flex-wrap justify-center'>
            {chapter?.map(each => {
              const modalOpen = modalStates[each._id] || false;
              return <div className="flex flex-col justify-center" key={each._id} id="main-app-element">
                <Anchor to={`/chapters/${each._id}/${0}`}>
                  <img className="p-3 m-2 w-52 h-52 object-cover" src={each.cover_photo} alt="" />
                </Anchor>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" m-2 w-5 h-5 text-white"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClick(each._id);
                  }}>
                  <path d="M19.84 3.35A9 9 0 1 1 8.1 15.7L3 21l5.1-1.7A9 9 0 0 1 19.84 3.35z" />
                  <line x1="12" y1="19" x2="12" y2="19" />
                  <line x1="12" y1="16" x2="12" y2="16" />
                  <line x1="12" y1="12" x2="12" y2="12" />
                </svg>

                <Modal
                  isOpen={modalOpen}
                  onRequestClose={() => closeModal(each._id)}
                  contentLabel="Modal"
                  appElement={document.getElementById('main-app-element')}
                  className="fixed inset-0 flex items-center justify-center bg-transparent z-50"
                  overlayClassName="fixed inset-0 bg-black bg-opacity-50">
                  <div className="w-full h-full max-w-sm mx-auto bg-white rounded-lg shadow-lg p-4 overflow-y-auto">
                    <h2 className="text-xl font-bold mb-4">Comments</h2>
                    <form onSubmit={handleSubmit(each._id)}>
                      <div className="mb-4">
                        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
                          Comment:
                        </label>
                        <textarea
                          ref={formComment}
                          id="comment"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          rows={4}
                          placeholder='comment'
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        Enviar comentario
                      </button>
                    </form>
                    {store.comments.length !== 0 ? (
                      store.comments?.map((comment, index) => {
                        if (comment.chapter_id == each._id) {
                          return (
                            <div key={index} className="mt-4 border border-gray-600 p-4 rounded-lg">
                              <div className="flex items-center">
                                <img src={comment.photo} alt="Profile Picture" className="w-8 h-8 rounded-full mr-2" />
                                <p className="text-gray-700">{comment.email}</p>
                              </div>
                              {!comment.editing ? <p className="text-gray-700 items-center">{comment.comment}</p> :
                                <div key={index} className="mt-4 border border-gray-600 p-4 rounded-lg">
                                  <textarea
                                    ref={formComment}
                                    defaultValue={comment.comment}
                                    id="comment"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    rows={4}
                                    placeholder='comment'
                                  ></textarea>

                                  <div className="flex  mt-4">
                                    <button
                                      onClick={() => handleEdit(comment)}
                                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    >
                                      Editar
                                    </button>
                                    <button
                                      onClick={() => editThisComment(comment)}
                                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
                                    >
                                      Cancelar
                                    </button>
                                  </div>

                                </div>}
                              {!comment.editing && userId === comment.user_id &&
                              (<div className="flex mt-4">
                                <button
                                  onClick={() => editThisComment(comment)}
                                >
                                  <FiEdit className="mr-2 text-blue-700" />
                                </button>
                                <button
                                  onClick={() => deleteComment(comment._id)}
                                >
                                  <FiTrash2 className="mr-2 text-red-600" />
                                </button>
                              </div>) }
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })
                    ) : (
                      <div></div>
                    )}
                    <button
                      type="button"
                      onClick={() => closeModal(each._id)}
                      className="mt-2 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      Cerrar
                    </button>
                  </div>
                </Modal>
              </div>
            }
            )}
          </div>
          {chapter.length >= 4 ? <svg onClick={next} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg> : <div></div>}
        </div>
      </div>
    </>
  )
}

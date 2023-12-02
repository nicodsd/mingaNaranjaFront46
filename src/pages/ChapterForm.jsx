import { useRef, useState } from "react"
import axios from "axios"
import apiUrl from '../../api'
import { Link as Anchor } from "react-router-dom"
import { AiOutlineUpload } from "react-icons/ai"


export default function EditChapter() {
  let [error, setError] = useState()
  let [message, setmessage] = useState()
  let [success, setSuccess] = useState(false)

  let nameManga = useRef(null)
  let coverPhoto = useRef(null)
  let order = useRef(null)
  let pages = useRef(null)
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }

  function handleForm(e) {
    e.preventDefault()

    let inputNameManga = nameManga.current.value
    let inputCoverPhoto = coverPhoto.current.files[0]
    let inputOrder = order.current.value
    let inputPages = pages.current.value.split(',')

    const formData = new FormData()
    formData.append('title', inputNameManga)
    formData.append('cover_photo', inputCoverPhoto)
    formData.append('order', inputOrder)
    formData.append('pages', inputPages)

    axios.post(apiUrl + 'chapters/chapter-form', formData, headers)
      .then(res => {
        console.log(res)
        setSuccess(true)
      })
      .catch(err => {
        console.log(err)
        setError(err)
        const errors = err.response.data.message?.map((text, i) => {
          return <li className=" p-1 font-montserrat not-italic font-normal text-xl leading-4 m-1 text-red-500" key={i}>{text}</li>
        })
        setmessage(errors)
        console.log(err.response.data.message);
      })

  }
  let toggleError = () => {
    setError()
  }

  return (
    <>
      <div className="flex justify-evenly items-center ">
        <div className="w-1/2 h-screen flex flex-col justify-evenly items-center relative">
          <h2 className=" text-white w-[228px] h-[44px] not-italic font-normal text-4xl">New Chapter</h2>
          {error && (<div className="absolute w-[300px] h-48 bg-white flex flex-col justify-center items-center rounded-md">
            <ul className=" mt-3 flex flex-col list-disc ml-[1.5rem]">
              {message}
            </ul>
            <button onClick={toggleError} className="w-[300px] h-12 border-t-2 border-gray-600 flex justify-center items-center mt-auto mb-0 text-blue-700 font-medium" value='closed'>Closed</button>
          </div>)}
          {success && (
            <div className="absolute w-[300px] h-32 bg-white flex flex-col justify-center items-center rounded-md">
              <p className="font-bold text-green-600">Form submitted successfully!</p>
              <div className="mt-auto mb-0 flex flex-wrap justify-center items-center">
                <Anchor to={'/'} className="w-[300px] h-8 border-t-2 border-gray-600  mt-auto mb-0 text-blue-700 font-medium text-center">Return to home</Anchor>
                <button onClick={() => setSuccess(false)} className="w-[300px] h-8 border-t-2 border-gray-600  mt-auto mb-0 text-blue-700 font-medium" value='closed'>create another chapter</button>
              </div>
            </div>
          )}
          <form onSubmit={(e) => handleForm(e)} encType="multipart/form-data" className="flex flex-col w-[80%] h-[50%] items-center justify-between">
            <input type="text" placeholder="Insert title" ref={nameManga} className="w-[280px] border-b-2 border-[#424242] bg-transparent text-white" />

            <input ref={coverPhoto} className="text-[4px] px-[5px] hidden text-black font-montserrat font-[500] outline-none" type="file" name="coverPhoto" id="upload" />
            <label className="bg-black hover:bg-[#222222d8] text-white cursor-pointer duration-100 flex items-center justify-center font-[600] w-[9rem] h-[1.6rem] text-sm rounded-[0_0_4px_4px]" htmlFor="upload">Upload Image<AiOutlineUpload className="text-lg ml-2" /></label>

            <input type='text' placeholder="Insert order" ref={order} className="w-[280px] border-b-2 border-[#424242] bg-transparent text-white"></input>
            <input type="text" placeholder="Insert Url pages" ref={pages} className="w-[280px] border-b-2 border-[#424242] bg-transparent text-white"></input>
            <input className="w-[280px] h-[69px] bg-white text-black rounded-md font-bold text-2xl" type="submit" value='Send'></input>
          </form>
        </div>
      </div>
    </>
  )
}
import React from 'react'

function ErrorEdit(props) {

    const { message, onCancel } = props

  return (
    <>
      <div className="bg-[#000000c0] absolute flex justify-center z-40 min-h-[114vw] w-full">
        <div className="bg-[#ffffff] mt-8 w-[25rem] top-64 h-[8rem] flex flex-col justify-around fixed rounded-xl">
          <h2 className="text-black mt-4 font-[600] text-xl text-center">{message}</h2>
          <div className="flex border-t-[2px] h-[3vw]">
            <button className="bg-[#ffffff] text-[#ff8686] flex justify-center items-center w-full h-full font-[700] font-montserrat " onClick={onCancel}>Okay</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorEdit

function DeleteMangaAlert(props) {
  const { message, onConfirm, onCancel } = props
  return (
    <>
      <div className="bg-[#000000c0] absolute flex justify-center z-30 min-h-[107vw] w-full">
        <div className="bg-[#ffffff] mt-8 w-[25rem] top-64 h-[7.9rem] flex flex-col justify-around fixed rounded-xl">
          <h2 className="text-black my-5 font-[600] text-center">{message}</h2>
          <div className="flex border-t-[2px] h-[6vw]">
            <button className="bg-[#ffffff] text-[#ff8686] w-full border-r-[2px] h-[3.2rem] rounded-br-lg font-[600] font-montserrat " onClick={onConfirm}>Yes, im sure</button>
            <button className="bg-[#ffffff] text-[#1d83ff] w-full h-[3.2rem] rounded-bl-lg font-[600] font-montserrat " onClick={onCancel}>No</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteMangaAlert

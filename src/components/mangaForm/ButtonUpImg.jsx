import {AiOutlineUpload} from "react-icons/ai"

function ButtonUpImg({ openPanelUpImg }) {

  return (
    <div className='w-full flex justify-end'>
      <div onClick={openPanelUpImg} className='bg-[#fff] flex items-center font-[600] w-[9rem] h-[2rem] text-sm rounded-[4px] justify-center'>Upload Image<AiOutlineUpload className="text-lg ml-2"/></div>
    </div>
  )
}

export default ButtonUpImg
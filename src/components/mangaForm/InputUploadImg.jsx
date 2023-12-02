import { AiOutlineUpload } from "react-icons/ai"

function inputUploadImg(props) {

    const { saveData, uploadInput } = props

    return (
        <>
            <div className='flex items-center justify-center'>
                <input onChange={saveData} ref={uploadInput} autoComplete="off" className="text-[4px] px-[5px] hidden text-black font-montserrat font-[500] outline-none" type="file" name="cover_photo" id="upload" />
                <label className="bg-white hover:bg-[#ffffffa8] cursor-pointer duration-100 flex items-center justify-center font-[600] w-[9rem] h-[1.6rem] text-sm rounded-[0_0_4px_4px]" htmlFor="upload">Upload Image<AiOutlineUpload className="text-lg ml-2" /></label>
            </div>
        </>
    )
}

export default inputUploadImg
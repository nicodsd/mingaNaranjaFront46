import SelectCategories from "../SelectCategories"

function EditManga(props) {

    const {
        cat,
        title,
        desc,
        photo,
        categoryEdit,
        onConfirm,
        onCancel,
    } = props

    const selectClass = "flex w-full text-white relative justify-between"
    const classInput = "text-white appearance-none px-[5px] border-b-[2px] border-white text-sm outline-none bg-transparent w-full font-montserrat placeholder:font-montserrat font-montserrat placeholder:font-[500] font-[500] placeholder:text-white"

    return (
        <>
            <div className="bg-[#000000cc] absolute flex justify-center z-30 min-h-[114vw] w-full">
                <div className="bg-[#3f3f3f3d] duration-200 backdrop-blur-[4px] hover:backdrop-blur-[7px] mt-6 lg:w-[25rem] top-28 lg:h-[33rem] flex flex-col justify-evenly fixed rounded-xl">
                    <h2 className="text-white font-bold text-3xl text-center">Edit Manga</h2>
                    <div className="flex flex-col items-center w-full justify-center gap-4">
                        <div className='flex-col flex w-[15rem] gap-5 text-white  outline-none focus:outline-none'>
                            <input
                                onChange={title}
                                className={classInput}
                                type="text"
                                name="insert"
                                autoComplete="off"
                                placeholder="title of manga"
                                id="insertTitle"
                            />

                            <input
                                onChange={desc}
                                className={classInput}
                                type="text"
                                name="insert"
                                autoComplete="off"
                                placeholder="insert description"
                                id="insertDescription"
                            />

                            <input
                                onChange={photo}
                                className={classInput}
                                type="text"
                                name="insert"
                                autoComplete="off"
                                placeholder="insert url image of manga"
                                id="insertPhoto"
                            />
                            <SelectCategories 
                                cat={cat} 
                                selectClass={selectClass} 
                                classInput={classInput} 
                                categoryEdit={categoryEdit} 
                            />
                        </div>
                    </div>
                        <div className="flex flex-col items-center w-full justify-center gap-3 mt-4">
                            <button onClick={onConfirm} className="hover:bg-[#4b3bffa4] bg-[#4b3bff] w-[15rem] text-white transition-colors h-10  rounded-xl  rounded-[4px font-montserrat font-extrabold cursor-pointer">
                                Send
                            </button>
                            <button onClick={onCancel} className="hover:bg-[#ff4f49ad] bg-[#ff4f49] text-white w-[15rem] transition-colors h-10  rounded-xl  font-montserrat font-extrabold">
                                cancel
                            </button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default EditManga


import { BiSearch } from 'react-icons/bi'

export default function BrowserMangas(props) {

    const { title, tit, setTitleValue } = props

    return (
        <form className='rounded-[5px] mt-2 md:mt-4 mb-3 md:mb-8 md:p-2 flex items-center border-[1px] border-[#ffffff1e] w-[80%] sm:w-[60%] md:w-[40%] h-11 bg-[#6060601e]' action="">
            <BiSearch className="text-[2rem] ml-1"/>
            <input className='md:text-[17px] md:mr-6 w-full text-center text-[#b5b3b3] bg-transparent placeholder:text-[#b5b3b3] placeholder:text-sm outline-none lg:text-[18px]' type="text" placeholder="Search" name="title" id="title" ref={tit} defaultValue={title} onChange={setTitleValue} />
        </form>
    )
} 

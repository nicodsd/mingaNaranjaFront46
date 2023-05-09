//import Sidebar from './Sidebar.jsx'
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import logo from '../assets/images/logos/Logo21.png'
import '../../src/App.css'


export default function Navbar() {
    const [showMore, setShowMore] = useState(false);
    
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    return (
        <nav className='p-5 lg:px-10 flex justify-between items-center mb-4 lg:mb-0 relative z-2'>
                <div className='bars'>
                    <FiMenu onClick={handleMoreClick}/>    
                </div>
                {showMore ? 
                <div className="flex self-start relative h-full "> 
                    <div className="h-full  top-32">
                        <div className="text-white h-[10rem] font-bold flex justify-around flex-col items-center">
                            <a href='_blank'>Home</a>
                            <a href='_blank'>Mangas</a>
                            <a href='_blank'>My Mangas</a>
                            <a href='_blank'>Favourites</a>
                            <a href='_blank'>Logout</a>
                        </div>
                    </div>
                </div>
                : ''} 
            <img src={logo} className='w-[5rem]' alt="logoMinga" />
        </nav>
    )
}
  

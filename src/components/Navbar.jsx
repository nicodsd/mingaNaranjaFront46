import Sidebar from './Sidebar'
import logo from '../assets/images/logos/Logo21.png'
import { FiMenu } from "react-icons/fi"
import '../../src/App.css'


export default function Navbar() {

    return (
        <nav className='p-5 lg:px-10 flex justify-between items-center mb-4 lg:mb-0'>
            <div className='bars'>
                <FiMenu />
            </div>    
            <Sidebar />
            <img src={logo} className='w-[5rem]' alt="logoMinga" />
        </nav>
    )
    }

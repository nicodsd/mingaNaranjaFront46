import logo from '../assets/images/logos/Logo21.png'
export default function Navbar() {
    return (
        <nav className='p-5 flex justify-between items-center mb-4 lg:mb-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <img src={logo} alt="logoMinga" />
        </nav>
    )
}

import apiUrl from '../api'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Index from './pages/index'
import './App.css'

function App() {
  console.log(apiUrl)
  console.log(process.env.NODE_ENV)
  return (
    <>
      <div className='bg-black w-full h-full'>
        <Navbar />
        <Index title='Best manga reader' subtitle='Your favourite manga reader 😏' paraf='is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.'
          search='Search mangas' />
        <Footer dona='Donate' />
      </div>
    </>
  )
}

export default App

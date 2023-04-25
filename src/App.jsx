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
        <Index />
        <Footer />
      </div>
    </>
  )
}

export default App

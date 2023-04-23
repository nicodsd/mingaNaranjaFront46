import './App.css'

function App() {
  /*     background-image: linear-gradient(to right, #000000, #ffffff4a, #000000);
      background-position: bottom;
      background-size: 100% 1px;
      background-repeat: no-repeat; */
  return (
    <>
      <div className='bg-black w-full h-full'>

        <nav className='p-5 flex justify-between items-center mb-4 lg:mb-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <img src="./src/assets/images/logos/logo21.png" alt="logoMinga" />
        </nav>

        <div className='lg:w-full lg:h-[1px]' style={{ backgroundImage: 'linear-gradient(to right, #000, #ffffff40, #000)' }}></div>

        <main className='text-white w-full h-screen lg:flex lg:flex-col lg:items-center bg-no-repeat bg-center'>
          <h1 className='lg:text-[3.1rem] lg:h-[7rem] flex items-center absolute lg:relative text-black lg:text-white titleMon'>Best manga reader</h1>
          <div className='lg:bg-[#615bff56] absolute right-0 w-[30rem] rounded-[50%] h-[30rem] blur-[9rem] z-0'></div>
          <div className='lg:w-full lg:flex lg:items-center lg:justify-around'>
          <img className='w-full h-[40rem] lg:w-[41rem] object-contain md:object-none absolute lg:relative z-1' src="./src/assets/images/Group3599md.png" alt="imageAtackOnTitans" />
          <div className='w-full lg:w-0 h-full lg:h-0 bg-black lg:bg-transparent absolute opacity-80 z-2'></div>
          <div className='flex flex-col items-center lg:items-start z-0 w-full lg:w-[24rem] p-3 sm:px-[10rem] lg:px-0 lg:pb-[18rem] absolute lg:relative z-3'>
            <h1 id='text-home' className='text-[2.5rem] text-center lg:text-start lg:text-[2.4rem] mt-[7rem] lg:mt-0 mb-[1rem]'>Your favourite manga reader 😏</h1>
            <p id='paraf' className='text-center text-sm p-[.4rem] lg:text-start lg:p-0 lg:w-[80%] lg:text-[12px]'>is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
            <div className='w-[18rem] lg:w-full backdrop-blur-[4px] mt-5'>
              <button className='bg-[#ffffff2a] rounded-[5px] p-2 flex items-center border-[1px] border-[#ffffff1a] w-[18rem] lg:w-full h-11 lg:bg-[#ffffff0f]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <p className='text-white text-[17px] lg:text-[15px] lg:font-thin w-[14rem] lg:w-[20rem] lg:text-[#d1d1d1]'>Search mangas</p>
              </button>
            </div>
          </div>
          </div>
        </main>

        <footer className='h-[15rem] md:h-[19rem] lg:h-[39rem] w-full relative'>
          <img className='rounded-b-[50%] w-full' src="./src/assets/images/cswc5oyv1.png" alt="" />
          <div className='flex justify-center items-center h-[3rem] lg:h-[12rem]'>
            <div className='w-full mt-8 lg:w-[60rem] lg:mt-[6rem] flex items-center justify-around lg:justify-between lg:border-b-[1px] lg:border-[#ffffff40]'>
              <div className='text-white text-[10px] w-[6rem] lg:w-[9rem] flex justify-between'>
                <a className='font-semibold' href="_blank">Home</a>
                <a className='font-semibold' href="_blank">Mangas</a>
              </div>
              <img className='h-[1.5rem] lg:h-12' src="./src/assets/images/logos/logo21.png" alt="" />
              <div className='h-[3.5rem] lg:h-[6.5rem] flex flex-col justify-around'>
                <div className='w-full gap-1 lg:w-[13rem] flex justify-center lg:gap-[2.3rem]'>
                  <img className='w-[18px] h-[18px] lg:w-[1.4rem] lg:h-[1.4rem]' src="./src/assets/images/icons/Facebook.png" alt="" />
                  <img className='w-[22px] h-[18px] lg:w-[30px] lg:h-[1.2rem]' src="./src/assets/images/icons/Twitter.png" alt="" />
                  <img className='w-[22px] h-[18px] lg:w-[30px] lg:h-[1.2rem]' src="./src/assets/images/icons/Vimeo.png" alt="" />
                  <img className='w-[22px] h-[18px] lg:w-[35px] lg:h-[1.2rem]' src="./src/assets/images/icons/Youtube.png" alt="" />
                </div>
                <button className='bg-white w-full h-[1.5rem] lg:w-[13rem] lg:h-[2.6rem] rounded-[5px] flex justify-center items-center'>
                  <p className='font-semibold text-[4px] lg:text-[15px]'>Donate</p>
                  <img className='h-[13px] ml-1 lg:ml-4' src="./src/assets/images/icons/Union.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App

import { Link } from 'react-router-dom';
import eye from '../assets/images/eyebrow.png'
 
function ErrorPage() {
  return (
    <div className="bg-black flex flex-col h-screen justify-center items-center">
      <img className='absolute z-0 right-[10rem] top-12 w-[30rem] opacity-10 hidden lg:block' src={eye} alt="" />

      <h1 className="text-[5rem] relative z-1 font-[900] text-red-600 mb-6">404</h1>
      <p className="text-white relative lg:text-xl mb-6">
        This page cannot be accessed.
      </p>
      <Link
        to="/"
        className="px-6 py-3 relative bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-colors duration-300"
      >
        Go back home
      </Link>
    </div>
  );
}

export default ErrorPage;

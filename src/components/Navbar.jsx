import { Link } from 'react-router-dom';
import { PlayIcon, XMarkIcon, StopIcon } from '@heroicons/react/24/outline'; 

function Navbar() {
  return (
    <nav className="bg-[#14181c] text-white p-4 border-b border-gray-800 shadow-lg font-sans">
      <div className="container mx-auto flex justify-between items-center">
        

        <div className="flex space-x-3 items-center">
          
          <PlayIcon className="h-7 w-7 rotate-[-90deg] stroke-2 text-green-500 hover:text-green-400 transition transform hover:scale-110 duration-200" />
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-7 w-7 text-red-500 hover:text-red-400 transition transform hover:scale-110 duration-200">
            <circle cx="12" cy="12" r="9" />
          </svg>

          <XMarkIcon className="h-7 w-7 stroke-2 text-blue-500 hover:text-blue-400 transition transform hover:scale-110 duration-200" />
          
          <StopIcon className="h-7 w-7 stroke-2 text-pink-500 hover:text-pink-400 transition transform hover:scale-110 duration-200" />
          
        </div>

        <Link to="/" className="text-2xl font-bold tracking-tight absolute left-1/2 transform -translate-x-1/2 hover:text-gray-300 transition">
          GamerBoxd
        </Link>

        <div>
          <Link to="/games" className="border-2 border-gray-500 text-gray-300 px-5 py-1 rounded-full font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase text-sm tracking-widest">
            jogos
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
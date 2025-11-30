import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#14181c] text-gray-100 font-sans flex flex-col">
        <Navbar />
                <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
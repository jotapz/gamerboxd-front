import fundojogo from '../assets/fundofoda.jpg';

function WelcomePage() {
  return (
    <div className="w-full flex-grow flex flex-col items-center justify-center bg-[#14181c] relative overflow-hidden">
      
      <div className="absolute inset-0 z-0" style={{backgroundImage: `url(${fundojogo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1 }}>

      </div>

      <div className="relative z-10 text-center p-4 drop-shadow-2xl">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none select-none text-white">
          Bem vindo
          <br />
          <span className="text-gray-500 text-3xl md:text-5xl font-medium tracking-normal italic">ao</span>
          <br />
          <span className="text-orange-500 drop-shadow-2xl">GamerBoxd</span>
        </h1>
      </div>
    </div>
  );
}

export default WelcomePage;
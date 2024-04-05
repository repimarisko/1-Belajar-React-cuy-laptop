import { useState } from 'react'

import './App.css'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav className="bg-transparent border p-6">
    <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
            <a href="#" className="text-biru text-lg font-semibold">Logo</a>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:block">
            <a href="#" className="text-oren font-semibold text-lg mx-4">Home</a>
            <a href="#" className="text-biru font-semibold text-lg mx-4">About</a>
            <a href="#" className="text-biru font-semibold text-lg mx-4">Services</a>
            <a href="#" className="text-biru font-semibold text-lg mx-4">Contact</a>
        </div>

        {/* Hamburger Menu (for small screens) */}
        <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-biru focus:outline-none">
                <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"/>
                </svg>
            </button>
        </div>
    </div>

    {/* Responsive Navigation Menu (hidden by default) */}
    <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} bg-gray-800`}>
        <div className="px-2 py-3">
            <a href="#" className="block text-white text-sm hover:bg-kuning transition-colors duration-300 ease-in-out py-2">Home</a>
            <a href="#" className="block text-white text-sm py-2">About</a>
            <a href="#" className="block text-white text-sm py-2">Services</a>
            <a href="#" className="block text-white text-sm py-2">Contact</a>
        </div>
    </div>
</nav>
<div id='main' className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 justify-between'>
  <div className="kiri h-screen">
    <span className='text-biru text-lg font-semibold items-center'>Hi, Saya</span>
    <span className='text-biru text-lg font-bold items-center'>Repi Marisko</span>
  </div>
  <div className="kanan">
    <span>Hallo</span>
  </div>
</div>

</>
  )
}

export default App

import React from 'react';
import logo from '../../public/logos/logo.png';
// import Container from '../../public/logos/Container.png';
import container from '../../public/logos/container.png';

const Header = () => {
  return (
    <nav className="fixed z-50 top-5 left-1/2 -translate-x-1/2 w-[960px] h-20 bg-[#333333]/90 backdrop-blur-sm rounded-full px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo.src} alt="logo" className="w-10 h-10" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-[#ADADAD]">
        <span className='nav-text'>SERVICES</span> <span className='nav-text'>|</span>
        <span className='nav-text'>OFFER</span> <span className='nav-text'>|</span>
        <span className='nav-text'>CASE STUDIES (07)</span> <span className='nav-text'>|</span>
        <span className='nav-text'>TESTIMONIALS</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <img src={container.src} alt="container" />
        </div> */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <img src={container.src} alt="container" />
        </div>
        <button className="cta-button bg-[#FF4800] h-8 text-white px-4 py-2 rounded-full flex items-center gap-2">
          Work with us →
        </button>
      </div>
      <style jsx>{`
        .nav-text {
          font-weight: 400;
          font-size: 12px;
          line-height: 12px;
          letter-spacing: 0%;
          text-align: center;
          color: #ADADAD;
        }
        .cta-button {
          font-weight: 600;
          font-size: 12px;
          line-height: 14.4px;
          letter-spacing: 0%;
          text-align: center;
        }
      `}</style>
    </nav>
  )
}

export default Header

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState('shadow-md')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setShadow('shadow-xl')
      } else {
        setShadow('shadow-md')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-50 bg-white ease-in duration-300 ${shadow}`}
    >
      <style jsx>
        {`
        .hover-underline-animation:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: black;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        `}
      </style>
      <div className='max-w-[1640px] m-auto flex justify-between items-center px-6'>
        <Link rel="preload" href='/'>
          <Image quality="90" loading="lazy" className='cursor-pointer' src='/logo.png' width="160" height="160" alt="navbarLogo" />
        </Link>
        <ul className='hidden sm:flex'>
          <li className='p-4 text-lg font-serif  '>
            <Link rel="preload" href='/'>
              <button className="cta">
                <span className="hover-underline-animation">Home</span>
              </button>
            </Link>
          </li>
          <li className='p-4 text-lg font-serif'>
            <Link rel="preload" href='/services'>
              <button className="cta">
                <span className="hover-underline-animation">Services</span>
              </button>
            </Link>
          </li>
          <li className='p-4 text-lg font-serif  '>
            <Link rel="preload" href='/gallery'>
              <button className="cta">
                <span className="hover-underline-animation">Gallery</span>
              </button>
            </Link>
          </li>
          <li className='p-4 text-lg font-serif  '>
            <Link rel="preload" href='/testimonials'>
              <button className="cta">
                <span className="hover-underline-animation">Testimonials</span>
              </button>
            </Link>
          </li>
          <li className='p-4 text-lg font-serif  '>
            <Link rel="preload" href='/contact'>
              <button className="cta">
                <span className="hover-underline-animation">Contact</span>
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "#ffffff" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: "#000" }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul> 
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/'><h6 className='cursor-pointer text-white'>Home</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/services'><h6 className='cursor-pointer text-white'>Services</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/gallery'><h6 className='cursor-pointer text-white'>Gallery</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/testimonials'><h6 className='cursor-pointer text-white'>Testimonials</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/contact'><h6 className='cursor-pointer text-white'>Contact</h6></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import * as Fa from 'react-icons/fa';


export const Header = ({ links }) => {

  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const scrollNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollNavbar);

  return (
    <header className={`w-full fixed top-0 z-[100] ${navbar ? 'active duration-300 ease-in-out' : ''}`}>
      <nav className='md:container p-3 md:p-5 md:mx-auto flex items-center justify-between'>
        <Link className={`font-josefin text-2xl font-[700] uppercase cursor-pointer text-slate-600 md:text-3xl ${navbar ? 'text-white duration-300 ease-in-out' : ''}`} to='home' smooth={true} duration={1000}>
          Mark
          <span className={`text-slate-200 ${navbar ? 'text-slate-700  duration-300' : ''}`}>
            /
          </span>
          <span className='active'>
            An<span className='text-rose-500'>2</span>ny
          </span>
        </Link>

        <div className={`text-slate-700 text-2xl md:hidden ${navbar ? 'text-white' : ''}`} onClick={() => setOpen(!open)}>
          {!open ?
            <Fa.FaBars />
            :
            <Fa.FaTimes />
          }
        </div>

        <ul className={`fixed md:static top-0 left-0 bg-[#2c3639] md:bg-transparent text-white md:text-slate-700 w-2/4 md:w-[initial] h-[100vh] md:h-[initial] flex flex-col md:flex-row justify-center items-center ${!open ? 'left-[-100%]' : 'left-0'} duration-100 ease-in`}>
          {links && links.map(link => (
            <li className='my-5 md:my-0 md:mx-3' key={link.title}>
              <Link className='uppercase text-3xl md:text-xl cursor-pointer hover:text-slate-400' to={link.path} smooth={true} duration={500}>{link.title}</Link>
            </li>
          ))}
        </ul>

      </nav>
    </header >
  )
}

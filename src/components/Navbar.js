import React from 'react'
import { useState } from 'react';
import '../styles/Nav.css';
import Proptypes from 'prop-types';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  let Menus = [
    { name: "HOME", link: "/" },
    { name: "SKILLS", link: "/" },
    { name: "CONTACT ME", link: "/" },
    { name: "ABOUT", link: "/" }
  ];
  let [open, isOpen] = useState(false);
  const closeButton = () => {
    if (open === false) {
      isOpen(true);
      document.querySelector(".mobile-menu").classList.remove("hidden");
    }
    else {
      isOpen(false);
      document.querySelector(".mobile-menu").classList.add("hidden");
    }
  }

  return (
    <div>

      <nav className={`bg-${props.mode} border-gray-700 fixed w-full`} id="navbar">
        <div className="max-w-screen-xl flex flex-wrap md:justify-center mx-auto p-4 ">

          <div className="hidden  w-full md:block md:w-auto  " id="navbar-solid-bg">
            <ul className="flex  font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {
                Menus.map((comp) => (
                  <li>
                    <a href={comp.link} id="navDesk" className="  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{comp.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="md:hidden mobile-menu hidden flex flex-col items-center w-full px-2 py-3 space-y-2 font-medium text-slate-700">

            <ul >
              {
                Menus.map((link) => (
                  <li>
                    <a
                      href={link.link}
                      className="block px-3 py-2 my-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      {link.name}
                    </a>
                  </li>

                ))
              }
            </ul>


          </div>
          <div onClick={closeButton} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
          <div onClick={props.toggle} className='bg-white justify-center rounded-full w-8 flex '>
            <ion-icon name={`${props.mode ==='gray-800' ? 'partly-sunny' : 'moon' }`}></ion-icon>
          </div>
        </div>
      </nav>

    </div>
  )
}

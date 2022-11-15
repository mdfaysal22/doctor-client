import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggler from '../../../Utilities/Toggler';

const Header = () => {
    const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "/home" },
      { title: "About", path: "/about" },
      { title: "Appointment", path: "/appointment" },
      { title: "Reviews", path: "/reviews" },
      { title: "Contact Us", path: "/contact" },
      { title: "Login", path: "/login" }
  ]
    return (
        <nav className="bg-white text-black dark:text-white  dark:bg-gray-800  w-full border-b md:border-0 md:static">
          <div className="items-center justify-between mx-auto md:flex">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <h2 className='text-xl font-semibold'>Doctor Portal</h2>
                    </Link>
                  <div className="md:hidden flex justify-center item-center gap-5">
                      <button className="text-gray-700 dark:text-white dark:focus:border-gray-100  outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                      <Toggler></Toggler>
                  </div>
                  
              </div>
              <div className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-gray-600 transition-all duration-500 text-center hover:text-white rounded-md p-2 hover:bg-gray-600  ">
                                    <Link to={item.path}>
                                        { item.title }
                                    </Link>
                                </li>
                              )
                          })
                      }
                        
                     
                  </ul>
                  
              </div>
              <div className='hidden md:flex'>
              <Toggler></Toggler>
              </div>
          </div>
      </nav>
    );
};

export default Header;
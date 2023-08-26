import React from 'react'
import "../Style/Style.css"
import logo from "../components/img/HI.svg"

function Header() {
  return (
  <>
  <header className='border-b border-solid border-gray-200'>
    <nav class=" border-gray-500 px-4 lg:px-6 py-2.5 ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">


            <a href="/" class="flex items-center">
              <img src={logo} className='w-15 h-15'/>
            </a>  

            <div class="flex items-center lg:order-2">
                <a href="#" class="text-black font-medium border-r text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">Join</a>
                <a href="#" class=" bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Sign In
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 inline-block ml-2">
                  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                  </svg>
                  </a>
            </div>
            <div class="justify-between items-center flex w-auto " id="menu-2">
                <ul class="flex mt-4 font-bold gap-6 ">
                    
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-black lg:p-0 hover:text-gray-700">Rooms</a>
                    </li>
                   
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3  text-black   lg:p-0 hover:text-gray-700">Offers</a>
                    </li>
                    
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3  text-black  lg:p-0 hover:text-gray-700">Location</a>
                    </li>
                  
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3  text-black lg:p-0 hover:text-gray-700">Spa</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3  text-black lg:border-0 lg:p-0 hover:text-gray-700"> Events</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  
  </>
  )
}

export default Header
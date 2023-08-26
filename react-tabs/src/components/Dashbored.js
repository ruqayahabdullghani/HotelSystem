import React from 'react'
import "../Style/Style.css"
import SideBar from './SideBar'
import logo from "../components/img/HI.svg"
import Admin from "../components/img/Admin.png"
import Menu from './Menu'






function Dashbored() {
  return(
    <>



<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start">
        <a href="/" class="flex ml-2 md:mr-24">
          <img src={logo} class="w-15 h-15 ml-5" alt="Logo" />
        </a>
      </div>
      <div class="flex items-center">
          <div class="flex items-center ml-3">
          <div className='mr-[30px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 hover:text-slate-400">
              <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
               </svg>
            </div>
          <div>
              <Menu/>
            </div>
          
            </div>
            </div>
            </div>
            </div>
            </nav>
  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20  " aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto ">
   <SideBar/>
   </div>
   </aside>
   <div>
     </div>
    
     <div class="p-4 sm:ml-64">
   <div class="p-4 mt-14">
      <div class="grid grid-cols-1 gap-4 mb-4">
         <div class="flex w-full items-center justify-center h-24 bg-white border-b border-gray-200 ">
            <p class=" text-blue-900 font-extrabold text-3xl">
            Bookings
            </p>
         </div>
         </div>

         <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
             <table class="w-full text-sm text-left text-gray-500 ">
        
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
            <th scope="col" class="px-6 py-3">
                id.No
                </th>
                <th scope="col" class="px-6 py-3">
                Customer's name 
                </th>
                <th scope="col" class="px-6 py-3">
                    Room Number
                </th>
                <th scope="col" class="px-6 py-3">
                    From Date
                </th>
                <th scope="col" class="px-6 py-3">
                   to date 
                </th>
                <th scope="col" class="px-6 py-3">
                   total amount
                </th> <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
                <th scope="col" class="px-6 py-3">
                  
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
            <td class="px-6 py-4">
                    26820
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Mohammad Redah
                </th>
                <td class="px-6 py-4">
                    4002
                </td>
                <td class="px-6 py-4">
                    26-8-2023
                </td>
                <td class="px-6 py-4">
                    29-8-2023
                </td>
                <td class="px-6 py-4">
                    3000 SAR
                </td>
                <td class="px-6 py-4">
                   Pending
                </td>
                
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600  hover:underline inline-block mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                      <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                       <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                       </svg>
                       </a>

                       <a href="#" class="font-medium text-blue-600  hover:underline inline-block ">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                        </svg>
                       </a>
                </td>

                <td class="px-6 py-4">
                <button className='underline text-blue-700 font-medium hover:text-gray-500'>Details</button>                
                </td>
            </tr>

            <tr class="bg-white border-b ">
            <td class="px-6 py-4">
                    26820
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Ruqayah Abdullghani
                </th>
                <td class="px-6 py-4">
                    4024
                </td>
                <td class="px-6 py-4">
                    29-8-2023
                </td>
                <td class="px-6 py-4">
                    1-9-2023
                </td>
                <td class="px-6 py-4">
                    1000 SAR
                </td>
                <td class="px-6 py-4">
                   Fully paid
                </td>
                
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600  hover:underline inline-block mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                      <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                       <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                       </svg>
                       </a>

                       <a href="#" class="font-medium text-blue-600  hover:underline inline-block">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                        </svg>
                       </a>
                </td>

                <td class="px-6 py-4">
                <button className='underline text-blue-700 font-medium hover:text-gray-500'>Details</button>                
                </td>
            </tr>
            <tr class="bg-white border-b ">
            <td class="px-6 py-4">
                    26820
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Sarah Mohammad
                </th>
                <td class="px-6 py-4">
                    4000
                </td>
                <td class="px-6 py-4">
                    9-1-2023
                </td>
                <td class="px-6 py-4">
                    9-9-2023
                </td>
                <td class="px-6 py-4">
                    7000 SAR
                </td>
                <td class="px-6 py-4">
                  Partly paid
                </td>
                
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600  hover:underline inline-block ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                      <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                       <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                       </svg>
                       </a>

                       <a href="#" class="font-medium text-blue-600  hover:underline inline-block ml-1">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                        </svg>
                       </a>
                </td>

                <td class="px-6 py-4">
                <button className='underline text-blue-700 font-medium hover:text-gray-500'>Details</button>                
                </td>
            </tr>

            <tr class="bg-white border-b ">
            <td class="px-6 py-4">
                    26820
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Mohammad Redah
                </th>
                <td class="px-6 py-4">
                    4009
                </td>
                <td class="px-6 py-4">
                    2-8-2023
                </td>
                <td class="px-6 py-4">
                    29-8-2023
                </td>
                <td class="px-6 py-4">
                    10000 SAR
                </td>
                <td class="px-6 py-4">
                Fully paid
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600  hover:underline inline-block ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                      <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                       <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                       </svg>
                       </a>

                       <a href="#" class="font-medium text-blue-600  hover:underline inline-block ml-1">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                        </svg>
                       </a>
                       
                </td>

                <td class="px-6 py-4">
                <button className='underline text-blue-700 font-medium hover:text-gray-500'>Details</button>                
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

      </div>

      
         </div>
         
      


         




             </>

  )
}

export default Dashbored
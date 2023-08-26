import React from 'react'


function SideBar() {
  return (
    <>  


          <input type="checkbox" id="check"/>
   <label for="check">
     <i class="fas fa-bars inline-flex items-center p-2 text-sm rounded-lg focus:outline-none focus:ring-2  text-black focus:ring-gray-60" id="btn"></i>
     <i class="fas fa-times inline-flex items-center p-2 text-sm rounded-lg focus:outline-none focus:ring-2  text-black focus:ring-gray-60" id="cancel">
     <svg  aria-hidden="true" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
           </svg>
           </i>
           
   </label>
   <div class="sidebar"> 
     <div className='mt-[20px]'>
     <a href="/" class="items-center rounded-lg  hover:bg-slate-200">
       <span className='text-black '>New Reservation</span>
     </a>
     <a href="#" class="items-center rounded-lg hover:bg-slate-200">
      <span className='text-black'>Update Reservation</span>
     </a>
     <a href="#" class="items-center rounded-lg hover:bg-slate-200">
      <span className='text-black'>Find Reservation</span>
     </a>
     <a href="#" class="items-center rounded-lg  hover:bg-slate-200">
      <span className='text-black'>Profiles</span>
      </a>

     <a href="#" class="items-center rounded-lg  hover:bg-slate-200 ">
       <span className='text-black'>Calendar</span>
     </a>
     <a href="#" class="items-center rounded-lg hover:bg-slate-200">
       <span className='text-black '>Booking</span>
     </a>
     <a href="#" class="items-center rounded-lg  hover:bg-slate-200 ">
       <span className='text-black '>Booking Report</span>
     </a>

     <a href="#" class="items-center rounded-lg hover:bg-slate-200 ">
       <span className='text-black '>Check Out</span>
     </a>

     <a href="#" class="items-center rounded-lg  hover:bg-slate-200 ">
       <span className='text-black '>Services</span>
     </a>

     <a href="#" class="items-center rounded-lg  hover:bg-slate-200">
       <span className='text-black '>Settings</span>
     </a>

   
   </div>
   </div>
   


    
   </>
  )
}

export default SideBar
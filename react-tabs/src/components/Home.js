import React from 'react'
import Header from './Header'
import "../Style/Style.css"
import twinRoom from "../components/img/TWINROOM.jpg"
import kingRoom from "../components/img/KINGROOM.jpg"
import partment from "../components/img/ONEBEDROOMAPARTMENT.jpg"
import ROYALSUITE from "../components/img/ROYALSUITE.jpg"
import Footer from './Footer'



function Home() {
  return (
    <div>
<Header/>

<div className='mt-[30px] border-b border-solid border-gray-200'>
  <h2 className='text-blue-900 font-extrabold text-3xl mb-6 ml-[30px] '>Hilton Riyadh Hotel & Residences</h2>
</div>

<div className='grid-cols-3 md:grid-cols-3 mt-[30px] border-b border-solid border-gray-200 '>
  <div className='px-6 py-20 text-center'>
    <form>
  <label className='lebelSt'>Check In</label>
  <input type='date' className='inputSt'/>
  
  <label className='lebelSt ml-4'>Check out</label>
  <input type='date' className='inputSt'/>

  <label className='lebelSt ml-4'>Rooms</label>
  <input type='number' className='inputSt sm:mt-4'/>

  <button class="ml-3 inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-400 md:mt-6">
    Search</button>
    </form>
  </div>
</div>

<div>
<div class="px-6 py-20 text-center ">
  <h className='font-bold text-xl'>Your stay includes 
  <br/></h>
  <p className='mt-4'>
✓ Free parking
✓ Free WiFi
✓ On-site restaurant
✓ Indoor pool
✓ Fitness center
✓ Business cente</p>
      <h3 class="mb-8 mt-8 text-3xl font-bold">Popular Rooms</h3>
      <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            <div class="w-full md:w-3/12 md:mx-2">
      


                <div class="p-3 border-t border-solid border-gray-200">
                <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src=""
                            alt=""/>
                    <h1 class="text-black font-medium text-xl leading-8 my-2">Filter</h1>
                    <div class="flex items-center mb-4">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                      <label for="default-checkbox" class="ml-2 text-sm text-gray-900">Guset Rooms</label>
                      </div>
                      <div class="flex items-center mb-4">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                      <label for="default-checkbox" class="ml-2 text-sm text-gray-900">Suites</label>
                      </div>
                      <div class="flex items-center mb-4">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                      <label for="default-checkbox" class="ml-2 text-sm text-gray-900">Executive</label>
                      </div>
                      <div class="flex items-center mb-4">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                      <label for="default-checkbox" class="ml-2 text-sm text-gray-900">Accessible</label>
                      </div>
                </div>
            </div>
            </div> 
            <div class="w-full md:w-9/12 mx-2 h-70 border-t border-solid border-gray-200">
              <div class="container mx-auto p-6 grid grid-cols-2 gap-4">
                 <div class="col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg">
                  <h2 class="mb-2 font-bold text-2xl text-[#134c98]">TWIN EXECUTIVE ROOM</h2>
                  <div class="mb-4 flex flex-wrap">
                    <img class="rounded-t-lg" src={twinRoom} alt=""/>
                    </div>
                     <div class="flex flex-wrap mt-auto pt-3 text-xs">
                      <button type="button" class=" w-full text-white bg-[#134c98] hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ">Book</button>
                      <button type="button" class=" w-full text-[#134c98] border-[1px] border-[#134c98]  focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ">Room Details</button>
                      </div>
                      </div>
                      <div class="col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg">
                        <h2 class="mb-2 font-bold text-2xl text-[#134c98]">ONE BEDROOM APARTMENT</h2>
                        <div class="mb-4 flex flex-wrap">
    <img class="rounded-t-lg" src={partment} alt=""/>
    </div>
    <div class="flex flex-wrap mt-auto pt-3 text-xs">
      <button type="button" class=" w-full text-white bg-[#134c98] hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ">Book</button>
       <button type="button" class=" w-full text-[#134c98] border-[1px] border-[#134c98]  focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ">Room Details</button>
    </div>
  </div>
</div>

              <div class="container mx-auto p-6 grid grid-cols-2 gap-4">
                 <div class="col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg">
                  <h2 class="mb-2 font-bold text-2xl text-[#134c98]">KING ROYAL SUITE</h2>
                  <div class="mb-4 flex flex-wrap">
                    <img class="rounded-t-lg" src={ROYALSUITE} alt=""/>
                    </div>
                     <div class="flex flex-wrap mt-auto pt-3 text-xs">
                      <button type="button" class=" w-full text-white bg-[#134c98] hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ">Book</button>
                      <button type="button" class=" w-full text-[#134c98] border-[1px] border-[#134c98]  focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ">Room Details</button>
                      </div>
                      </div>
                      <div class="col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg">
                        <h2 class="mb-2 font-bold text-2xl text-[#134c98]">KING EXECUTIVE ROOM</h2>
                        <div class="mb-4 flex flex-wrap">
    <img class="rounded-t-lg" src={kingRoom} alt=""/>
    </div>
    <div class="flex flex-wrap mt-auto pt-3 text-xs">
      <button type="button" class=" w-full text-white bg-[#134c98] hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ">Book</button>
       <button type="button" class=" w-full text-[#134c98] border-[1px] border-[#134c98]  focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ">Room Details</button>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>

                </div>
                <Footer/>
                </div>
                
                
               

               

              
            

  )
}

export default Home
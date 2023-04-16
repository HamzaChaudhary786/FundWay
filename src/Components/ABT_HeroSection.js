import React from 'react'
import ABT_Navbar from './ABT_Navbar'
import Suggestion_Box from './Suggestion_Box'
import { useGlobalContext } from './Context'
import about1 from '../Assets/about.png'
import about2 from '../Assets/about2.png'
import about3 from '../Assets/about3.png'

import Rec from '../Assets/rec.png'
const ABT_HeroSection = () => {
  const { query, setQuery } = useGlobalContext()

  return (
    <>
      <div className='  w-[100%] h-auto grid justify-items-center items-center bg-red-900 '>
        <div className=' h-auto w-[100%]  '>
          <div className=' grid justify-end  '>
            <div className=' flex p-4'>
              <div className='justify-items-center grid px-2'>
                <div className=' ml-6 lg:mr-0 md:ml-2 lg:mt-0  border rounded hover:border-green-400 hover:border-2 items-center  cursor-pointer bg-white flex w-fit h-fit  lg:h-auto lg:w-auto  '>

                  <div className='p-2   grid items-center '><ion-icon name="search-outline"></ion-icon></div>
                  <div className=''>
                    <input type="text" placeholder=" Search Here" className=' w-[180px] h-[28px]  rounded-lg  outline-none border-none lg:w-[250px] md:w-[130px] md:h-[28px] lg:rounded-xl'
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </div>

                <Suggestion_Box />

              </div>
              <div className='px-2  '>
                <span className=' text-2xl text-white px-2 h-fit w-fit  '><ion-icon name="person-circle-outline"></ion-icon></span>
                <span className='text-white text-lg   '>Login</span>

              </div>
            </div>
          </div>
          <ABT_Navbar />

          <div className=' grid grid-cols-1 md:grid-cols-2 w-[100%] h-fit justify-items-center items-center'>

            <div className='w-[90%]  p-4 lg:order-2'>
              <h1 className=' text-3xl font-bold text-white'>The Idea</h1>
              <p className='text-lg mt-4 text-white'>  Floods are a type of natural disaster that can cause heavy destruction to life and property. It is a condition when rainwater accumulates at a place, flooding populated areas. They can also lead to the loss of numerous lives. At times, it can be highly dangerous and can wipe off an entire village or city.</p>

            </div>
            <div className='grid justify-items-center md:p-4 lg:p-0 items-center h-fit lg:w-[100%]  lg:order-1  '>
              <img src={about3} className='w-[90%] h-[90%] lg:w-[70%] lg:h-[70%]	' />
              <div className=' grid justify-items-start  h-auto w-[100%]
              '> <img src={Rec} className=' h-20 w-96 rotate-12' /></div>
            </div>

            <div className='grid justify-items-center items-center md:p-4 lg:p-0 h-fit w-[100%] order-2 '>
              <img src={about2} className='w-[90%] h-[90%]  lg:w-[70%] lg:h-[70%] 	' />

              <div className=' grid justify-items-end  h-auto w-[100%]'
              ><img src={Rec} className=' h-20 w-96 -rotate-12' /></div>


            </div>
            <div className='w-[90%]  p-4  order-1 '>
              <h1 className=' text-3xl font-bold text-white'>Helping the community</h1>
              <p className='text-lg mt-4 text-white'>Floods are a type of natural disaster that can cause heavy destruction to life and property. It is a condition when rainwater accumulates at a place, flooding populated areas. They can also lead to the loss of numerous lives. At times, it can be highly dangerous and can wipe off an entire village or city.</p>

            </div>

            <div className='w-[90%]  p-4 '>
              <h1 className=' text-3xl font-bold text-white'>Keeping up with the trends</h1>
              <p className='text-lg mt-4 text-white'>Hamza are a type of natural disaster that can cause heavy destruction to life and property. It is a condition when rainwater accumulates at a place, flooding populated areas. They can also lead to the loss of numerous lives. At times, it can be highly dangerous and can wipe off an entire village or city.</p>

            </div>
            <div className='grid justify-items-center items-center md:p-4 lg:p-0 h-fit w-[100%] '>
              <img src={about1} className='w-[90%] h-[90%]  lg:w-[70%] lg:h-[70%] 	' />
              <div className=' grid justify-items-end   h-auto w-[100%]'
              ><img src={Rec} className=' h-20 w-96 -rotate-12' /></div>
            </div>




          </div >




        </div>


      </div>
    </>
  )
}

export default ABT_HeroSection
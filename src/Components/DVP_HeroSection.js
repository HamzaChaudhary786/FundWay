import React from 'react'
import Navbar from './Navbar'
import Suggestion_Box from './Suggestion_Box'
import { useGlobalContext } from './Context'
import Hamza from '../Assets/Hamza.png'
import Sheri from '../Assets/Sheri.png'
import Moiz from '../Assets/Moiz.png'
import hand from '../Assets/hands.png'
import { Link } from 'react-router-dom'

const DVP_HeroSection = () => {
    const { query, setQuery } = useGlobalContext();
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
                    <Navbar />



                    <div className='h-auto w-auto p-8 lg:p-0  '>
                        <div className='grid grid-cols-1  lg:grid lg:grid-cols-2 justify-items-center items-center'>
                            <div className=''>
                                <h1 className=' font-bold text-5xl text-white'>Meet the team</h1>
                                <p className='h-42 w-96 text-green-200 text-lg mt-4'>Fund Way leadership team brings decades-long multidisciplinary experience. Read the team’s bios below and connect with them on Github!</p>
                            </div>
                            <div >
                                <img src={hand} className='h-[400px] w-[600px]' />
                            </div>
                        </div>


                        <div className=' w-[100%] h-auto grid justify-items-center'>

                            <div className=' mt-4 w-[70%] sm:w-[95%] md:w-[85%] lg:w-[80%] h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6'>

                                <Link to="/hamza">
                                    <div className=' p-2 w-[100%] grid justify-items-center bg-red-800 '>
                                        <img src={Hamza} className='h-[320px] w-[100%] object-contain  ' />
                                        <div className=' w-auto grid justify-items-center'>
                                            <div className='h-20 w-20 rounded-full border-2 border-emerald-400 grid items-center -mt-12 ml-24 transform bg-slate-800 text-white font-bold text-xl'>
                                                <h1 className='text-center h-auto w-auto'>
                                                    Github
                                                </h1>
                                            </div>
                                            <h1 className=' text-white font-bold text-xl' >M Hamza Sattar</h1>
                                            <h2 className='text-green-500 font-sans text-lg'>FrontEnd Developer</h2>
                                        </div>

                                    </div>
                                </Link>
                                
                                <Link>
                                    <div className=' p-2 w-[100%] grid justify-items-center bg-red-800 '>
                                        <img src={Sheri} className='h-[320px] w-[100%] object-contain  ' />
                                        <div className=' w-auto grid justify-items-center'>
                                            <div className='h-20 w-20 rounded-full border-2 border-emerald-400 grid items-center -mt-12 ml-24 transform bg-slate-800 text-white font-bold text-xl'>
                                                <h1 className='text-center h-auto w-auto'>
                                                    Github
                                                </h1>
                                            </div>
                                            <h1 className=' text-white font-bold text-xl' >Sheharyar</h1>
                                            <h2 className='text-green-500 font-sans text-lg'>BackEnd Developer</h2>
                                        </div>

                                    </div>
                                </Link>
                                <Link>
                                    <div className=' p-2 w-[100%] grid justify-items-center bg-red-800 '>
                                        <img src={Moiz} className='h-[320px] w-[100%] object-contain  ' />
                                        <div className=' w-auto grid justify-items-center'>
                                            <div className='h-20 w-20 rounded-full border-2 border-emerald-400 grid items-center -mt-12 ml-24 transform bg-slate-800 text-white font-bold text-xl'>
                                                <h1 className='text-center h-auto w-auto'>
                                                    Github
                                                </h1>
                                            </div>
                                            <h1 className=' text-white font-bold text-xl' >Moiz khan</h1>
                                            <h2 className='text-green-500 font-sans text-lg'>BackEnd Developer</h2>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        </div>



                    </div>




                </div>


            </div>
        </>


    )
}

export default DVP_HeroSection
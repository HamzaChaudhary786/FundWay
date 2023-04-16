import React from 'react'
import Suggestion_Box from './Suggestion_Box';
import Navbar from './ABT_Navbar';
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom';
import hmz from '../Assets/hmz.png'
const Hmz_HeroSection = () => {
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

                    <div className=' mt-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center p-2'>
                            <div className=' w-[98%] h-auto'>
                                <h1 className=' text-3xl font-extrabold text-white px-4'>Developers</h1>
                                <p className='w-[90%] px-4 lg:w-[80%] h-auto mt-6'>
                                    A React developer is responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library. They develop and maintain UIs for web and mobile apps. They must have high-level expertise using React and a deep understanding of all stages of the software development life cycle. They write, test, debug, and implement code to meet user requirements.
                                </p>
                                <div className=' grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 w-[100%] h-auto mt-8 text-orange-400'>
                                    <div className='grid  gap-y-8 '>
                                        <Link className='flex  items-center hover:text-indigo-600'><span className='text-6xl  mr-2'><ion-icon name="logo-facebook"></ion-icon></span>www.http//facebook/<br />hamzagee.com</Link>
                                        <Link className='flex items-center hover:text-indigo-600'><span className='text-6xl text-center  mr-2'><ion-icon name="logo-linkedin"></ion-icon></span>www.http//linkedin/<br />hamzchaudhary</Link>
                                    </div>

                                    <div className=' grid gap-y-8 '>
                                        <Link className='flex items-center hover:text-indigo-600'><span className='text-6xl  mr-2'><ion-icon name="logo-whatsapp"></ion-icon></span> ww.http/whatsapp/<br />hamza.com</Link>
                                        <Link className='flex items-center hover:text-indigo-600'><span className='text-6xl  mr-2'><ion-icon name="logo-github"></ion-icon></span>www.http//githib/<br />hamzachaudhary</Link>
                                    </div>
                                </div>

                            </div>
                            <div className=' h-auto w-[100%] grid justify-items-center '>
                                <img src={hmz} className='  ' />

                                <div className='  ml-8 text-lg text-white grid items-start'>
                                    <h1 className=' '>M Hamza Sattar</h1>
                                    <h2>(FrontEnd Developer)</h2>
                                </div>

                            </div>
                        </div>
                    </div>




                </div>


            </div>
        </>
    )
}

export default Hmz_HeroSection
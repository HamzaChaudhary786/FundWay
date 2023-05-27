import React from 'react'
import Navbar from './Navbar'
import Suggestion_Box from './Suggestion_Box'
import { useGlobalContext } from './Context'
import charity from "../Assets/charity.png"
import { Link } from 'react-router-dom'
const HeroSection = () => {
    const { query, setQuery, fundy } = useGlobalContext()
    return (
        <>
            <div className='  w-[100%] h-screen grid justify-items-center items-center '>
                <div className='imgBg  h-screen w-[100%]  '>
                    <Link to="/search">
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
                                <Link to="/signin" className='px-2  '>
                                    <span className=' text-2xl text-white px-2 h-fit w-fit  '><ion-icon name="person-circle-outline"></ion-icon></span>
                                    <span className='text-white text-lg   '>Login</span>

                                </Link>
                            </div>
                        </div>
                    </Link>
                    <Navbar />
                    <div className=" grid justify-end items-center  h-96 w-[100%] ">

                        <div className='w-96 h-fit font-sans grid justify-end text-4xl md:justify-center  text-white' >
                            <span className=' h-fit pl-9  md:px-3 lg:px-0'>
                                We're with <br /><span className='text-4xl font-bold '>Every Kid <br /> In Pakistan</span>
                            </span>
                            <p className='text-base text-white opacity-60 h-auto mt-4 pl-9 pr-1 md:px-3 lg:px-0 w-60 '>This Is Our Project BlockChain based .In This Project We Used HTML , CSS , React ,JavaScript</p>

                        </div>

                    </div>
                    <div>

                    </div>


                </div>
                <div className=' w-[100%] justify-items-center items-center grid transform -mt-20'>
                    <div className='grid w-[90%] justify-end '>
                        <div className=' bg-lorange font-sans  grid items-center  rounded-t h-10 w-fit p-1'>
                            Fundraise Target 10 ETH
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-3 justify-items-center text-center h-auto w-[98%] md:w-[96%] lg:w-[90%] bg-lred  rounded '>
                        {
                            fundy.map((item) => {
                                return (
                                    <>
                                        <div className=' w-[100%]  grid justify-items-center font-sans p-3  '>
                                            <h1 className=' text-center text-lg md:text-lg lg:text-xl font-bold font-sans text-lorange
                                            '>{item.title}</h1>
                                            <span className=' flex mt-2'>
                                                <img src={charity} className='h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16' />
                                                <strong className=' text-white ml-2 text-2xl md:text-4xl lg:text-5xl font-sans font-bold'>{item.donate}</strong>
                                            </span>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection
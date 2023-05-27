import React from 'react'
import Navbar from './Navbar'
import Suggestion_Box from './Suggestion_Box'
import food from '../Assets/food.png'
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom'

const Search = () => {
    const { query, setQuery, list } = useGlobalContext()


    return (
        <>
            <div className='  w-[100%]  bg-dred h-[100%] grid justify-items-center   '>



                <div className='  h-auto  w-[100%] grid   '>
                    <Link to="/search">
                        <div className=' grid justify-end  '>
                            <div className=' flex p-4'>
                                <div className='justify-items-center  px-2 hidden'>
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
                    </Link>
                    <Navbar />

                    {/* SEARCH BAR */}


                    <div className='justify-items-center grid px-2 items-center mt-28  '>

                        <div className='  bg-gray-800 rounded-full bg-opacity-60 border-white border w-[80%] '>
                            <div className=' ml-6 lg:mr-0 md:ml-2 lg:mt-0 justify-items-center  items-center  cursor-pointer flex h-auto w-[100%]   '>

                                <div className='p-2   grid items-center text-white '><ion-icon name="search-outline"></ion-icon></div>
                                <div className='h-auto w-[100%]'>
                                    <input type="text" placeholder=" Search Here" className='w-[100%] rounded-xl bg-transparent outline-none border-none text-white'
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>



                    </div>

                    <Suggestion_Box />


                </div>



                <div className=' w-[80%]'>

                    <div className=' w-[100%] grid grid-cols-2 bg-dred sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  mt-8 justify-items-start items-center gap-4'>
                        {
                            list.map((item) => {
                                const { title, description, value, fund, btn, names } = item;
                                return (
                                    <>
                                        {
                                            names.toLowerCase() == query.toLowerCase() || title.toLowerCase() == query.toLowerCase() ?


                                                <section className='w-[100%] h-auto bg-red-700 text-white grid justify-items-center p-3 hover:scale-105 duration-500 ease-in-out rounded-xl'>
                                                    <img src={food} className=' object-cover  hover:scale-105 duration-500 ease-in-out' />
                                                    <h1 className=' justify-center grid text-xl font-semibold'>{title}</h1>
                                                    <p className='mt-2'>{description}</p>
                                                    <div className='w-[100%] border-2 bg-orange-600 rounded-full mt-4'>
                                                        <div className={`bg-white w-[100%] text-red-600 h-3 text-center rounded-full text-xs`}
                                                            style={{
                                                                opacity: 1,
                                                                width: `${value}%`
                                                            }}
                                                        >
                                                        </div>

                                                    </div>
                                                    <div className=' flex  '>
                                                        <div className=''>
                                                            {value}%
                                                        </div>
                                                        <div className='ml-14'>
                                                            {fund}
                                                        </div>
                                                    </div>
                                                    <button className=' px-4 h-10 w-32 mt-4 rounded-full  items-center bg-gradient-to-r from-orange-600 to-orange-400 '>{btn}</button>



                                                </section>


                                                :
                                                console.log(names)
                                        }
                                    </>
                                )
                            })

                        }
                    </div>

                    <div className=' grid w-[100%] p-2 h-auto bg-dred justify-items-center items-center '>
                        <div className=' w-[94%] h-auto mt-4'>
                            <h1 className=' text-4xl font-bold text-white grid justify-items-center '>Other Listed Projects</h1>

                            <div className=' w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  mt-8 justify-items-start items-center gap-4'>
                                {
                                    list.map((item) => {
                                        const { title, description, value, fund, btn } = item;
                                        return (
                                            <>
                                                <section className='w-[100%] h-auto bg-red-700 text-white grid justify-items-center p-3 hover:scale-105 duration-500 ease-in-out rounded-xl'>
                                                    <img src={food} className=' object-cover  hover:scale-105 duration-500 ease-in-out' />
                                                    <h1 className=' justify-center grid text-xl font-semibold'>{title}</h1>
                                                    <p className='mt-2'>{description}</p>
                                                    <div className='w-[100%] border-2 bg-orange-600 rounded-full mt-4'>
                                                        <div className={`bg-white w-[100%] text-red-600 h-3 text-center rounded-full text-xs`}
                                                            style={{
                                                                opacity: 1,
                                                                width: `${value}%`
                                                            }}
                                                        >
                                                        </div>

                                                    </div>
                                                    <div className=' flex  '>
                                                        <div className=''>
                                                            {value}%
                                                        </div>
                                                        <div className='ml-14'>
                                                            {fund}
                                                        </div>
                                                    </div>
                                                    <button className=' px-4 h-10 w-32 mt-4 rounded-full  items-center bg-gradient-to-r from-orange-600 to-orange-400 '>{btn}</button>



                                                </section>
                                            </>
                                        )
                                    })

                                }
                            </div>


                        </div>


                    </div>
                </div>





            </div>



        </>
    )
}

export default Search
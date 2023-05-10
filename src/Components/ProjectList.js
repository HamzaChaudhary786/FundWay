import React from 'react'
import food from '../Assets/food.png'
import { useGlobalContext } from './Context'

const ProjectList = () => {
    const { list, query } = useGlobalContext();
    return (
        <>
            <div className=' grid w-[100%] p-2 h-auto bg-red-950 justify-items-center items-center mt-16 '>
                <div className=' w-[94%] h-auto mt-4'>
                    <h1 className=' text-4xl font-bold text-white grid justify-items-center '>Other Listed Projects</h1>



                    <div className=' w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  mt-8 justify-items-start items-center gap-4'>
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



        </>)
}

export default ProjectList
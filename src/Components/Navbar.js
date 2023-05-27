
import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'
import Suggestion_Box from './Suggestion_Box'
import FundRaise from './FundRaise'
import Donate from './Donate'
import gift from "../Assets/gift.gif"
const Navbar = () => {


    let Links = [
        {
            name: "Home", link: "/"
        },
        {
            name: "About Us",
            link: "/about",

        },

        {
            name: "Ways to Fundraise", link: "/waytofundraise",
        },
        {
            name: "Tips and Tools", link: "/tipsandtools"
        },



    ];
    let [open, setOpen] = useState(false);
    const { query, setQuery, } = useGlobalContext();







    return (
        <>

            <div className=' w-[100%] h-24 top-0    left-0  flex items-center      md:p-2    md:justify-between    '>


                <div className=' h-auto w-auto  cursor-pointer  grid sm:justify-items-center sm:justify-center '>
                    <Link to='/' className='grid items-center' >
                        <span className=' text-3xl text-indigo-600 p-2'>
                            <img src={logo} className=' h-20 w-16' alt="Logo" />
                        </span>
                    </Link>
                </div>

                <div className=' text-3xl absolute text-white right-8 top-22 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>







                <ul className={`grid items-center md:flex md:justify-items-center md:items-center transition-all duration-700  ease-in-out absolute md:static md:h-16 md:w-auto w-80    md:pl-0  bg-red-900 h-screen ${open ? 'top-[2px] right-[165px] opacity-100 ease-in-out' : 'top-[-850px] right-[165px] ease-in-out duration-1000 transition-all '}  md:bg-opacity-0 `}>
                    {
                        Links.map((item) => {
                            return (
                                <>
                                    <li key={item.name} className="text-center text-lg w-fit h-fit font-sans group md:p-1  md:ml-0 mt-2 md:mt-0 pl-6    ">
                                        <Link to={item.link} className='text-white  md:text-base lg:p-2   lg:text-lg   '>
                                            {item.name}


                                        </Link>


                                    </li>


                                </>
                            )
                        })
                    }

                    <div className=' pl-6 md:pl-0'>
                        <FundRaise>FUNDRAISE</FundRaise>
                        <Donate>DONATE</Donate>
                    </div>
                    <div className=' grid justify-items-center items-center  md:hidden'>
                        <img src={gift} />

                    </div>



                </ul>




                {/* Search Section */}


                {/* <div className='justify-items-center grid'>
                        <div className=' ml-6 lg:mr-0 md:ml-2 lg:mt-0  border rounded hover:border-green-400 hover:border-2 items-center  cursor-pointer bg-white flex w-fit h-fit  lg:h-auto lg:w-auto  '>

                            <div className='m-2  grid items-center '><ion-icon name="search-outline"></ion-icon></div>
                            <div className=''>
                                <input type="text" placeholder=" Search Here" className=' w-[180px] h-[28px]  rounded-lg  outline-none border-none lg:w-[250px] md:w-[130px] md:h-[28px] lg:rounded-xl'
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <Suggestion_Box />

                    </div> */}



            </div>






        </>
    )
}

export default Navbar



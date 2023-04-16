import React from 'react'
import ABT_Navbar from './ABT_Navbar'
import Suggestion_Box from './Suggestion_Box'
import { useGlobalContext } from './Context'
import way1 from '../Assets/way1.png'
import way2 from '../Assets/way2.png'
import way3 from '../Assets/way3.png'
const Way_HeroSection = () => {
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

                    <div className=' w-[100%] h-auto grid mt-6 justify-items-center items-center'>
                        <div className=' w-[96%] h-auto grid grid-cols-1 md:grid-cols-2 text-white text-lg'>

                            <div className=' p-12 '>
                                <h1 className=' text-4xl font-sans font-bold text-white'>Way To <span>FundRaise</span></h1>
                                <br />
                                <br />

                                <h2 className=' text-lorange font-sans text-xl'>1. Create a Account</h2>
                                <br />
                                <p>Before you start donating or fundraising, you need to create an account or Login. This is to make sure that the integrity of the fundraiser and the website is maintained.</p>

                                <br />

                                <h2 className=' text-lorange font-sans text-xl'>Connect Your Wallet</h2>

                                <br />

                                <p>After creating an account, you will need to <span className=' underline'>connect your Metamask wallet</span> to your account. You will now be able to list projects, and donate to different project of your choice. </p>


                            </div>
                            <div className='p-6 grid justify-items-center'>
                                <img src={way1} className=' h-[90%] w-[90%] sm:h-auto sm:w-[70%] md:h-auto md:w-[85%] lg:h-[75%] lg:w-[75%]' />
                            </div>
                        </div>

                        <div className=' w-[96%] h-auto grid grid-cols-1 md:grid-cols-2 text-white text-lg '>

                            <div className=' p-12 '>


                                <h2 className=' text-lorange font-sans text-xl'>Choosing to list</h2>
                                <br />
                                <p>Once you decide that you want to list a project to be funded on the website, you will need to provide some information (basic + legal). This is to make sure there are no fraudulent activities (scams).
                                </p>
                                <p>This is also make you feel safer while donating because you will be certain that your money is going to the needy and not some greedy scammer.
                                </p>

                                <br />

                                <h2 className=' text-lorange font-sans text-xl'>Validation period
                                </h2>

                                <br />

                                <p>Before we just blindly list any project on our webpage, we need to make sure that it is 100% legit, to make that sure we will require all listers to provide us with some legal documents (Passport #, NIC, Phone #,Organization name, Request letter etc.).</p>

                                <p>After all this has happened, your data (information and documents) will be sent to our database for validation, after the data has been manually reviewed by our team member(s). It will be approved and listed on our website.
                                </p>

                                <p>
                                    KEEP IN MIND, in case of an attempt to provide counter-fit documents, lying, providing false information or unrealistic funding request, the user's account may be suspended or permanently deleted.

                                </p>



                            </div>
                            <div className='p-6 grid justify-items-center'>
                                <img src={way2} className=' h-[90%] w-[90%] sm:h-auto sm:w-[70%]   md:h-auto md:w-[85%] lg:w-[75%] lg:h-[75%]' />
                            </div>
                        </div>

                        <div className=' grid p-6 justify-items-center items-center'>
                            <img src={way3} className=' h-auto w-[96%] lg:w-[90%] ' />
                        </div>

                        <div className=' h-auto w-[90%] text-white text-lg'>
                            <h1 className=' text-lorange font-sans text-xl'>Done</h1>
                            <p>
                                Now that your project has been approved and listen on our website, it is all set and ready to be funded.
                                Your project will be visible to our users. and you can share its link with your family, friends, community to get those interactions and donations up. Once the target has been met, the project will be unlisted and the donations will be sent to the lister.
                            </p>
                        </div>



                    </div>



                </div>


            </div>

        </>)
}

export default Way_HeroSection
import React from 'react'
import ABT_Navbar from './ABT_Navbar'
import Suggestion_Box from './Suggestion_Box'
import { useGlobalContext } from './Context'
import tip1 from '../Assets/tip1.png'
import tip2 from '../Assets/tip2.png'
import tip3 from '../Assets/tip3.png'
import Rec from "../Assets/rec.png"
const Tips_Tools = () => {
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
                                <h1 className=' text-4xl font-sans font-bold text-white'>Tips and <span>Tools</span></h1>
                                <br />
                                <br />

                                <h2 className=' text-lorange font-sans text-xl'>1. Set up a MetaMask wallet:</h2>
                                <br />
                                <p>Before you start using the fundraiser website, you need to set up a MetaMask wallet. This will allow you to make transactions on the Ethereum network securely. Make sure you follow the setup instructions carefully and keep your private key safe.
                                </p>

                                <br />

                                <h2 className=' text-lorange font-sans text-xl'>2. Verify the website:</h2>

                                <br />

                                <p>Before you list a project or donate to a project, make sure that the website is legitimate and secure. Check for the website's SSL certificate, read reviews, and do your research to ensure the website is trustworthy.</p>


                            </div>
                            <div className='p-6 grid justify-items-center'>
                                <img src={tip1} className=' h-[90%] w-[90%] sm:h-auto sm:w-[70%] md:h-auto md:w-[85%] lg:h-[75%] lg:w-[75%]' />
                            </div>

                        </div>

                        <div className=' w-[96%] h-auto grid grid-cols-1 md:grid-cols-2 text-white text-lg '>

                            <div className=' p-12 '>


                                <h2 className=' text-lorange font-sans text-xl'>4. Keep your private key safe:</h2>
                                <br />
                                <p>Your MetaMask wallet's private key is like your password to access your funds. Make sure you keep it safe and never share it with anyone.

                                </p>
                                <div className=' grid justify-items-start  h-auto w-[100%]'
                                ><img src={Rec} className=' h-20 w-96 rotate-12' /></div>
                                <br />

                                <h2 className=' text-lorange font-sans text-xl'>5. Check the gas price:</h2>

                                <p>This is also make you feel safer while donating because you will be certain that your money is going to the needy and not some greedy scammer.
                                </p>
                                <div className=' grid justify-items-start  h-auto w-[100%]'
                                ><img src={Rec} className=' h-20 w-96 rotate-12' /></div>

                                <br />

                                <h2 className=' text-lorange font-sans text-xl'>6. Set a realistic fundraising goal: </h2>

                                <br />

                                <p>When listing a project, set a realistic fundraising goal. Don't set a goal that's too high or too low. Make sure you have a clear plan for how you will use the funds.
                                </p>
                                <br />
                                <h2 className=' text-lorange font-sans text-xl'>7. Promote your project: </h2>
                                <br />

                                <p>Once you've listed your project, promote it on social media and other platforms to increase visibility. Encourage your followers to share your project with their networks.
                                </p>
                                <br />





                            </div>
                            <div className='p-6 grid justify-items-center'>
                                <img src={tip2} className=' h-[90%] w-[90%] sm:h-auto sm:w-[70%]   md:h-auto md:w-[85%] lg:w-[75%] lg:h-[75%]' />
                            </div>
                            <div className=' grid justify-items-end  h-auto w-[100%]'
                            ><img src={Rec} className=' h-20 w-96 -rotate-12' /></div>
                        </div>

                        <div className=' grid p-6 justify-items-center items-center'>
                            <img src={tip3} className=' h-auto w-[96%] lg:w-[90%] ' />

                        </div>
                        <div className=' grid justify-items-end  h-auto w-[100%]'
                        ><img src={Rec} className=' h-20 w-96 -rotate-12' /></div>





                    </div>



                </div>


            </div>

        </>
    )
}

export default Tips_Tools
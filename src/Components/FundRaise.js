import React from 'react'

const FundRaise = (props) => {
    return (
        <>
            <button className=' text-white mr-1 text-base w-auto px-4 mt-2 md:mr-2  h-10  bg-lred font-bold font-sans rounded-full  duration-500 '  id="meta">
                {props.children}


            </button>
        </>
    )
}

export default FundRaise
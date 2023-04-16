import React from 'react'

const Donate = (props) => {
    return (
        <>
            <button className=' text-dbrown font-bold font-sans ml-1  hover:text-white text-base w-auto px-4 md:mr-2  h-10   rounded-full bg-lorange  duration-500 ' id="meta">
                {props.children}


            </button>
        </>
    )
}

export default Donate
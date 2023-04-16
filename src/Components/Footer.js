import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className=' bg-orange-500 text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-16'>
        <div>
          <img src={logo} />

        </div>
        <div>
          <Link>Home</Link><br/>
          <Link>About Us</Link><br/>
          <Link>Ways to Fundraise</Link><br/>

        </div>
        <div>
          <Link>Tips and Tools</Link><br/>
          <Link>Developers</Link><br/>
          <Link>Sign in</Link><br/>


        </div>
        <div>
          <h1>Social</h1>
          <div className='mt-2 '>
            <span><ion-icon name="logo-youtube"></ion-icon></span>
            <span className=' ml-2'><ion-icon name="logo-twitter"></ion-icon></span>
            <span className=' ml-2'><ion-icon name="logo-instagram"></ion-icon></span>
            <span className=' ml-2'><ion-icon name="logo-facebook"></ion-icon></span>

          </div>
          <p>Email us at <span className=' underline'>fundway@outlook.com</span></p>

        </div>
      </div>

    </>
  )
}

export default Footer
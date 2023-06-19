import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section>
     <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">iMeet- <span className='font-bold tracking-wide'>Auth</span></span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/login'} className="mr-5 hover:text-gray-900">Login</Link>
      <Link to={'/register'} className="mr-5 hover:text-gray-900">Register</Link>
      <Link to={'/about'} className="mr-5 hover:text-gray-900">About</Link>
      <Link to={'/contact'} className="mr-5 hover:text-gray-900">Contact Us</Link>
    </nav>
    
  </div>
</header>

    </section>
  )
}

export default Navbar

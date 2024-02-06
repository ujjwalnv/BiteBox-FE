import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex w-full m-1 p-3 shadow-xl'>
            <span className='grid ml-20 font-bold text-xl'>
                <Link to={'/'}>
                BiteBox
                </Link>
            </span>
            <span className='grid ml-auto mr-5'>
                <Link to={'/cart'}>
                Cart
                </Link>
            </span>
            <span className='grid mr-20'>
                Logout
            </span>
        </nav>
    </>
  )
}

export default Navbar
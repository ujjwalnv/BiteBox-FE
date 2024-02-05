import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='flex w-full m-1 p-3 shadow-xl'>
            <span className='grid ml-10'>BiteBox</span>
            <span className='grid ml-auto mr-5'>Login</span>
            <span className='grid ml mr-5'>Signup</span>
            <span className='grid mr-10'>Cart</span>
        </nav>
    </>
  )
}

export default Navbar
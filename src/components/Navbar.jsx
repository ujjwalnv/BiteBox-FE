import Cookies from 'js-cookie';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    function handleLogout(){
        console.log("handleLogout");
        fetch("http://localhost:8080/logout", {
            method: "DELETE",
            headers: {
              Authorization: "Bearer" + Cookies.get("access_token"),
              "x-auth-token": Cookies.get("access_token"),
              "Content-Type": "application/json",
            }
        })

        Cookies.remove("access_token");
        navigate('login')
    }

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
                <a onClick={handleLogout}>
                    Logout
                </a>
            </span>
        </nav>
    </>
  )
}

export default Navbar
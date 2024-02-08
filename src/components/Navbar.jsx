import Cookies from 'js-cookie';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    async function handleLogout(){
        const access_token = Cookies.get("access_token");
        const refresh_token = Cookies.get("refresh_token");
        console.log(1111);
        if(!access_token){
            Cookies.remove("access_token");
            Cookies.remove("refresh_token");
            navigate('/login');
        } 
        else{
            fetch("http://localhost:8080/logout", {
                method: "DELETE",
                headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-Type": "application/json",
                },
                body: {token: refresh_token}
            })

            Cookies.remove("access_token");
            navigate('/login')
        }
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
import React, { useEffect, useState } from 'react'
import Navbar  from '../components/Navbar'
import RestaurantCard from '../components/RestaurantCard'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Home = () => {
    const navigate = useNavigate();
    const [restaurants, setRestaurant] = useState([])

    useEffect( ()=>{
        const access_token = Cookies.get("access_token");
        if(!access_token){ 
            Cookies.remove("access_token");
            Cookies.remove("refresh_token");
            navigate('/login');
        }

        fetch("http://localhost:8080/restaurant", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            }
        })
        .then(response => { 
            console.log(response.status);
            return response.json()
        })
        .then((res) => {
            setRestaurant(res.data);
        })
        .catch((error) => {
            console.log(error);
        })       
    }, [])
  return (
    <>
    
    <Navbar />
    <RestaurantCard restaurants={restaurants}/>
    
    </>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import Navbar  from '../components/Navbar'
import RestaurantCard from '../components/RestaurantCard'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

const Home = () => {

    const [restaurants, setRestaurant] = useState([])

    useEffect( ()=>{
        fetch("http://localhost:8080/restaurant", {
            method: "GET",
            headers: {
              Authorization: "Bearer" + Cookies.get("access_token"),
              "x-auth-token": Cookies.get("access_token"),
              "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then((res) => setRestaurant(res.data))
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
import React, { useEffect, useState } from 'react'
import Navbar  from '../components/Navbar'
import RestaurantCard from '../components/RestaurantCard'
import { Link } from 'react-router-dom'

const Home = (restaurant) => {

    const [restaurants, setRestaurant] = useState([])

    useEffect( ()=>{
        fetch("http://localhost:8080/restaurant")
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
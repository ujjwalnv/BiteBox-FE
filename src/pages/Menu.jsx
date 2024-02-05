import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Menu = () => {
    const { id } = useParams();
    const [ restaurantData, setRestaurantData ] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/restaurant/${id}`)
        .then(response => response.json())
        .then((res) => setRestaurantData(res))
        .catch((error) => {
            console.log(error);
        }) 
    },[])

  return (
    <div>{restaurantData.name}</div>
  )
}

export default Menu
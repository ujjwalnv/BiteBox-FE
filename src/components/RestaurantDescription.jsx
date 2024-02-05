import React from 'react'
import Clock from "../assets/clock.svg?react";
import Rupees from "../assets/rupees.svg?react";

const RestaurantDescription = (props) => {
  return (
    //TODO: Complete restaurant description component
    <>
       <div className="mx-auto flex w-2/3 grid-cols-2 m-1 p-2 border-dashed border-b-2 border-black">
            <div className='flex flex-col'>
                <span className='text-4xl mt-10 font-bold'>{props.restaurant.name}</span>
                <p className='mt-3 font-extralight'>Lorem ipsum dolor sit amet</p>
                <p className='mt-1 font-extralight'>Kormangala, Bengaluru</p>
                <div className='flex'>
                    <p className='flex flex-row mt-1 font-light'><Clock />25-30 MINS</p>
                    <p className='flex flex-row mt-1 ml-4 font-light'><Rupees />₹250 for two</p>
                </div>
                
            </div>
        </div>
    </>
    
  )
}

export default RestaurantDescription
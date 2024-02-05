import React from "react";
import Star from "../assets/star.svg?react";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  return (
    <>
        {props.restaurants.map((restaurant) => (
            <Link to={`/restaurant/${restaurant._id}`}>
                <div key={restaurant.email} className="flex grid-cols-2 m-1 p-2 shadow-md h-48 hover:scale-95">
                <div className="flex aspect-square items-center">
                <img className="w-full mx-auto" src={restaurant.image} />
                </div>
                <div className="flex flex-col ml-10">
                <div className="text-2xl mt-5 font-bold">
                    {restaurant.name}
                </div>
                <div className="mt-2 flex gap-2">
                    {/* <div><Star /></div> */}
                    <span>4.5</span>
                </div>
                </div>
            </div>
          </Link>
        ))}
    </>
    
  );
};

export default RestaurantCard;

import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [ cartItems, setCartItems ] = useState(new Set());

  function addItem(item) {
    const newSet = new Set([...cartItems, item]);
    setCartItems(newSet);
  }

  function removeItem(item) {
    cartItems.delete(item)
    const newSet = new Set([...cartItems]);
    setCartItems(newSet);
  }

  function addToCart(){
    try {
        localStorage.setItem("cart",JSON.stringify([...cartItems]));
        setCartItems(new Set());
        enqueueSnackbar("Added to Cart", { variant: "success" });
        navigate('/cart')
    } catch (error) {
        enqueueSnackbar(res.message, { variant: "error" });
    }
  }

  return (
    <>
      {props.restaurant.items?.map((item) => (
        <div
          key={item._id}
          className="mx-auto flex w-2/3 m-1 p-2 border-solid border-b-2 border-black-500"
        >
          <div className="flex flex-col w-2/3">
            <span className="text-2xl mt-5 font-bold">{item.name}</span>
            <span>₹{item.price}</span>
            <p className="mt-4 font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex mt-6 ml-10 pl-10">
            {cartItems.has(item) ? <button onClick={(e) => removeItem(item)}>Remove</button> : <button onClick={(e) => addItem(item)}>Add</button>}
            
          </div>
        </div>
        
      ))}
      <button
          className="mx-auto flex w-2/3 justify-center mt-2 bg-orange-300 border-solid border-2 border-black p-1"
          type='button'
          onClick={(e) => addToCart()}
        >
          Add to Cart
        </button>
    </>
  );
};

export default MenuItem;

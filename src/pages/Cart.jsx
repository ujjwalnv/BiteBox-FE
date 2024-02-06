import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Cart = () => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [ cartData, setCartData ] = useState();

    function getTotalAmount(){
        let totalAmount = 0;
        cartData.forEach(e => {
            totalAmount += e.price;
        });
        return totalAmount
    }

    function order(){
        try {
            localStorage.removeItem("cart");
            enqueueSnackbar("Ordered Successfully", { variant: "success" });
            navigate('/');
        } catch (error) {
            enqueueSnackbar(res.message, { variant: "error" });
        }
    }

    function removeItems(){
        try {
            localStorage.removeItem("cart");
            enqueueSnackbar("Cart is empty now", { variant: "success" });
            navigate('/');
        } catch (error) {
            enqueueSnackbar(res.message, { variant: "error" });
        }
    }

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart'));
        setCartData(cartData);
    }, [])
  return (
    <div>
        <Navbar />
        {cartData && <div className='className="flex flex-col mx-auto w-2/3 m-1 p-4'>
            <div className="flex mx-auto text-2xl mb-3 justify-center font-bold border-double border-2 border-black p-4">
                Cart
            </div>
            {cartData.map((cartItem) => (
                <div className="flex flex-row">
                    <span className="flex text-2xl mt-1 ml-5 font-bold">{cartItem.name}</span>
                    <span className='flex text-2xl ml-auto mr-5 mt-1 font-normal'>₹{cartItem.price}</span>
                </div>
            ))}
            <div className="flex flex-row mt-2 border-solid border-t-2 border-black-500">
                    <span className="flex text-2xl ml-5 font-bold">Total Amount </span>
                    <span className='flex text-2xl ml-auto mr-5 font-normal'>₹{getTotalAmount()}</span>
                </div>
             <button
                className="mx-auto flex w-full justify-center mt-2 bg-orange-300 border-solid border-2 border-black p-1"
                type='button'
                onClick={(e) => order()}
            >
                Order
            </button>
            <button
                className="mx-auto flex w-full justify-center mt-2 bg-red-500 border-solid border-2 border-black p-1"
                type='button'
                onClick={(e) => removeItems()}
            >
                Remove all items
            </button>
        </div>}
        {!cartData && <div className='className="flex flex-col mx-auto w-2/3 m-1 p-4'>
            <div className="flex mx-auto text-2xl justify-center font-bold border-double border-2 border-black p-4">
                Cart is Empty
            </div>
        </div>}
    </div>
  )
}

export default Cart
import React from 'react'

const MenuItem = (props) => {
  return (
    <>
        {props.restaurant.items?.map((item)=>(
        <div key={item._id} className="mx-auto flex w-2/3 grid-cols-2 m-1 p-2 h-48 border-solid border-b-2 border-black-500">
            <div className='flex flex-col'>
                <span className='text-2xl mt-5 font-bold'>{item.name}</span>
                <span>₹{item.price}</span>
                <p className='mt-4 font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex mt-6 ml-5'>
                Button
            </div>
        </div>
        ))}
    </>
  )
}

export default MenuItem

/*
<>
    {props.restaurant.items.map(()=>(
        
    ))}
    </>
 */   
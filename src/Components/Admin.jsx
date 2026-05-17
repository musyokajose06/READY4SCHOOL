import React, { useState } from 'react'

export default function Admin() {
  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemPrice, setItemPrice] = useState('')
  const [itemImage, setItemImage] = useState('')
  const [submitDate, setSubmitDate] = useState('')

  return (
    <form className="mt-15 p-2 border rounded-md w-100 bg-opacity-80 backdrop-blur-sm shadow-md">
        <div className="p-2 space-y-2">
            <h1 className="text-2xl font-bold style font-serif">ADD ITEM</h1>
            <p className="text-sm">Enter New Item</p>            
        </div>
        <div className="p-2 space-y-2 w-full flex flex-col items-center justify-center">
            <input 
                type="text" 
                placeholder='Enter item name'
                className="border rounded p-2 w-full"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Item description'
                className="border rounded p-2 w-full"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Enter item price'
                className="border rounded p-2 w-full"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Enter image URL'
                className="border rounded p-2 w-full"
                value={itemImage}
                onChange={(e) => setItemImage(e.target.value)}
            />
            <input 
                type="date" 
                placeholder='dd/mm/yyyy'
                className="border rounded p-2 w-full"
                value={submitDate}
                onChange={(e) => setSubmitDate(e.target.value)}
            />
            <button className="w-70 mt-2 border rounded-md px-2 bg-white text-black font-bold hover:bg-black hover:text-white hover:transform hover:scale-105 ease-in duration-300">Submit</button>            
        </div>


    </form>
  )
}

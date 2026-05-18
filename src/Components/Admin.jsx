import { useState } from 'react'
import Toast from './Toast'

export default function Admin() {
  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemPrice, setItemPrice] = useState('')
  const [itemImage, setItemImage] = useState('')
  const [submitDate, setSubmitDate] = useState('')
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' })

  const handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      name: itemName,
      description: itemDescription,
      price: parseFloat(itemPrice),
      image: itemImage,
      submitDate,
    }

    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log('Success:', data)
        setToast({ visible: true, message: 'Item submitted successfully!', type: 'success' })
        setItemName('')
        setItemDescription('')
        setItemPrice('')
        setItemImage('')
        setSubmitDate('')
      })
      .catch((error) => {
        console.error('Error:', error)
        setToast({ visible: true, message: 'Failed to submit item. Start json-server on port 3001 first.', type: 'error' })
      })
  }

  return (
    <form
      className="mt-15 p-2 border rounded-md w-[500px] bg-opacity-80 backdrop-blur-sm shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="p-2 space-y-2">
        <h1 className="text-2xl font-bold font-serif">ADD ITEM</h1>
        <p className="text-sm">Enter New Item</p>
      </div>

      <div className="p-2 space-y-2 w-full flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Enter item name"
          className="border rounded p-2 w-full"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item description"
          className="border rounded p-2 w-full"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Enter item price"
          className="border rounded p-2 w-full"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter image URL"
          className="border rounded p-2 w-full"
          value={itemImage}
          onChange={(e) => setItemImage(e.target.value)}
        />
        <input
          type="date"
          className="border rounded p-2 w-full"
          value={submitDate}
          onChange={(e) => setSubmitDate(e.target.value)}
        />

        <button
          type="submit"
          className="w-full mt-2 border rounded-md px-2 bg-white text-black font-bold hover:bg-black hover:text-white hover:transform hover:scale-105 ease-in duration-300"
        >
          Submit
        </button>

        <Toast
          visible={toast.visible}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast((t) => ({ ...t, visible: false }))}
        />
      </div>
    </form>
  )
}

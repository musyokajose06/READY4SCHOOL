import React from 'react'
import { Search } from 'lucide-react'

export default function Shop() {
  return (
    <div className="flex flex-row justify-center items-center h-full gap-6">
      <input type="text"
             placeholder="Search products..."
             className="mt-6 w-[500px] border rounded-md px-4 py-2 mb-4 bg-opacity-80 backdrop-blur-sm shadow-md focus:outline-none " 
      />
      <Search className="mt-3 text-black" />

    </div>
  )
}

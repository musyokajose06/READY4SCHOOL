import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-6">
      <p className="text-center text-2xl mb-6 font-bold font-serif">WELCOME, STUDENT!</p>
      <h1 className="text-5xl md:text-6xl font-bold font-serif text-center">
        READY <span className="text-blue-500 font-bold text-8xl md:text-9xl">4</span> SCHOOL!
      </h1>
      <div className='flex flex-row gap-8 mt-15 justify-center items-center'>
        <button className='border rounded-md px-6 py-2 font-semibold bg-opacity-80 backdrop-blur-sm shadow-md hover:scale-115 ease-in-out duration-300'>SIGN UP</button>
        <button className='border rounded-md px-6 py-2 font-semibold  bg-opacity-80 backdrop-blur-sm shadow-md hover:scale-115 ease-in-out duration-300'>LOGIN</button>
      </div>
    </div>
  )
}

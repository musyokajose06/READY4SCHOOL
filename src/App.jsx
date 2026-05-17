import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Layout/Header'
import Shop from './Components/Shop'
import Admin from './Components/Admin'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('https://images.unsplash.com/photo-1580569214296-5cf2bffc5ccd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Header />

      <main className="flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

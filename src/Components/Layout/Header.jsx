import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    HomeIcon,
    ShoppingBagIcon,
    ShieldCheckIcon,
} from "lucide-react";

const navigation = [
    { 
        name: 'Home', 
        path: '/', 
        icon: HomeIcon },
    { 
        name: 'Products', 
        path: '/products', 
        icon: ShoppingBagIcon },
    { 
        name: 'Admin', 
        path: '/admin', 
        icon: ShieldCheckIcon },
]

export default function Header() {
  return (
    <div className=" bg-opacity-80 backdrop-blur-sm shadow-md">
      <nav className="p-4 flex justify-center items-center">
        <ul className="flex w-full max-w-4xl justify-between items-center">
          {navigation.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <NavLink to={path} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>
                <Icon />
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  )
}

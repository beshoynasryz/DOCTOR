import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
 
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
    
        <ul className='hidden md:flex items-start gap-5'>
          <NavLink >
            <li>home</li>
            <hr />
          </NavLink> 
          <NavLink>
            <li>All Doctors</li>
            <hr />
          </NavLink>
          <NavLink>
            <li>about</li>
            <hr />
          </NavLink>
          <NavLink>
            <li>Contact</li>
            <hr />
          </NavLink>

        </ul>
        <div>
          <button>Create account</button>
        </div>

        </div >  
 
  )
}

export default Navbar

import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
    <div>
      <img src={assets.logo} alt="" />
    </div>
        <ul>
          <NavLink >
            <li>home</li>
            <hr />
          </NavLink> 
          <NavLink>
            <li>about</li>
            <hr />
          </NavLink>
          <NavLink>
            <li>Doctors</li>
            <hr />
          </NavLink>
          <NavLink>
            <li>About</li>
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
   </>
  )
}

export default Navbar

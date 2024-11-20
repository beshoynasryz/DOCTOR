import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        {/* {--------------LEFT SIDE ------------------} */}
        <div>
            <p>
                BOOK APPOINTMENT <br/> With Trusted Doctors 
            </p>
            <div>
                <img src={assets.group_profiles} alt="" />
                <p>Simply browse thorugh our extensive list of trusted doctors ,<br/> schedule your appointment hassle-free</p>
            </div>
            <a href="">
                Book Appointment <img src={assets.arrow_icon} alt="" /> 
            </a>

        </div>
        {/* {--------------RIGHT SIDE ------------------} */}
            <div>
                <img src={assets.header_img} alt="" />
            </div>
      
    </div>
  )
}

export default Header

import React from 'react'

import './NavBar.scss';
import { images } from '../../constants';

const NavBar = () => {
  return (
    <nav>
        <div>
            <img src={images.email} alt='email'/>
        </div>
    </nav>
  )
}

export default NavBar
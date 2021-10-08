import React from 'react';
import LogoSvg from "../../svg/LogoSvg";
import './Logo.scss'
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/collection'>
      <h1 className='logo'><LogoSvg /> Champions</h1>
    </Link>
  );
}

export default Logo;
import React from 'react';
import {Link} from "react-router-dom";
import LogoSvg from "../../svg/LogoSvg";
import {COLLECTION} from "../../Constants";
import './Logo.scss'

const Logo = () => {
  return (
    <Link to={COLLECTION}>
      <h1 className='logo'><LogoSvg /> Champions</h1>
    </Link>
  );
}

export default Logo;
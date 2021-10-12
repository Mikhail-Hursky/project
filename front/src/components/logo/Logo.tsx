import React from 'react';
import LogoSvg from "../../svg/LogoSvg";
import './Logo.scss'
import {Link} from "react-router-dom";
import {COLLECTION} from "../../Constants";

const Logo = () => {
  return (
    <Link to={COLLECTION}>
      <h1 className='logo'><LogoSvg /> Champions</h1>
    </Link>
  );
}

export default Logo;
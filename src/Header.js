import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';



function Header(){


  return(
    <div className ="header">

    {/*<Link to ="/">*/}
      <img
      className = "header__logo"
      src = {logo} />
    {/*</Link> */}

 <div className = "header__nav">
    {/*<Link to ='/login'>*/}
      <div className = "header__option">
        <span
        className = "header_optionLineOne">Contact Us</span>

      </div>
    {/*</Link>*/}
 </div>

    </div>


  );
}

export default Header;

import React from 'react';
import './Topbar.css';
import Logo from '../../assets/apifolio_logo.png';

function Topbar() {
  return (
    <div className="topbar">
      <img src={Logo} alt='logo'></img>
      <h1>Portfolio</h1>
    </div>
  );
};

export default Topbar;

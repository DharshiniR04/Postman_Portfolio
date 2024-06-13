import React from 'react';
import './Sidebar.css';
import { FaUser, FaBook, FaAddressBook } from 'react-icons/fa';


const Sidebar = ({ setSelected }) => {
  return (
    <div className="sidebar">

      <ul>
        <li className="tooltip" onClick={() => setSelected('welcome')}>
          <FaUser size={20} color="white" />
          <span className="tooltiptext">Workspace</span>
        </li>
        <li className="tooltip" onClick={() => setSelected('guide')}>
          <FaBook size={20} color="white" />
          <span className="tooltiptext">Guide</span>
        </li>
        <li className="tooltip" onClick={() => setSelected('contact')}>
          <FaAddressBook size={20} color="white" />
          <span className="tooltiptext">Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

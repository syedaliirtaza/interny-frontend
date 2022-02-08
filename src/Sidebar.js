import React from 'react';
import "./Sidebar.css";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

function Sidebar() {
  return <div className='sideBar'>
      <div className='sideBarHeader'>
        <div className='sideBarHeader_icon'>
          <MenuSharpIcon fontSize="large"/>
        </div>
        <div className='sideBarHeader_heading'>
          <h1 className='heading'>Interny</h1>
        </div>
      </div>
      <div className='sideBarMain'>
        <div className='sideBarMain_head'>
          <h1 className='mainHeading'>Find Your <span className='heading_focus'>Desired</span> Internship</h1>
          <p className='mainParagraph'>THE #1 INTERNSHIP COMMUNITY, HANDPICK INTERNSHIPS IN PAKISTAN</p>
        </div>
        <div className='sideBarMain_Button'>
          <button className='button_getIn'>GET IN</button>
        </div>
      </div>
      <div className='socials'>
        <small>Made with ❤ by <a href='https://www.linkedin.com/in/syed-ali-irtaza-71102b143/'>Syed Ali Irtaza</a></small>
        </div>
  </div>;
}

export default Sidebar;

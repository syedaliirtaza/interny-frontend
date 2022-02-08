import { Button } from '@mui/material';
import React, {useEffect, useState} from 'react';
import './App.css';
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
//   const [itInternships, setItInternships ] = useState([]);
//   const [businessInternships, setBusinessInternships ] = useState([]);

//   useEffect(()=>{
//     getBusinessInternships();
//     getItInternships();
//   },[]);

//   const getItInternships = async () => {
//     await axios.get("/sync/it/internships")
//     .then(response => {
//       const value = JSON.stringify(response.data);
//       setItInternships(value);
//   });
// }

// const getBusinessInternships = async () => {
//   await axios.get("/sync/business/internships")
//   .then(response => {
//     const value = JSON.stringify(response.data);
//     setBusinessInternships(value);
// });
// }

  return (
    <div className="app">
        <div className='appBody'>
          <Sidebar />
          <Main />
        </div>
      </div>
  );
}

export default App;

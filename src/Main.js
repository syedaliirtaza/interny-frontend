import React, { useEffect, useState } from 'react';
import "./Main.css";
import Button from '@mui/material/Button';
import axios from "./axios";
import Skelton from "./Skelton";
import { keyframes } from '@emotion/react';
import Card from "./Card";

function Main() {
  const [isFocus, setIsFocus] = useState("1");
  const [isloading, setIsLoading] = useState(false);
  const [itInternships, setItInternships ] = useState({});
  const [businessInternships, setBusinessInternships ] = useState([]);
  const [designInternships, setDesignInternships ] = useState([]);
  const [otherInternships, setOtherInternships ] = useState([]);


  const getItInternships = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const controller = new AbortController();
    try{
      await axios.get("/sync/it/internships", {
        signal: controller.signal
      })
    .then(response => {
          let value = response.data;
          console.log(value)
          let obj = {};
          let keys = Object.keys(value);
          let values = Object.values(value)
          for (var i = 0; i < keys.length; i++) {
            obj[keys[i]] = values[i];
          } 
          setItInternships(obj); 
          // console.log(obj)
          setIsLoading(false)
        });
    } catch(err){}
    controller.abort()
    
}


const getBusinessInternships = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try{
    await axios.get("/sync/business/internships")
  .then(response => {
    let value = response.data;
    console.log(value)
    let obj = {};
    let keys = Object.keys(value);
    let values = Object.values(value)
    for (var i = 0; i < keys.length; i++) {
      obj[keys[i]] = values[i];
    } 
    setBusinessInternships(obj); 
    // console.log(obj)
    setIsLoading(false)
      });
  } catch(err){}
  setIsLoading(false)
}

const getDesignInternships = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try{
    await axios.get("/sync/design/internships")
  .then(response => {
    let value = response.data;
    console.log(value)
    let obj = {};
    let keys = Object.keys(value);
    let values = Object.values(value)
    for (var i = 0; i < keys.length; i++) {
      obj[keys[i]] = values[i];
    } 
    setDesignInternships(obj); 
    // console.log(obj)
    setIsLoading(false)
      });
  } catch(err){}
  setIsLoading(false)
}

const getOtherInternships = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try{
    await axios.get("/sync/other/internships")
  .then(response => {
    let value = response.data;
    console.log(value)
    let obj = {};
    let keys = Object.keys(value);
    let values = Object.values(value)
    for (var i = 0; i < keys.length; i++) {
      obj[keys[i]] = values[i];
    } 
    setOtherInternships(obj); 
    // console.log(obj)
    setIsLoading(false)
      });
  } catch(err){}
  setIsLoading(false)
}

const renderJobs = () => {
  if(!isloading && isFocus === "2"){
    return <Card internships={itInternships} /> 
  } else if(!isloading && isFocus === "3"){
    return <Card internships={businessInternships} />
  } else if(!isloading && isFocus === "4"){
    return <Card internships={designInternships} />
  } else if(!isloading && isFocus === "5"){
    return <Card internships={otherInternships} />
  } else {
    return <Skelton />
  }
}

  return( 
  <div className='main'>
      <div className='mainHeader'>
        <div className='mainHeader_buttons'>
          <Button className="mainButton" variant={isFocus === "1" ? "text" : "contained"} onClick={()=> setIsFocus("1")}>Featured</Button>
          <Button className="mainButton" variant={isFocus === "2" ? "text" : "contained"} onClick={(e)=> {
            setIsFocus("2")
            getItInternships(e)
            }}>IT</Button>
          <Button className="mainButton" variant={isFocus === "3" ? "text" : "contained"} onClick={(e)=> {
            setIsFocus("3")
            getBusinessInternships(e)
            }}>BUSINESS</Button>
          <Button className="mainButton" variant={isFocus === "4" ? "text" : "contained"} onClick={(e)=> {
            setIsFocus("4")
            getDesignInternships(e)
            }}>DESIGN</Button>
          <Button className="mainButton" variant={isFocus === "5" ? "text" : "contained"} onClick={(e)=> {
            setIsFocus("5")
            getOtherInternships(e)
            }}>OTHER</Button>
        </div>
      </div>
      <div className='mainBody'>
      {renderJobs()}
      </div>
  </div>
  );
}

export default Main;

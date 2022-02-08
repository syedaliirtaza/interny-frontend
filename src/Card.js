import React from 'react';
import "./Card.css";

function Card({internships}) {
  return (
      <div>
    {Object.entries(internships).map((key,val)=>{
        return(
      <div key={key} className='mainBody_card'>
            <div className='cardHeading'>
              <span className='organisation'>{internships[val].organisaion}</span>
              <h1 className='title'>{internships[val].title.substring(0,14) + "..."}</h1>
            </div>
            <div className='cardLoaction'>
              <div>
              <p className='location'>{internships[val].location}</p>
              <p className='type'>{internships[val].type}</p>
              </div>
              <p className='date space'>{internships[val].date}</p>
            </div>
            <div className='cardLink'>
              <button className="button">APPLY</button>
            </div>
        </div>
          )
    })}
    </div>
  );
}

export default Card;

import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Event from './event';
import { AddEvent } from './states/slice';
import { useSelector, useDispatch } from 'react-redux';
import './events.css';
let isFirst = true;

const Events = () => {
  const dispatch = useDispatch();
  const events = [
    ...useSelector<{ event: Event[] }, Event[]>((state) => state.event),
  ];
 
  useEffect(()=>{
    if (!isFirst){
      fetch('https://my-app-bad47-default-rtdb.firebaseio.com/',{
        method: 'PUT',
        body: JSON.stringify(events)
      }).catch(e=>console.log(e))
  
    }
    isFirst=false
  },[events])
  useEffect(()=>{

    fetch('https://my-app-bad47-default-rtdb.firebaseio.com/')
    .then(data=>{
      dispatch(AddEvent.replace(data))
     
    })
    .catch(e=>{console.log(e); })
},[])
  return (
    <div className="main">
      {events.length > 0 &&
        events.map((e: Event) => (
          <div >
            <div className="card">
              <div className="card-body">
                <div className="numberCircle">{e.date}</div>
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Events;

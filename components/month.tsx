import React, { useEffect, useState } from 'react';
import moment from 'jalali-moment'
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import './home.css';
import Modal from './modal/modal';
const Month = (props) => {
  let days29 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29,
  ];
  let days30 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  let days31 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let days=[];
  let month = [
    
    'newroz',
    'gwlan',
    'jozardan',
    'pwshpar',
    'galawezh',
    'xarmanan',
    'razbar',
    'xazalwar',
    'sarmawaz',
    'bafranbar',
    'rebandan',
    'rashame',
  ];
  var monthK =(moment().locale('fa').format('MM'))-1
  let dayK= moment().locale('fa').format('D')
  const dispatch = useDispatch()
  let active = false;
  const { Name } = useParams();
  let index = 0;
  
  for (var i = 0; i < month.length; i++) {
    if (Name === month[i])
     {
      index=i;
    }
  }
  if(index>=1&&index<7)
  days=days31;
  else if(index>=7&&index<12)
  days=days30
  else
  days=days29;
  const [monthDay,setMonthDay]= useState("");
  const [showModal, setShowModal] = useState(false);
   const state={data:monthDay}
  
  return (
    <div>

{showModal && (
        <Modal
          onCloseButtonClick={() => {
            setShowModal(false);
          
          }}
           mon={()=>
          {
            return monthDay
          }
          }
        
          />
        )}
      <div className="calendar">
        <header className={` ${monthK == index ? 'active' : 'null'}`}>
          <h1>{Name}</h1>
        </header>

        <ul className="weekdays">
          <li>
            <abbr title="S">Sunday</abbr>
          </li>
          <li>
            <abbr title="M">Monday</abbr>
          </li>
          <li>
            <abbr title="T">Tuesday</abbr>
          </li>
          <li>
            <abbr title="W">Wednesday</abbr>
          </li>
          <li>
            <abbr title="T">Thursday</abbr>
          </li>
          <li>
            <abbr title="F">Friday</abbr>
          </li>
          <li>
            <abbr title="S">Saturday</abbr>
          </li>
        </ul>

        <ol className="day-grid">
          {days.map((d) => (
            <li
              className={` ${dayK == d && monthK == index ? 'active' : 'null'}`}
              onClick={() => {
                setShowModal(true);
                setMonthDay(d.toString()+ " " +Name);
              
              }
            
            
            }
            >
              {d   }
            </li>
          ))
          
         
        
          }
        </ol>
      </div>
    </div>
  );
};
export default Month;

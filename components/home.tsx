import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'jalali-moment'
import './home.css';
const Home = () => {
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

  let active = false;

  return (
    <div>
     
      <Link to={`/month/${month[0]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK == 0 ? 'active' : 'null'}`}>
            <h1>{month[0]}</h1>
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
            <li className="monthprev"></li>
            {days31.map((d) => (
              <li
                className={` ${dayK == d && monthK == 0 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[1]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK ==1 ? 'active' : 'null'}`}>
            <h1>{month[1]}</h1>
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
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            {days31.map((d) => (
              <li
                className={` ${dayK == d && monthK ==1 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link >
      <Link to={`/month/${month[2]}`}className="link">
        <div className="calendar">
          <header className={` ${monthK == 2 ? 'active' : 'null'}`}>
            <h1>{month[2]}</h1>
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
            {days31.map((d) => (
              <li
                className={` ${dayK == d && monthK == 2 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[3]}`}className="link">
        <div className="calendar">
          <header className={` ${monthK == 3 ? 'active' : 'null'}`}>
            <h1>{month[3]}</h1>
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
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            {days31.map((d) => (
              <li
                className={` ${dayK == d && monthK == 3 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[4]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK == 4 ? 'active' : 'null'}`}>
            <h1>{month[4]}</h1>
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
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            {days31.map((d) => (
              <li
                className={` ${dayK == d && monthK == 4 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[5]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK == 5 ? 'active' : 'null'}`}>
            <h1>{month[5]}</h1>
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
            {days31.map((d) => (
              <li
                className={` ${dayK == d && monthK ==5 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[6]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK == 6 ? 'active' : 'null'}`}>
            <h1>{month[6]}</h1>
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
            {days30.map((d) => (
              <li
                className={` ${dayK == d && monthK == 6 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[7]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK ==7 ? 'active' : 'null'}`}>
            <h1>{month[7]}</h1>
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
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            {days30.map((d) => (
              <li
                className={` ${dayK == d && monthK == 7 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[8]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK == 8 ? 'active' : 'null'}`}>
            <h1>{month[8]}</h1>
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
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            <li className="monthprev"></li>
            {days30.map((d) => (
              <li
                className={` ${dayK == d && monthK ==8 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[9]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK == 9 ? 'active' : 'null'}`}>
            <h1>{month[9]}</h1>
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
            {days30.map((d) => (
              <li
                className={` ${dayK == d && monthK == 9 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[10]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK == 10 ? 'active' : 'null'}`}>
            <h1>{month[10]}</h1>
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
            {days30.map((d) => (
              <li
                className={` ${dayK == d && monthK == 10 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
      <Link to={`/month/${month[11]}`} className="link">
        <div className="calendar">
          <header className={` ${monthK == 11 ? 'active' : 'null'}`}>
            <h1>{month[11]}</h1>
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
            {days30.map((d) => (
              <li
                className={` ${dayK == d && monthK == 11 ? 'active' : 'null'}`}
              >
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Link>
    </div>
  );
};
export default Home;

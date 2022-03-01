import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../components/home';
import Events from '../components/events'
import './header'
const Header = () => {

    return (
      <header className='headerr'>
        <h4> kurdish calendar </h4>
          <Link to="/" className="link">Home</Link>
          <Link to='Events' className="link" >events</Link>
        </header>
  )
}
export default Header
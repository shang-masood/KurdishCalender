import { Route, Routes } from 'react-router';
import React from 'react';
import Home from './components/home';
import Events from './components/events';
import Month from './components/month';
const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Events" element={<Events />}></Route>
    <Route path="/Month/:Name" element={<Month />}></Route>
  </Routes>
);

export default Routing;

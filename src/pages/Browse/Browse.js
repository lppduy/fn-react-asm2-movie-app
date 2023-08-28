import './Browse.css';

import React from 'react';
import Navbar from '../../components/Browse/Navbar';
import Banner from '../../components/Browse/Banner';

const Browse = () => {
  return (
    <div className="app">
      {/* <h1>Browse</h1> */}
      <Navbar />
      <Banner />
    </div>
  );
};

export default Browse;

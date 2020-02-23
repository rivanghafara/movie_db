import React from 'react';
import PopularTV from '../../components/Grid-Show/grid-tv'
import Navbar from '../../components/General/navbar'

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="pt-4 pb-4 text-4xl">Popular TV Series </h1>
        <div className="pb-8 grid grid-cols-4 gap-10">
          <PopularTV />
        </div>
      </div>
    </div>
  );
}


export default Homepage
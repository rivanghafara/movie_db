import React from 'react';
import PopularMovie from '../../components/Grid-Show/grid-movies'
import Navbar from '../../components/General/navbar'

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="pt-4 pb-4 text-4xl">Popular Movies </h1>
        <div className="pb-8 grid grid-cols-4 gap-10">
          <PopularMovie />
        </div>
      </div>
    </div>
  );
}


export default Homepage
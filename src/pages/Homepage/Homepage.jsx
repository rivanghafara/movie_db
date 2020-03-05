import React from 'react';
// import PopularMovie from '../../components/Grid-Show/grid-movies'
import Navbar from '../../components/General/navbar'
import PopularMovie from '../../components/Grid-Show/grid-movies';
import Searchbox from "../../components/General/searchbox";

function Homepage() {
  return (
    <div>
        <Searchbox />
      <div className="container mx-auto">
        <div className="grid grid-flow-col-dense grid-cols-12 gap-2">
          <div className="col-span-2 bg-gray-200 -ml-12">
            <div className="grid-rows fixed">
              <Navbar />
            </div>
          </div>
          <div className="col-span-10 ... bg-gray-200 -mr-12">
            <div className="grid grid-cols-5 gap-4">
              <PopularMovie />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Homepage
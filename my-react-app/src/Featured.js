import React from 'react';
import './featured.css';
import JJK from './img/JJK.jpg'
import DMS from './img/DMS.jpg'
import OPC from './img/OPC.jpg'
import MHA from './img/MHA.jpg'

const FeaturedShows = () => {
  return (
    <div className="featured-shows-container">
      <div className="featured-show">
        {/* Show Image */}
        <img src={JJK} alt="Show 1" />

        {/* Show Info */}
        <div className="show-info">
          <h3>Show Title</h3>
          <p>Show Description</p>
        </div>
      </div>

      <div className="featured-show">
        {/* Show Image */}
        <img src={DMS} alt="Show 2" />

        {/* Show Info */}
        <div className="show-info">
          <h3>Show Title</h3>
          <p>Show Description</p>
        </div>
      </div>

      <div className="featured-show">
        {/* Show Image */}
        <img src={MHA} alt="Show 3" />

        {/* Show Info */}
        <div className="show-info">
          <h3>Show Title</h3>
          <p>Show Description</p>
        </div>
      </div>

      <div className="featured-show">
        {/* Show Image */}
        <img src={OPC} alt="Show 4" />

        {/* Show Info */}
        <div className="show-info">
          <h3>Show Title</h3>
          <p>Show Description</p>
        </div>
      </div>

    </div>
  );
};

export default FeaturedShows;

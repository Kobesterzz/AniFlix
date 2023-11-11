import React from 'react';
import './featured.css';
import JJK from './img/JJK.jpg'
import DMS from './img/DMS.jpg'
import OPC from './img/OPC.jpg'
import MHA from './img/MHA.jpg'




const FeaturedShows = () => {

  return (
    <div className="featured-shows-container"     >
      <div className="featured-show" >
        {/* Show Image */}
        <img src={JJK} alt="Show 1" />

        {/* Show Info */}
        <div className="show-info">
          <h3>Jujutsu Kaisen</h3>
          <p>Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. <br/>
            One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, <br/>
            taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna.</p>
        </div>
      </div>

      <div className="featured-show" >
        {/* Show Image */}
        <img src={MHA} alt="Show 1" />

        {/* Show Info */}
        <div className="show-info">
          <h3>Jujutsu Kaisen</h3>
          <p>Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. <br/>
            One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, <br/>
            taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna.</p>
        </div>
      </div>

      <div className="featured-show" >
        {/* Show Image */}
        <img src={OPC} alt="Show 1" />

        {/* Show Info */}
        <div className="show-info">
          <h3>Jujutsu Kaisen</h3>
          <p>Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. <br/>
            One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, <br/>
            taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna.</p>
        </div>
      </div>

      <div className="featured-show" >
        {/* Show Image */}
        <img src={DMS} alt="Show 1" />

        {/* Show Info */}
        <div className="show-info">
          <h3>Jujutsu Kaisen</h3>
          <p>Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. <br/>
            One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, <br/>
            taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna.</p>
        </div>
      </div>

    </div>


  );
};

export default FeaturedShows;

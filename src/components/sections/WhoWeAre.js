import React from 'react';
import WhoWeAre from '../common/WhoWeAre/WhoWeAre';
import Circle from '../common/WhoWeAre/Circle';
import Dots from '../common/Dots';
import Missions from '../common/Mission/Missions';


const WhoWeArey = () => {
  return(
    <div className="site-section cta-big-image" id="about-section">
    <div className="container">
         <WhoWeAre />
         <Dots />
         <Circle />
         <Missions />
     </div> 
  </div>   
  );
}

export default WhoWeArey;
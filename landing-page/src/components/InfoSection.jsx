import React from 'react';
import kirby from '../images/kirby';
import hatkirby from '../images/hat-kirby';
import orangekirby from '../images/orange-kirby';
import starkirby from '../images/star-kirby';

const InfoSection = () => {
  return (
    <div className="info-section">
      <h1 className="info-header">Kirby Information</h1>
      <div className="info-container">
        <div className="image-item">
          <img src={hatkirby} alt="image one" className="info-image" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam
            enim aliquam, saepe quas a quae dolores expedita in quasi.
          </p>
        </div>
        <div className="image-item">
          <img src={orangekirby} alt="image two" className="info-image" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam
            enim aliquam, saepe quas a quae dolores expedita in quasi.
          </p>
        </div>
        <div className="image-item">
          <img src={kirby} alt="image three" className="info-image" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam
            enim aliquam, saepe quas a quae dolores expedita in quasi.
          </p>
        </div>
        <div className="image-item">
          <img src={starkirby} alt="image four" className="info-image" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam
            enim aliquam, saepe quas a quae dolores expedita in quasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;

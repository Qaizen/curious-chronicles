import React from 'react';
import yotsuba from '../../assets/yotsuba.jpg'

function AboutPage() {
  return (
    <div className="about-page">
      <div className="info-section">
        <div className="info-image">
          <img src={yotsuba} alt="Place Holder" />
        </div>
        <div className="info-text">
          <p>&#9996;</p>
          <h2>Curious Chronicles</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

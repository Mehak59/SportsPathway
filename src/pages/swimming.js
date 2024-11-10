import React from 'react';
import './temp.css';

const Swimming = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Swimming</h1>
          <p>
            Swimming is a water-based sport where individuals or teams race against each other using various strokes.
          </p>
        </div>
      </section>

      {/* 1st Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/swim1.webp" width="480px" height="430px" alt="Swimming" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS SWIMMING?</h5>
          <p>
            Swimming is an aquatic sport where participants race using different swimming styles, such as freestyle, breaststroke, backstroke, and butterfly.
          </p>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Swimwear: </b>Comfortable clothing designed for swimming.<br />
            <b>Goggles: </b>Protective eyewear to improve visibility underwater.<br />
            <b>Swimming Cap: </b>Helps to keep the swimmer’s hair out of their face and reduces drag.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/swim3.png
" width="480px" height="430px" alt="Swimming Gear" />
        </div>
      </section>

      {/* 3rd Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/swimequip.jpg" width="480px" height="430px" alt="Swimming Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO SWIM?</h5>
          <p>
            Swimming involves alternating strokes in the water. The most common strokes include freestyle, backstroke, breaststroke, and butterfly.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW IS IT SCORED?</h5>
          <p>
            In competitive swimming, the swimmer who reaches the finish line first is awarded the gold medal. Times are measured precisely to determine rankings.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/swim_pool2.png" width="480px" height="430px" alt="Swimming Scoring" />
        </div>
      </section>

      {/* 5th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/swim2.jpg" width="480px" height="430px" alt="History of Swimming" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF SWIMMING</h5>
          <p>
            Swimming has been practiced since ancient times. Modern competitive swimming evolved in the 19th century, and it became part of the Olympic Games in 1896.
          </p>
        </div>
      </section>

      {/* 6th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            Each stroke requires specific techniques, such as proper arm movement, breathing technique, and leg kicks, to maximize speed and efficiency in the water.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/indian_swim.jpeg" width="480px" height="430px" alt="Swimming Techniques" />
        </div>
      </section>

      {/* 7th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/swim_compete.jpg" width="480px" height="430px" alt="Swimming Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR SWIMMING</h5>
          <p>
            Training involves building endurance, practicing different strokes, and improving technique through drills and regular practice.
          </p>
        </div>
      </section>

      {/* 8th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            The fastest 100m freestyle swim was completed in under 47 seconds, showing the incredible speed and athleticism required for the sport.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/swim_phelps.jpeg" width="480px" height="430px" alt="Swimming Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default Swimming;

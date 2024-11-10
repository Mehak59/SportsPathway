import React from 'react';
import './temp.css';

const Skating = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Skating</h1>
          <p>
            Skating is an activity that involves traveling on surfaces, typically ice or roller rinks, with skates.
          </p>
        </div>
      </section>

      {/* 1st Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/skating1.jpg" width="480px" height="430px" alt="Skating" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS SKATING?</h5>
          <p>
            Skating involves gliding on surfaces with the help of skates, and it can be done for leisure, sport, or artistic expression.
          </p>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Skates: </b>Specialized shoes with wheels or blades that allow you to glide smoothly.<br />
            <b>Protective Gear: </b>Includes knee pads, elbow pads, and wrist guards for safety.<br />
            <b>Helmet: </b>Essential to protect the head during falls or accidents.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/skating2.jpg" width="480px" height="430px" alt="Skating Gear" />
        </div>
      </section>

      {/* 3rd Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/skating3.jpg" width="480px" height="430px" alt="Skating Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO SKATE?</h5>
          <p>
            Skating involves maintaining balance while gliding forward on a surface, using your legs to push and maneuver.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW IS IT SCORED?</h5>
          <p>
            In competitive skating events, points are awarded based on speed, technique, and artistic elements, depending on the type of skating.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/skating4.jpg" width="480px" height="430px" alt="Skating Scoring" />
        </div>
      </section>

      {/* 5th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/skating5.jpg" width="480px" height="430px" alt="History of Skating" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF SKATING</h5>
          <p>
            Skating dates back to ancient times, with early forms developed in the Netherlands using bones as the skate base. Modern skates evolved in the 19th century.
          </p>
        </div>
      </section>

      {/* 6th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            Techniques include forward and backward gliding, spins, jumps, and advanced tricks depending on the skating style.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/skating6.jpg" width="480px" height="430px" alt="Skating Techniques" />
        </div>
      </section>

      {/* 7th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/skating7.jpg" width="480px" height="430px" alt="Skating Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR SKATING</h5>
          <p>
            Skating training involves building strength, flexibility, and technique. Athletes practice moves, routines, and endurance.
          </p>
        </div>
      </section>

      {/* 8th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            The first ice skating rink was built in 1760 in London, and figure skating became a competitive sport in the 19th century.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/skating8.jpg" width="480px" height="430px" alt="Skating Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default Skating;

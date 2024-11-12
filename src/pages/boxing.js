import React from 'react';
import './temp.css';

const Boxing = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Boxing</h1>
          <p>
            Boxing is a combat sport where two participants, usually wearing protective gloves, throw punches at each other for a specified amount of time inside a ring.
          </p>
        </div>
      </section>
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/box1.jpeg" width="480px" height="430px" alt="Boxing" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS BOXING?</h5>
          <p>
            Boxing is a competitive sport that requires strength, agility, and mental toughness. It involves two fighters who use their fists to strike each other in a regulated environment.
          </p>
        </div>
      </section>
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Boxing Gloves: </b>Protective gloves used for punching.<br />
            <b>Boxing Ring: </b>Square space where boxing matches take place.<br />
            <b>Headgear: </b>Protective gear for the head during training or amateur boxing.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/box2.jpeg" width="480px" height="430px" alt="Boxing Gear" />
        </div>
      </section>
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/box3.avif" width="480px" height="430px" alt="Boxing Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO PLAY BOXING?</h5>
          <p>
            Boxing is played in rounds where two fighters attempt to land punches while avoiding their opponent’s strikes. Points are awarded based on the number of punches landed.
          </p>
        </div>
      </section>
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW IS IT SCORED?</h5>
          <p>
            Points are scored for clean punches that land on the opponent. Judges score the round based on the number of clean punches landed and overall dominance.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/box4.jpg" width="480px" height="430px" alt="Boxing Scoring" />
        </div>
      </section>
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/box5.avif" width="480px" height="430px" alt="History of Boxing" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF BOXING</h5>
          <p>
            Boxing dates back to ancient civilizations. The modern version of boxing as we know it was developed in the late 19th century.
          </p>
        </div>
      </section>
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            Some key techniques in boxing include the jab, uppercut, and cross, along with defensive moves like blocking and dodging.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/box7.jpg" width="480px" height="430px" alt="Boxing Techniques" />
        </div>
      </section>
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/box6.webp" width="480px" height="430px" alt="Boxing Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR BOXING</h5>
          <p>
            Boxers train with a mix of cardiovascular exercises, strength training, speed drills, and practicing specific techniques such as footwork and punching.
          </p>
        </div>
      </section>
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            The longest boxing match lasted 7 hours and 19 minutes, and it’s estimated that the average boxer punches over 600 times in a 12-round fight.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/box8.webp" width="480px" height="430px" alt="Boxing Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default Boxing;

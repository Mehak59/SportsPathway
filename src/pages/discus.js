import React from 'react';
import './temp.css';

const DiscusThrow = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Discus Throw</h1>
          <p>
            Discus throw is a field event where an athlete throws a heavy disc (discus) as far as possible.
          </p>
        </div>
      </section>

      {/* 1st Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/discus1.jpg.jpeg" width="480px" height="430px" alt="Discus Throw" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS DISCUS THROW?</h5>
          <p>
            In discus throw, the athlete spins and throws a heavy disc, aiming to throw it the farthest distance.
          </p>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Discus: </b>A round, heavy object thrown in the event.<br />
            <b>Throwing Circle: </b>The area where the athlete must stay during the throw.<br />
            <b>Gloves: </b>Some athletes use gloves for grip.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/discus2.avif" width="480px" height="430px" alt="Discus Equipment" />
        </div>
      </section>

      {/* 3rd Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/discus3.avif" width="480px" height="430px" alt="Discus Throw Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO THROW DISCUS?</h5>
          <p>
            Athletes use a spinning motion inside a throwing circle before releasing the discus to achieve maximum distance.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW IS IT SCORED?</h5>
          <p>
            The throw is measured from the throwing circle to where the discus lands. The longest throw is recorded.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/discus4.jpeg" width="480px" height="430px" alt="Discus Throw Scoring" />
        </div>
      </section>

      {/* 5th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/discus5.png" width="480px" height="430px" alt="History of Discus Throw" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF DISCUS THROW</h5>
          <p>
            The discus throw is an ancient sport that originated in Greece and became an official Olympic event in 1896.
          </p>
        </div>
      </section>

      {/* 6th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            The technique involves a spin inside the throwing circle and releasing the discus at the correct angle to maximize distance.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/discus6.jpg" width="480px" height="430px" alt="Discus Throw Techniques" />
        </div>
      </section>

      {/* 7th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/discus7.jpeg" width="480px" height="430px" alt="Discus Throw Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR DISCUS THROW</h5>
          <p>
            Training includes building strength and agility, working on technique, and practicing throws in various conditions.
          </p>
        </div>
      </section>

      {/* 8th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            The world record for the men's discus throw is over 74 meters, showcasing the power and precision needed in the sport.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/discus9.webp" width="480px" height="430px" alt="Discus Throw Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default DiscusThrow;

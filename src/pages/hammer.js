import React from 'react';
import './temp.css';

const HammerThrow = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Hammer Throw</h1>
          <p>
            Hammer Throw is a track and field event where an athlete throws a heavy weight, attached to a wire, as far as possible.
          </p>
        </div>
      </section>

      {/* 1st Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/hammerthrow1.jpg" width="480px" height="430px" alt="Hammer Throw" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS HAMMER THROW?</h5>
          <p>
            Hammer Throw is a sport in which an athlete throws a heavy weight (hammer) attached to a wire and handle, aiming for maximum distance.
          </p>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>The Hammer: </b> A heavy weight (7.26 kg for men, 4 kg for women) attached to a wire with a handle.<br />
            <b>Safety Cage: </b> A protective structure to keep the hammer contained during the throw.<br />
            <b>Gloves: </b> Optional for hand protection while holding the hammer.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/hammerthrow2.jpg" width="480px" height="430px" alt="Hammer Throw Equipment" />
        </div>
      </section>

      {/* 3rd Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/hammerthrow3.jpg" width="480px" height="430px" alt="Hammer Throw Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO THROW THE HAMMER?</h5>
          <p>
            The athlete swings the hammer around their head multiple times before releasing it into the air. The goal is to achieve maximum distance.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW IS IT SCORED?</h5>
          <p>
            The throw is measured from the center of the throwing circle to where the hammer lands. The longest throw in a valid attempt is counted.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/hammerthrow4.jpg" width="480px" height="430px" alt="Hammer Throw Scoring" />
        </div>
      </section>

      {/* 5th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/hammerthrow5.jpg" width="480px" height="430px" alt="History of Hammer Throw" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF HAMMER THROW</h5>
          <p>
            Hammer Throw dates back to ancient Celtic competitions, where it was part of traditional Highland Games. It was introduced to the Olympics in 1900.
          </p>
        </div>
      </section>

      {/* 6th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            Key techniques include the swinging motion, proper release angle, and body positioning to generate power and control the throw.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/hammerthrow6.jpg" width="480px" height="430px" alt="Hammer Throw Technique" />
        </div>
      </section>

      {/* 7th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/hammerthrow7.jpg" width="480px" height="430px" alt="Hammer Throw Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR HAMMER THROW</h5>
          <p>
            Training for hammer throw focuses on building strength, improving technique, and practicing swinging and releasing the hammer.
          </p>
        </div>
      </section>

      {/* 8th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            The hammer throw is one of the oldest throwing events, and its origins trace back to ancient Ireland and Scotland.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/hammerthrow8.jpg" width="480px" height="430px" alt="Hammer Throw Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default HammerThrow;

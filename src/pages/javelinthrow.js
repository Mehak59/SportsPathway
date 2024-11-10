import React from 'react';
import './temp.css';

const JavelinThrow = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Javelin Throw</h1>
          <p>
            Javelin throw is a track and field event where the athlete throws a spear-like object (the javelin) as far as possible.
          </p>
        </div>
      </section>

      {/* 1st Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/javelin1.jpg" width="480px" height="430px" alt="Javelin Throw" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS JAVELIN THROW?</h5>
          <p>
            The javelin throw involves hurling a spear-like object over a defined distance. It’s a combination of technique, speed, and strength.
          </p>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Javelin: </b> A long spear-like object thrown by the athlete.<br />
            <b>Track: </b>A runway where the athlete sprints before releasing the javelin.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/javelin9.jpg" width="480px" height="430px" alt="Javelin Equipment" />
        </div>
      </section>

      {/* 3rd Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/javelin3.jpg" width="480px" height="430px" alt="Javelin Throw in Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO PLAY JAVELIN THROW?</h5>
          <p>
            Athletes run down a track and launch the javelin using a combination of speed, power, and correct technique. The goal is to throw the javelin as far as possible.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW IS IT SCORED?</h5>
          <p>
            The athlete's throw is measured from the throw mark to the closest landing point of the javelin.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/javelin6.jpg" width="480px" height="430px" alt="Javelin Scoring" />
        </div>
      </section>

      {/* 5th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/javelin5.jpg" width="480px" height="430px" alt="History of Javelin Throw" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF JAVELIN THROW</h5>
          <p>
            Javelin throw dates back to ancient times as a hunting skill. It has evolved into a sport that’s part of modern athletics competitions like the Olympics.
          </p>
        </div>
      </section>

      {/* 6th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            The key techniques include a strong running start, proper grip, and the right release angle for maximum distance.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/javelin7.webp" width="480px" height="430px" alt="Javelin Throw Techniques" />
        </div>
      </section>

      {/* 7th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/javelin8.webp" width="480px" height="430px" alt="Javelin Throw Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR JAVELIN THROW</h5>
          <p>
            Training for javelin throw includes speed and strength exercises, technique practice, and learning how to build the right momentum before releasing the javelin.
          </p>
        </div>
      </section>

      {/* 8th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            The world record for javelin throw is over 93 meters, and it’s one of the most challenging events in track and field.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/javelin09.jpg" width="480px" height="430px" alt="Javelin Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default JavelinThrow;

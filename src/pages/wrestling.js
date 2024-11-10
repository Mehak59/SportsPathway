import React from 'react';
import './temp.css';

const Wrestling = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Wrestling</h1>
          <p>
            Wrestling is a combat sport where two opponents fight to pin each other or outscore each other using a variety of grappling techniques.
          </p>
        </div>
      </section>

      {/* 1st Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/wrestling1.jpg" width="480px" height="430px" alt="Wrestling" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS WRESTLING?</h5>
          <p>
            Wrestling is a sport where athletes engage in physical combat, attempting to pin their opponent to the ground or outmaneuver them within the rules of the match.
          </p>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Singlet: </b> A tight-fitting uniform worn by wrestlers.<br />
            <b>Headgear: </b> Protects the head and ears from injury.<br />
            <b>Wrestling Shoes: </b> Designed to provide grip and ankle support during matches.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/wrestling2.jpg" width="480px" height="430px" alt="Wrestling Gear" />
        </div>
      </section>

      {/* 3rd Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/wrestling3.jpg" width="480px" height="430px" alt="Wrestling Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO PLAY WRESTLING?</h5>
          <p>
            The match is won by pinning the opponent’s shoulders to the mat or by outscoring them through a series of controlled holds and moves.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW IS IT SCORED?</h5>
          <p>
            Points are awarded based on moves such as takedowns, escapes, and near falls. The most points are awarded for successful pins.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/wrestling4.jpg" width="480px" height="430px" alt="Wrestling Scoring" />
        </div>
      </section>

      {/* 5th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/wrestling5.jpg" width="480px" height="430px" alt="History of Wrestling" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF WRESTLING</h5>
          <p>
            Wrestling dates back to ancient times, including early Olympic Games and Greco-Roman culture. It remains one of the oldest forms of sport.
          </p>
        </div>
      </section>

      {/* 6th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            Common wrestling techniques include takedowns, pins, and escapes. Mastering balance, agility, and strength is key to success.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/wrestling6.jpg" width="480px" height="430px" alt="Wrestling Techniques" />
        </div>
      </section>

      {/* 7th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/wrestling7.jpg" width="480px" height="430px" alt="Wrestling Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR WRESTLING</h5>
          <p>
            Wrestling training focuses on developing strength, stamina, flexibility, and technique, with special emphasis on match preparation.
          </p>
        </div>
      </section>

      {/* 8th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            Wrestling is a staple in the Olympic Games, and some forms of wrestling, like Greco-Roman and freestyle, have their own distinct set of rules and techniques.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/wrestling8.jpg" width="480px" height="430px" alt="Wrestling Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default Wrestling;

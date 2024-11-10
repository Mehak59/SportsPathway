import React from 'react';
import './temp.css';

const Hockey = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Hockey</h1>
          <p>
            Hockey is a team sport where two teams of players use sticks to hit a ball or puck into the opponent's goal to score.
          </p>
        </div>
      </section>

      {/* 1st Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/hockey1.jpg" width="480px" height="430px" alt="Hockey" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS HOCKEY?</h5>
          <p>
            Hockey is a fast-paced sport played on ice or grass, where two teams of players attempt to score by sending a ball or puck into the opponent’s goal.
          </p>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Stick: </b> A long, curved piece of wood or composite material used to hit the ball or puck.<br />
            <b>Ball or Puck: </b> The object used to score goals. A ball in field hockey and a puck in ice hockey.<br />
            <b>Pads: </b> Protective gear worn by players, including shin guards, elbow pads, and helmets.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/hockey2.jpg" width="480px" height="430px" alt="Hockey Equipment" />
        </div>
      </section>

      {/* 3rd Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/hockey3.jpg" width="480px" height="430px" alt="Hockey Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO PLAY HOCKEY?</h5>
          <p>
            Players use sticks to maneuver the ball or puck on the playing field/ice, aiming to score goals while following the rules and preventing the other team from scoring.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW IS IT SCORED?</h5>
          <p>
            A goal is scored by sending the ball or puck into the opponent’s goal. The team with the most goals at the end of the match wins.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/hockey4.jpg" width="480px" height="430px" alt="Hockey Scoring" />
        </div>
      </section>

      {/* 5th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/hockey5.jpg" width="480px" height="430px" alt="History of Hockey" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF HOCKEY</h5>
          <p>
            Hockey dates back to the 18th century in Europe and North America, evolving from ancient ball-and-stick games.
          </p>
        </div>
      </section>

      {/* 6th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            Key techniques include passing, shooting, and defensive moves. In ice hockey, skating and puck handling are vital for success.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/hockey6.jpg" width="480px" height="430px" alt="Hockey Technique" />
        </div>
      </section>

      {/* 7th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/hockey7.jpg" width="480px" height="430px" alt="Hockey Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR HOCKEY</h5>
          <p>
            Hockey training includes improving skating, stick-handling, passing, and shooting techniques, as well as physical conditioning.
          </p>
        </div>
      </section>

      {/* 8th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            Hockey became an Olympic sport in 1924, and it is one of the most popular winter sports globally.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/hockey8.jpg" width="480px" height="430px" alt="Hockey Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default Hockey;

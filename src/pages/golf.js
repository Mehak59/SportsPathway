import React from 'react';
import './temp.css';

const Golf = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Golf</h1>
          <p>
            Golf is a sport where players use clubs to hit a ball into a series of holes on a course in as few strokes as possible.
          </p>
        </div>
      </section>

      {/* 1st Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="games/golf/g1.jpg" width="480px" height="430px" alt="Golf" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS GOLF?</h5>
          <p>
            Golf is a sport played outdoors where the goal is to hit a ball into a hole using clubs in as few strokes as possible.
          </p>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Golf Clubs: </b>Used to hit the ball. Different clubs are used for different distances.<br />
            <b>Golf Ball: </b>A small, dimpled ball hit into the holes on the course.<br />
            <b>Golf Shoes: </b>Specialized footwear designed to provide grip and comfort during play.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="games/golf/g2.jpg" width="480px" height="430px" alt="Golf Equipment" />
        </div>
      </section>

      {/* 3rd Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="games/golf/g4.jpg" width="480px" height="430px" alt="Golf in Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO PLAY GOLF?</h5>
          <p>
            Golf is played on a course with 18 holes. Players take turns hitting the ball from the tee to the green and into the hole.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW ARE POINTS SCORED?</h5>
          <p>
            Each hole has a par, which is the number of strokes it should take to complete it. The goal is to finish the course with the least number of strokes.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="games/golf/g3.avif" width="480px" height="430px" alt="Golf Scoring" />
        </div>
      </section>

      {/* 5th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="games/golf/g8.jpg" width="480px" height="430px" alt="Golf History" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF GOLF</h5>
          <p>
            Golf originated in Scotland in the 15th century, and it has evolved into a popular sport worldwide with professional tournaments like the Masters and the Open Championship.
          </p>
        </div>
      </section>

      {/* 6th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            Proper grip, stance, and swing technique are crucial in golf. The short game (putting and chipping) is as important as the long game (driving the ball).
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="games/golf/g7.jpeg" width="480px" height="430px" alt="Golf Techniques" />
        </div>
      </section>

      {/* 7th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="games/golf/g5.jpg" width="480px" height="430px" alt="Golf Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR GOLF</h5>
          <p>
            Golf training involves practicing your swing, putting, and approach shots. Professional golfers also focus on mental strategies and course management.
          </p>
        </div>
      </section>

      {/* 8th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            The longest golf hole ever recorded was 7,800 yards long. Golf was once played with feather-stuffed balls before the modern rubber-cored balls were invented.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="games/golf/g6.jpg" width="480px" height="430px" alt="Golf Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default Golf;

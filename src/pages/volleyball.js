import React from 'react';
import './temp.css';

const Volleyball = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Volleyball</h1>
          <p>
            Volleyball is a team sport where two teams of six players each try to score points by grounding the ball on the opponent’s side of the court.
          </p>
        </div>
      </section>

      {/* 1st Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/volleyball1.jpg" width="480px" height="430px" alt="Volleyball" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS VOLLEYBALL?</h5>
          <p>
            Volleyball is a team sport where players pass a ball over a net in an attempt to ground it on the opponent's court while preventing them from doing the same.
          </p>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Ball: </b>The primary equipment used in volleyball, designed to be hit back and forth over the net.<br />
            <b>Net: </b>Placed at the center of the court, dividing the two teams.<br />
            <b>Knee Pads: </b>Protection for players when diving or diving to the ground.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/volleyball2.jpg" width="480px" height="430px" alt="Volleyball Gear" />
        </div>
      </section>

      {/* 3rd Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/volleyball3.jpg" width="480px" height="430px" alt="Volleyball Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO PLAY VOLLEYBALL?</h5>
          <p>
            Players use their hands to pass, set, and spike the ball over the net. The objective is to score points by grounding the ball on the opponent's court.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW IS IT SCORED?</h5>
          <p>
            Volleyball is played in rallies, where points are scored when the ball touches the ground on the opponent's side of the court. The team that wins a rally gets a point.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/volleyball4.jpg" width="480px" height="430px" alt="Volleyball Scoring" />
        </div>
      </section>

      {/* 5th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/volleyball5.jpg" width="480px" height="430px" alt="History of Volleyball" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF VOLLEYBALL</h5>
          <p>
            Volleyball was invented by William G. Morgan in 1895. It became an Olympic sport in 1964 and has since gained widespread popularity worldwide.
          </p>
        </div>
      </section>

      {/* 6th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            Some of the key techniques in volleyball include passing, setting, spiking, and blocking. Each of these skills is crucial for a successful game.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/volleyball6.jpg" width="480px" height="430px" alt="Volleyball Techniques" />
        </div>
      </section>

      {/* 7th Section */}
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/volleyball7.jpg" width="480px" height="430px" alt="Volleyball Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR VOLLEYBALL</h5>
          <p>
            Training involves developing skills like passing, spiking, setting, and jumping, alongside improving strength and stamina.
          </p>
        </div>
      </section>

      {/* 8th Section */}
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            The longest volleyball game ever recorded lasted for 85 hours, showcasing the endurance required for this sport.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="assets/volleyball8.jpg" width="480px" height="430px" alt="Volleyball Fun Facts" />
        </div>
      </section>
    </div>
  );
};

export default Volleyball;

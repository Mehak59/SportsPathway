import React from 'react';
import './temp.css';

const Archery = () => {
  return (
    <div>
      <section className="sports-home">
        <div className="headings">
          <h5>LET'S</h5>
          <h1>Explore<br />Archery</h1>
          <p>
            Archery is a sport that involves shooting arrows with a bow at a target. It is an ancient practice and is now a competitive sport where accuracy and precision are key.
          </p>
        </div>
      </section>
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="assets/archery1.jpg" width="480px" height="430px" alt="Archery" />
        </div>
        <div className="sports-content-text">
          <h5>WHAT IS ARCHERY?</h5>
          <p>
            Archery involves shooting arrows at a target using a bow. It’s a test of accuracy, control, and precision.
          </p>
        </div>
      </section>
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>EQUIPMENT USED</h5>
          <p>
            <b>Bow: </b>Used to shoot the arrows.<br />
            <b>Arrows: </b>Shot from the bow towards the target.<br />
            <b>Target: </b>A round or square-shaped surface with scoring rings.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="games/archery/arc2.jpg" width="480px" height="430px" alt="Archery Equipment" />
        </div>
      </section>
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="games/archery/arc3.jpg" width="480px" height="430px" alt="Archery in Action" />
        </div>
        <div className="sports-content-text">
          <h5>HOW TO PLAY ARCHERY?</h5>
          <p>
            To play archery, aim at the target and release the arrow with proper technique. Archers use a combination of precision, focus, and controlled movements to hit the bullseye.
          </p>
        </div>
      </section>
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>HOW ARE POINTS SCORED?</h5>
          <p>
            Points are scored based on where the arrow lands on the target. The closer to the center, the higher the points.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="games/archery/arc9.jpg" width="480px" height="430px" alt="Archery Target" />
        </div>
      </section>
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="games/archery/arc8.jpg" width="480px" height="430px" alt="Archery Event" />
        </div>
        <div className="sports-content-text">
          <h5>HISTORY OF ARCHERY</h5>
          <p>
            Archery dates back thousands of years, originally used for hunting and warfare. It became a competitive sport in the 19th century and has been part of the Olympic Games since 1900.
          </p>
        </div>
      </section>
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>KEY TECHNIQUES</h5>
          <p>
            The key techniques include correct posture, aiming, proper grip on the bow, and the release of the arrow at the right moment.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="games/archery/arc3.jpg" width="480px" height="430px" alt="Archery Techniques" />
        </div>
      </section>
      <section className="sports-content">
        <div className="sport-content-image">
          <img src="games/archery/arc6.jpeg" width="480px" height="430px" alt="Archery Training" />
        </div>
        <div className="sports-content-text">
          <h5>TRAINING FOR ARCHERY</h5>
          <p>
            Training for archery includes strengthening the upper body, improving focus and precision, and practicing shooting from different distances.
          </p>
        </div>
      </section>
      <section className="sports-content2">
        <div className="sports-content-text2">
          <h5>INTERESTING FACTS</h5>
          <p>
            Archery was once used in military combat, and archers were highly valued in many ancient cultures. Today, it is a popular recreational and competitive sport worldwide.
          </p>
        </div>
        <div className="sports-content-image2">
          <img src="games/archery/medal.jpg" width="480px" height="430px" alt="Archery Fun Fact" />
        </div>
      </section>
    </div>
  );
};

export default Archery;

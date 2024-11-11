import React from 'react';
import { Link } from 'react-router-dom';
import './explore.css';
const Explore = () => {
  return (
    <div>
      <section className="explore-home">
        <div className="headings">
          <h1>Explore</h1>
          <p>
            Welcome to SportsPathway's Sports Exploration page! Here we invite you
            to enter the world of sports passion and explore our diverse games.
            From the skill of soccer and tennis to the power of basketball and
            volleyball, each sport has its own unique sense of excitement and
            competition. Our interactive map highlights the importance of each
            game, allowing you to learn more about the history, technology, and
            communities that have grown up around it. Whether you're a seasoned
            athlete or a new enthusiast, we want you to discover, get involved,
            and find your way in the sport you love. Join us in this message to
            support the sport!
          </p>
        </div>
      </section>
      <section className="explore">
        <div className="explore-container">
          <div className="explore-card" onClick={() => window.location.href = '#'}>
            <img src="assets/football.jpg" alt="FOOTBALL" />
            <div className="explore-card-content">
              <h3>FOOTBALL</h3>
              <p>
                The beautiful game. Known for its tactical complexity and
                passionate fans.
                <center><Link to="/football">Learn More</Link></center>
              </p>
            </div>
          </div>
          <div className="explore-card" onClick={() => window.location.href = '#'}>
            <img src="assets/badmin.jpg" alt="Badminton" />
            <div className="explore-card-content">
              <h3>BADMINTON</h3>
              <p>
                A fast-paced and technical racket sport requiring agility and
                precision.
                <center><Link to="/badminton">Learn More</Link></center>
              </p>
            </div>
          </div>
          <div class="explore-card" onclick="location.href='#'">
          <img src="assets/ttennis.jpg" alt="Table Tennis" />

          <div class="explore-card-content">
            <h3>TABLE TENNIS</h3>
            <p>
              A thrilling game of reflexes and strategy played on a miniature
              court.
              <center><Link to="/tabletennis">Learn More</Link></center>
            </p>
          </div>
        </div>
      </div>
      <div class="explore-container1">
        <div class="explore-card" onclick="location.href='#'">
          <img
            src="assets/tennis-girl-professional-tennis-court_654080-1256.avif"
            alt="TENNIS"
          />

          <div class="explore-card-content">
            <h3>TENNIS</h3>
            <p>
              The elegant duel. Known for its strategic finesse, intense
              rallies, and individual brilliance.
              <center><Link to="/tennis">Learn More</Link></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/images.jpeg" alt="Squash" />

          <div class="explore-card-content">
            <h3>SQUASH</h3>
            <p>
              The fast-paced challenge. Known for its agility, quick reflexes,
              and relentless endurance within the confines of a glass-walled
              court.
              <center><Link to="/squash">Learn More</Link></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/archer.jpg" alt="Archery" />

          <div class="explore-card-content">
            <h3>ARCHERY</h3>
            <p>
              The art of precision. Known for its focus, steady hand, and the
              pursuit of the perfect shot in complete silence.
              <center><Link to="/archery">Learn More</Link></center>
            </p>
          </div>
        </div>
      </div>
      <div class="explore-container2">
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/gol.jpg" alt="GOLF" />

          <div class="explore-card-content">
            <h3>GOLF</h3>
            <p>
              The serene pursuit. Known for its blend of mental fortitude,
              precision, and the challenge of mastering the landscape with every
              swing.
              <center><Link to="/golf">Learn More</Link></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/javelin.jpg" alt="Javelin" />

          <div class="explore-card-content">
            <h3>JAVELIN THROW</h3>
            <p>
              The power of flight. Known for its explosive strength, perfect
              technique, and the quest to send the spear soaring as far as
              possible.
              <center><Link to="/javelinthrow">Learn More</Link></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/box.jpg" alt="Boxing" />

          <div class="explore-card-content">
            <h3>BOXING</h3>
            <p>
              The sweet science. Known for its blend of strategy, raw power,
              agility, and the relentless spirit of the fight.
              <center><a href="boxing2.html">Learn more</a></center>
            </p>
          </div>
        </div>
      </div>
      <div class="explore-container3">
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/swim.jpg" alt="Swimming" />

          <div class="explore-card-content">
            <h3>SWIMMING</h3>
            <p>
              The aquatic race. Known for its rhythmic strokes, endurance, and
              the drive to conquer the water with speed and grace.
              <center><a href="swimming2.html">Learn more</a></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/discus.jpg" alt="Discus throw" />

          <div class="explore-card-content">
            <h3>DISCUS THROW</h3>
            <p>
              The spin of strength. Known for its balance, explosive power, and
              the art of hurling the disc with precision and maximum distance.
              <center><a href="discus02.html">Learn more</a></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/volley.jpg" alt="Volleyball" />

          <div class="explore-card-content">
            <h3>VOLLEYBALL</h3>
            <p>
              The dynamic battle. Known for its teamwork, quick reflexes, and
              powerful spikes in a high-energy, fast-paced court game.
              <center><a href="volleyball.html">Learn more</a></center>
            </p>
          </div>
        </div>
      </div>
      <div class="explore-container4">
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/basket.jpg" alt="Basketball" />

          <div class="explore-card-content">
            <h3>BASKETBALL</h3>
            <p>
              The court showdown. Known for its fast breaks, precise shooting,
              and the artistry of teamwork and skillful plays.
              <center><a href="basketball.html">Learn more</a></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/wrestling.jpg" alt="wrestling" />

          <div class="explore-card-content">
            <h3>WRESTLING</h3>
            <p>
              The ultimate clash. Known for its raw strength, strategic
              grappling, and the intense physical and mental battle for
              dominance on the mat.
              <center><a href="wrestling.html">Learn more</a></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/skating.jpg" alt="skating" />

          <div class="explore-card-content">
            <h3>SKATING</h3>
            <p>
              The graceful glide. Known for its blend of balance, fluid
              movement, and the artistry of executing intricate routines or
              navigating challenging courses.
              <center><a href="skating.html">Learn more</a></center>
            </p>
          </div>
        </div>
      </div>
      <div class="explore-container5">
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/hammer.jpg" alt="Hammer throw" />

          <div class="explore-card-content">
            <h3>HAMMER THROW</h3>
            <p>
              The forceful launch. Known for its powerful spins, explosive
              strength, and the precise technique required to hurl the heavy
              hammer as far as possible.
              <center><a href="Hammer throw.html">Learn more</a></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/shooting.jpg" alt="shooting" />

          <div class="explore-card-content">
            <h3>SHOOTING</h3>
            <p>
              The test of focus. Known for its precision, steady hand, and the
              skill to achieve perfect accuracy under pressure.
              <center><Link to="/shooting">Learn more</Link></center>
            </p>
          </div>
        </div>
        <div class="explore-card" onclick="location.href='#'">
          <img src="assets/hockey.jpg" alt="Hockey" />
          <div class="explore-card-content">
            <h3>HOCKEY</h3>
            <p>
              The fast-paced clash. Known for its intense speed, skillful
              stickhandling, and the strategic battle for control on ice or
              turf.
              <center><a href="hockey.html">Learn more</a></center>
            </p>
          </div>
        </div>
        </div>
      </section>
  </div>
);
};
export default Explore;
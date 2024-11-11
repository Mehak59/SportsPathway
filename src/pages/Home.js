import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetingMessage: "Welcome to your sports journey!",  
      events: [
        { title: 'Local Soccer Tournament', date: '2024-11-12' },
        { title: 'Basketball Championship', date: '2024-11-15' },
        { title: 'Marathon', date: '2024-11-20' },
        { title: 'Swimming Gala', date: '2024-11-25' }
      ]
    };
  }
  componentDidMount() {
    this.greetingTimer = setTimeout(() => {
      this.setState({ greetingMessage: "" });
    }, 10000);
    const lastVisited = localStorage.getItem('lastVisited');
    if (lastVisited) {
      this.setState(prevState => ({
        events: [
          ...prevState.events,
          { title: 'Last Visited', date: lastVisited, color: 'red' }
        ]
      }));
    }
    const currentVisit = new Date().toISOString().split('T')[0];
    localStorage.setItem('lastVisited', currentVisit);
  }
  componentWillUnmount() {
    clearTimeout(this.greetingTimer);
  }
  handleQuizClick = () => {
    console.log("Quiz button clicked!");
  };
  render() {
    return (
      <div>
        <section className="home">
          <div className="headings">
            <div id="greetingPopup" className="popup">
              <p id="greetingMessage">{this.state.greetingMessage}</p> 
            </div>
            <h5>YOUR</h5>
            <h1>Sports Journey<br />Simplified</h1>
            <p>
              Finding your ideal sport can be tough, but our expertly crafted quiz
              makes it easy. By considering your strengths, interests, and goals, it
              gives personalized sport recommendations, helping you discover the
              perfect fit, whether you're looking to stay active, compete, or just
              enjoy yourself.
            </p>
            <button className="btn" onClick={this.handleQuizClick}>Take Quiz</button>
          </div>
        </section>
        <section className="categories">
          <div className="category-content">
            <div className="category-line">
            <div class="image">
            <img
              src="https://brand.assets.adidas.com/capi/enGB/Images/seo-soccer-ball-sizes-body-image1_143-562912.jpg"
            />
          </div>
          <h4>Ball Sports</h4>
        </div>
        <div class="category-line">
          <div class="image">
            <img
              src="https://media.istockphoto.com/id/1177188061/photo/conflict-concept.jpg?s=612x612&w=0&k=20&c=bPH9lgf9OSJnsg8wzDw7ZnfwMo9sKrDGq_QybxZn5O4="
            />
          </div>
          <h4>Contact Sports</h4>
        </div>
        <div class="category-line">
          <div class="image">
            <img
              src="https://img.runningwarehouse.com/watermark/rsg.php?path=/content_images/landing-pages/Track_Field/Throws_Discus_PRINSLOO_Francois.JPG&nw=780"
            />
          </div>
          <h4>Throwing Sports</h4>
        </div>
        <div class="category-line">
          <div class="image">
            <img
              src="https://decathlon.ae/cdn/shop/collections/precision.jpg?v=1612266186"
            />
          </div>
          <h4>Precision Sports</h4>
        </div>
        <div class="category-line">
          <div class="image">
            <img
              src="https://st4.depositphotos.com/12796694/25398/i/450/depositphotos_253984668-stock-photo-details-with-a-professional-athlete.jpg"
            />
          </div>
          <h4>Individual Sports</h4>
        </div>
      </div>
    </section>

        <section className="olympics">
          <div className="olympic-image">
            <img src="https://media.self.com/photos/6659efa72e2794fa6f47f803/4:3/w_2560%2Cc_limit/GettyImages-846563176.jpg" width="480px" height="430px" alt="Olympics" />
          </div>
          <div className="olympic-text">
            <h5>OLYMPICS</h5>
            <h2>Unity, Excellence, and Perseverance</h2>
            <p>
              The Olympics celebrate global unity, excellence, and perseverance.
              Athletes from around the world compete, showcasing dedication and the
              spirit of striving for greatness, inspiring others through their hard
              work and sportsmanship.
            </p>
            <a href="https://olympics.com/" className="btn">More Details</a>
          </div>
        </section>
        <section className="popular-sports">
          <div className="text">
            <h2>Popular Sports</h2>
          </div>
          <div className="sport-content">
            <div className="card">
              <a href="badminton.html">
                <img src="https://superblog.supercdn.cloud/site_cuid_clr6oh1no0006rmr89yhkxgu8/images/professional-badminton-player-use-racquet-hit-shuttle-cock-shuttlecock-badminton-court-1707732139784-compressed.jpg" alt="Badminton" />
              </a>
              <h6>Badminton</h6>
              <p>A fast-paced and technical racket sport requiring agility and precision.</p>
            </div>
            <div class="card">
        <a href="football.html">
          <img
            src="https://img.freepik.com/premium-photo/abstract-football-player-which-consists-blue-illuminated-line-dark-background_1029476-116564.jpg"
          /></a>
          <h6>Football</h6>
          <p>
            The beautiful game. Known for its tactical complexity and passionate
            fans.
          </p>
        </div>
        <div class="card">
          <a href="tabletennis.html">
          <img
            src="https://th.bing.com/th/id/R.d1dc076c21c8b5ca07f843bf8b2659e8?rik=FbTq8mE704c81A&riu=http%3a%2f%2fmyindianthings.com%2fcdn%2fshop%2fproducts%2f2_e77beac8-29c2-45bc-8565-25522edd9858_1024x.jpg%3fv%3d1672682132&ehk=sb%2bxesopqtAtUhlZlOigjFnTuLGlgr09M%2bxendzKBhY%3d&risl=&pid=ImgRaw&r=0"
          /></a>
          <h6>Table Tennis</h6>
          <p>
            A thrilling game of reflexes and strategy played on a miniature
            court.
          </p>
        </div>
          </div>
          
          <div className="center-btn">
            <a href="explore.html" className="btn">Explore More</a>
          </div>
        </section>
        <section className="events-calendar">
          <div className="calendar-text">
            <h2>UPCOMING SPORTS EVENTS</h2>
            <p>
              Stay updated with the most exciting upcoming sports events in your
              area and around the world. From local tournaments to international
              championships, our calendar keeps you informed about key dates and
              competitions across various sports. Mark your calendar and never miss
              a chance to support your favorite teams and athletes!
            </p>
          </div>
          <div id="calendar">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={this.state.events} 
              headerToolbar={{
                left: 'title',
                right: 'prev,next today'
              }}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

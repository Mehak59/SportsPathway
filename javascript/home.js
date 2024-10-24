const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  localStorage.setItem("scrollPosition", window.scrollY);
  header.classList.toggle("sticky", window.scrollY > 60);
});

document.addEventListener('DOMContentLoaded', function () {
  const savedScrollPosition = localStorage.getItem("scrollPosition");

  if (savedScrollPosition) {
    window.scrollTo(0, parseInt(savedScrollPosition, 10));
  }
  var calendarEl = document.getElementById('calendar');
  let lastVisited = localStorage.getItem('lastVisitedDate');
  let currentDate = new Date().toISOString().split('T')[0]; 
  localStorage.setItem('lastVisitedDate', currentDate);

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      { title: 'Marathon Championship', start: '2024-10-25' },
      { title: 'Basketball Finals', start: '2024-11-10' },
      { title: 'World Cup Qualifiers', start: '2024-12-01' },
    ]
  });

  if (lastVisited) {
    calendar.addEvent({
      title: 'Last Visited',
      start: lastVisited,
      color: 'red', 
    });
  }

  calendar.render();
});
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navigation');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
}

window.onscroll = function () {
  const button = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.classList.add('show');
  } else {
      button.classList.remove('show');
  }
};
function getGreeting() {
  const hour = new Date().getHours(); 
  let greeting;

  if (hour < 12) {
    greeting = "Good morning! Welcome to SportsPathway!";
  } else if (hour < 18) {
    greeting = "Good afternoon! Welcome to SportsPathway!";
  } else {
    greeting = "Good evening! Welcome to SportsPathway!";
  }

  return greeting;
}
function showGreetingPopup() {
  const popup = document.getElementById('greetingPopup');
  const message = document.getElementById('greetingMessage');
  
  message.innerText = getGreeting(); 
  popup.style.display = 'block'; 
  setTimeout(() => {
    popup.style.display = 'none'; 
  }, 5000); 
}
window.onload = showGreetingPopup;

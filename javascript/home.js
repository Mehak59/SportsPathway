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

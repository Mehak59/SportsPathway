const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>60)
});
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Marathon Championship', start: '2024-10-25' },
        { title: 'Basketball Finals', start: '2024-11-10' },
        { title: 'World Cup Qualifiers', start: '2024-12-01' }
      ]
    });

    calendar.render();
  });
document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault(); // Stop form from submitting/reloading the page

  const dateInput = document.getElementById("dateInput");
  const selectedDate = dateInput.value;

  if (!selectedDate) {
    alert("Please select a date");
    return;
  }

  const dateParts = selectedDate.split("-").map(Number);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  // Calculate difference
  let years = currentYear - dateParts[0];
  let months = currentMonth - dateParts[1];
  let days = currentDay - dateParts[2];

  // Adjust if days or months are negative
  if (days < 0) {
    months -= 1;
    days += new Date(currentYear, currentMonth - 1, 0).getDate(); // days in previous month
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  function animateCount(element, target) {
  let count = 0;
  const increment = Math.max(1, Math.ceil(target / 200)); // Divide into ~100 steps
  const speed = 100; // milliseconds between updates

  const update = () => {
    if (count < target) {
      count += increment;
      if (count > target) count = target; // prevent overshoot
      element.innerText = count;
      setTimeout(update, speed);
    } else {
      element.innerText = target; // final value
    }
  };

  update();
}

const output = document.querySelector(".answer");

output.innerHTML = `
  <h2>Years: <span id="years">0</span></h2>
  <h2>Months: <span id="months">0</span></h2>
  <h2>Days: <span id="days">0</span></h2>
`;

animateCount(document.getElementById("years"), years);
animateCount(document.getElementById("months"), months);
animateCount(document.getElementById("days"), days);


});
const themeIcon =document.querySelector('.themeIcon');
document.getElementById('themeToggle').addEventListener("click",()=>{
  document.body.classList.toggle('lightTheme');
  document.body.classList.toggle('darkTheme');

  if (themeIcon.classList.contains('fa-moon')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
  } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
  }
})

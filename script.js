// Set your target date here (YYYY-MM-DD format)
const countdownDate = new Date("2025-07-29T21:00:00").getTime();

const countdownFunc = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(countdownFunc);
    document.getElementById("countdown").innerHTML = "Time to Let It Rip!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}, 1000);

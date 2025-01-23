const circle = document.getElementById('circle');
const timerDisplay = document.getElementById('timer');

let startTime;
let endTime;
let elapsedTime = 0;

circle.style.position = 'absolute';
circle.style.left = '50px';
circle.style.top = '50px';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

circle.addEventListener('click', () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const randomX = Math.random() * (windowWidth - 150);
  const randomY = Math.random() * (windowHeight - 150);

  circle.style.left = `${randomX}px`;
  circle.style.top = `${randomY}px`;

  // Change the color of the circle on each click
  circle.style.backgroundColor = getRandomColor();

  if (!startTime) {
    startTime = Date.now();
    timerDisplay.textContent = `Timer started! Click again to stop.`;
  } else {
    endTime = Date.now();
    elapsedTime = endTime - startTime;
    const seconds = (elapsedTime / 1000).toFixed(2);
    const milliseconds = elapsedTime % 1000;
    
    timerDisplay.textContent = `Click time: ${seconds} seconds (${milliseconds} ms)`;

    // Reset start time for the next click
    startTime = null;
  }
});

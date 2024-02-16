// ALARM /////////////////////////
const audio = document.querySelector('.alarm-audio');
const playAlarm = document.querySelector('.play-alarm');
const stopAlarm = document.querySelector('.stop-alarm');

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString('it-IT');
  console.log(time);
  if (time === '15:27:00') {
    audio.play();
  }
}, 1000);

playAlarm.addEventListener('click', () => {
  audio.play();
});

stopAlarm.addEventListener('click', () => {
  audio.pause();
});
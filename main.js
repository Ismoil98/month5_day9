// ALARM /////////////////////////
const audio = document.querySelector('.alarm-audio');
const playAlarm = document.querySelector('.play-alarm');
const stopAlarm = document.querySelector('.stop-alarm');

function myFunction() {
    event.preventDefault();
    let x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString('it-IT');
        if (time === x) {
            audio.play();
        }
    }, 1000);
    console.log(x);
}

playAlarm.addEventListener('click', () => {
  audio.play();
});

stopAlarm.addEventListener('click', () => {
  audio.pause();
});
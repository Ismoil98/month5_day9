// CLOCK /////////////////////

let date = document.querySelector('.phoneClosk');
setInterval(()=> {
    let dateNow = new Date();
    x = dateNow.toLocaleTimeString('it-IT');
    date.innerHTML = x;
}, 1000)
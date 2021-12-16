import '../scss/main.scss'


function startTimerCountdown () {
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');


    let valueH = hours ? +hours.innerText : 0;
    let valueM = minutes ? +minutes.innerText : 0;
    let valueS = seconds ? +seconds.innerText : 0;

    let time = valueH * 60 * 60 + valueM * 60 + valueS;
    let timerInterval;

    timerInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerInterval);

            console.log('Time is up')

            return;
        }

        time--;
        valueH = (time / 60 / 60 ^ 0)
        valueM = (time / 60 ^ 0) - valueH * 60
        valueS = time % 60;


        hours.innerText = valueH;
        minutes.innerText = String(valueM).padStart(2, '0');
        seconds.innerText = String(valueS).padStart(2, '0');

    }, 1000);
}

function setCurrentDate() {
    const rightNow = new Date();
    const date = rightNow.toISOString().slice(0,10).replace(/-/g,".");
    const dateContainer = document.querySelector('#date');

    if(!dateContainer) { return; }

    dateContainer.innerText = date
}
   
startTimerCountdown();
setCurrentDate()

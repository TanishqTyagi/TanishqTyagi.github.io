const targetYear = new Date().getFullYear() + 1;
const targetDate = new Date(`${targetYear}-03-10T00:00:00`).getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;

    const months = Math.abs(Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30)));
    const weeks = Math.abs(Math.floor((remainingTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)));
    const days = Math.abs(Math.floor((remainingTime % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)));
    const hours = Math.abs(Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.abs(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = Math.abs(Math.floor((remainingTime % (1000 * 60)) / 1000));

    document.getElementById("months").innerHTML = months;
    document.getElementById("weeks").innerHTML = weeks;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);

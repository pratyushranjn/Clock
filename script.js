const tickSound = document.getElementById("tick-sound");

setInterval(() => {
    const d = new Date();
    const hTime = d.getHours();
    const mTime = d.getMinutes(); 
    const sTime = d.getSeconds();
    
    const hRotation = 30 * hTime + mTime / 2;
    const mRotation = 6 * mTime;
    const sRotation = 6 * sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

    tickSound.currentTime = 0; // Reset sound to start
    tickSound.play();

}, 1000);

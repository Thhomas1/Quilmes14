const countdown = () => {
    const countDate = new Date("August 14, 2023 00:00:00").getTime(); // ! MUCHO cuidado con los get o cualquier cosa que tenga () porque te podes pasar 20 minutos con un codigo :D
    const now = new Date().getTime();
    const gap = countDate - now;  // armando el tiempo como Dr.Strange

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculando nuevamete 

    const textDay = Math.floor(gap / day); 
    const textHour = Math.floor((gap % day) / hour );
    const textMinute = Math.floor((gap % hour) / minute );
    const textsecond = Math.floor((gap % minute) / second );


    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textsecond;  // seteando todo 

};

setInterval(countdown, 1000);
countdown();
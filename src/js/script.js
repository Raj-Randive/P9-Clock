
const hourHand = document.getElementById("h");
const minuteHand = document.getElementById("m");
const secondHand = document.getElementById("s");

setInterval(setClock, 1000);

 function setClock(){
   const currentDate = new Date();
   htime = currentDate.getHours();
   mtime = currentDate.getMinutes();
   stime = currentDate.getSeconds();
    
   hrotations = 30*htime + mtime/2 ;
   mrotations = 6*mtime;
   srotations = 6*stime;

   hourHand.style.transform = `rotate(${hrotations}deg)`;
   minuteHand.style.transform = `rotate(${mrotations}deg)`;
   secondHand.style.transform = `rotate(${srotations}deg)`;

 }

 setClock();

// #Method 2

// function setClock(){
//     const currentDate = new Date();

//     const s = currentDate.getSeconds();
//     const m = currentDate.getMinutes();
//     const h = currentDate.getHours();

//     const secondsRatio = s/60;
//     const minutesRatio = (secondsRatio + m)/60;
//     const hoursRatio = (minutesRatio+h)/12;

//     console.log(minutesRatio);
//     setRotation(secondHand, secondsRatio);
//     setRotation(minuteHand, minutesRatio);
//     setRotation(hourHand, hoursRatio);
// }

// function setRotation(element, rotationRatio){
//     element.style.setProperty('--rotation', rotationRatio * 360);
// }

// setClock();

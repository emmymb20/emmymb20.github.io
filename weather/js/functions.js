'use strict';

/* *************************************
*  Weather Site JavaScript Functions
************************************* */

// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
    buildModDate();
    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener('click', menuButton);

    // Variables for Wind Chill function
    let temp = 31;
    let speed = 5; 
    let feelsLike = document.getElementById('feelsLike');  feelsLike.innerHTML = buildWC(speed, temp);

    //Implement the time indicator
    let hour = "7";
    timeBall(hour);
})

// Build the last modified date
function buildModDate(){
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let lastMod = new Date(document.lastModified);
    const dayName = dayArray[lastMod.getDay()];
    const monthName = monthArray[lastMod.getMonth()];
    const formattedDate = dayName+", "+lastMod.getDate() +" "+monthName+", "+lastMod.getFullYear();
    document.querySelector('#modDate').innerText = formattedDate;
   }
      
   // Handles Small Screen Menu
   const menuButton = document.querySelector("#menuBtn");
   menuButton.addEventListener('click', menuA);
     const navList = document.querySelector('#navList');
     navList.classList.toggle("mobileNav");


   function menuA(){
    const navList = document.querySelector('#navList');
    navList.classList.toggle("mobileNav");
  }

    const menubutton = document.querySelector(".ham");
    menubutton.addEventListener("click", toggleMenu, false);

    function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

/* *************************************
*  Windchill function
************************************* */   

function buildWC(speed, temp) {
    let feelsLike = document.getElementById('feelsLike');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

    console.log(wc);

    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;

    //Display result
    console.log(wc);
    feelsLike.innerHTML = wc;
    return wc;

}

/* *************************************
*  Time indicator function
************************************* */
function timeBall(hour){
    console.groupCollapsed("Time Ball");
    // Find all "ball" classes and remove them
    let x = document.querySelectorAll(".ball");
    for (let item of x) {
        console.log(item);
        item.classList.remove("ball");
    }
    
    // Find all hours that match the parameter and add the "ball" class
    let hr = document.querySelectorAll(".i"+hour);
    for (let item of hr){
        item.classList.add("ball");
    }
}
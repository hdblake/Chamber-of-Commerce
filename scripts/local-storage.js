const htmlVisit = document.querySelector(".visits")
const visit = new Date();
const dateVisited = visit.getTime();
const localeVisit = Number(window.localStorage.getItem("ls-visit", dateVisited));

if (localeVisit == 0) {
    htmlVisit.innerHTML = "Welcome! This is your first time visiting.";
    
} else {
    let lastVisited = new Date(localeVisit);
    let todaysVisit = new Date(dateVisited);

    let lastDayVisited =  lastVisited.getMonth() + 1 + "/" + lastVisited.getDay() + "/" + lastVisited.getFullYear();
    let currentVisit = todaysVisit.getMonth() + 1 + "/" +  todaysVisit.getDay() + "/" +  todaysVisit.getFullYear();

    let lastDate = new Date(lastDayVisited);
    let currentDate = new Date(currentVisit);

    const difference = Math.abs(currentDate - lastDate);
    const dayDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    if (dayDifference == 0) {
        htmlVisit.innerHTML = "Last Visited: Today";
    }
    else{
        htmlVisit.innerHTML = `Days Since Last Visit: ${dayDifference}`;
}}

window.localStorage.setItem("ls-visit", dateVisited);
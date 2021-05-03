var table = document.getElementById("month");

let date = new Date();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let daysInMonth = new Date(year, month, 0).getDate();
let dayCounter = 1;
let weekDays = 7;
let numWeeks = 4;

for (let j = 0; j < numWeeks; j++) {
    var row = table.insertRow(j);
    for(let k = 0; k < weekDays; k++) {
        let cell = row.insertCell(k);
        cell.innerHTML = dayCounter;
        dayCounter++;
    }
    daysInMonth -= weekDays;
    if(daysInMonth < weekDays) {
        weekDays = daysInMonth;
        numWeeks = 5;
    }
}


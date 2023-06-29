const daynameEle = document.querySelector(".dayName");
const dateEle = document.querySelector(".date");

const hourEle = document.getElementById("Hour");
const minutesEle = document.getElementById("Minutes");
const secondEle = document.getElementById("Second");

// Time
function Clock() {
    const date = new Date();
    let Hour = date.getHours();
    let Minutes = date.getMinutes();
    let Secound = date.getSeconds();

    Hour = (Hour < 10) ? `0${Hour}` : Hour;
    Minutes = (Minutes < 10) ? `0${Minutes}` : Minutes;
    Secound = (Secound < 10) ? `0${Secound}` : Secound;
    console.log(`${Hour} : ${Minutes} : ${Secound}`);

    // set to documents
    hourEle.innerText = Hour;
    minutesEle.innerText = Minutes;
    secondEle.innerText = Secound;
}

const Interval = setInterval(Clock, 1000);

// Date
function PershianDate() {
    const today = new Date().toLocaleDateString('fa-IR');
    const dayOfWeek = getDayOfWeek();

    daynameEle.innerText = dayOfWeek;
    dateEle.innerText = today;
}

function getDayOfWeek() {
    const gregorianDate = new Date();

    const daysOfWeek = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
    const gregorian = new Date(gregorianDate);
    const dayIndex = gregorian.getDay();
    return daysOfWeek[dayIndex];
}

PershianDate();
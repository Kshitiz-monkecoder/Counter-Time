//All tags from html store in js file with "h" in last
const dayh = document.querySelector(".days");
const hourh = document.querySelector(".hours");
const minuteh = document.querySelector(".minutes");
const secondh = document.querySelector(".seconds");
const headingh = document.querySelector("h1");
const countertimerh = document.querySelector(".counterTime");

//for calculations
const second = 1000;
const minute = 60*second;
const hour = 60*minute;
const day = 24*hour;

//main Counter time function
const timerFunction = () =>
{
    //Storing Today's Date
    let now = new Date(),
    dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth()+1).padStart(2,"0"),
    yyyy = String(now.getFullYear()).padStart(2,"0");

    //Target Date given by user
    const enteredDate = prompt("Enter the day");
    const enteredMonth = prompt("Enter the month");

    //To check the date/month range
    if(enteredDate>=31 && enteredMonth>=12)
    {
        return(alert("Inavlid Date/Month"));
    }

    let targetDate = `${enteredMonth}/${enteredDate}/${yyyy}`;
    now = `${mm}/${dd}/${yyyy}`;

    const intervalId = setInterval(() => {
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();


        const difference = timer - today;
        const leftday = Math.floor(difference / day);
        const lefthour = Math.floor((difference % day)/hour);
        const leftminute = Math.floor((difference % hour)/minute);
        const leftsecond = Math.floor((difference % minute)/second);

        dayh.innerText = leftday;
        hourh.innerText = lefthour;
        minuteh.innerText = leftminute;
        secondh.innerText = leftsecond;
        if(difference < 0)
        {
            countertimerh.style.display = "none";
            headingh.innerText = "Time's Up";
            clearInterval(intervalId);

        }
    },0);
}    


timerFunction();
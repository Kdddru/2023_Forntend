const time = document.querySelector(`#time`);

const getDay = function(){
    
    const setChis = new Date(2023,12,25);
    const setToday = new Date();
    const chisTime = setChis.getTime();  //월은 -1된값 넣어주기
    const todayTime = setToday.getTime();

    const Dday = chisTime-todayTime;

    const day = String(Math.floor(Dday/(1000*60*60*24))).padStart(2,0);
    const hour = String(Math.floor(Dday%(1000*60*60*24)/(1000*60*60))).padStart(2,0);
    const minute = String(Math.floor(Dday%(1000*60*60)/(1000*60))).padStart(2,0);
    const second = String(Math.floor(Dday%(1000*60)/(1000))).padStart(2,0);

    time.innerHTML = `${day}d ${hour}h ${minute}m ${second}s`;

}

function updateTime(){
    getDay();
    setInterval(getDay,1000);
}

updateTime();
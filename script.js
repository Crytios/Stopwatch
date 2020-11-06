let seconds = 0;
let minutes  = 0;
let hours  = 0;
let disSeconds = 0;
let disMinutes = 0;
let disHours = 0;
let status = "stopped"
let interval = null;
const stopWatch = ()=>{

    seconds++;

    if(seconds / 60 === 1 ){
        seconds = 0;
        minutes++
    
    if (minutes/60 === 1){
        minutes = 0;
        hours++;
    }
}

if (seconds < 10){
    disSeconds = "0" + seconds.toString();

}
else{
    disSeconds = seconds;
}
if (minutes <10){
    disMinutes = "0" + minutes.toString();
}
else{
    disMinutes = minutes;
}
if (hours < 10){
    disHours = "0"+hours.toString();
}
else{
    disHours = hours;
}
document.getElementById("display").innerHTML = disHours + ":" + disMinutes + ":"+  disSeconds



}


const startStop=  ()=>{
    if (status === "stopped"){
    interval  = window.setInterval(stopWatch, 1000)
    document.getElementById("startStop").innerHTML="Stop";
    status="started"
    }
    else {
        window.clearInterval(interval)
        document.getElementById("startStop").innerHTML="Start";
        status="stopped"

    }  
}
const reset = ()=>{
    seconds = 0
    minutes = 0
    hours = 0
    window.clearInterval(interval);
    document.getElementById("display").innerHTML="00:00:00"
}
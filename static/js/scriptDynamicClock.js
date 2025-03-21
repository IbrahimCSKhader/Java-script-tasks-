


function showTime(){
    
    var now = new Date();

    'use strict';
 var   hours=now.getHours();
var minutes=now.getMinutes();
var secounds=now.getSeconds();
//  document.getElementById('clock').textContent=hours+":"+minutes+":"+secounds;
if(hours < 10){
    hours.textContent= '0'+hours
 document.getElementById('clock').textContent='0'+hours+":"+minutes+":"+secounds;

}
else if(hours>=10){
 document.getElementById('clock').textContent=hours+":"+minutes+":"+secounds;


}

}
window.onload=function(){
    'use strict';
    setInterval(showTime,100)

}
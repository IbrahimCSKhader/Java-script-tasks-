var mytext='hello from ibrahim khader';

i=0;
var mybutton=document.getElementById('button');
mybutton.onclick=function(){
    'use strict';
    var typewriter= setInterval(function(){
       var text= document.getElementById('type').textContent +=mytext[i];
       i++;
       if(i>mytext.length-1){
        clearInterval(typewriter);
       }
    } ,1);
    

}

console.log(mytext[0]);
console.log(mytext[1]);
console.log(mytext[2]);
console.log(mytext[3]);
console.log(mytext[4]);
console.log(mytext[5]);

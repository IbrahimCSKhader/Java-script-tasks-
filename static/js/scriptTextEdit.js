var myTitle=document.getElementById('title');
var myContent=document.getElementById('content');
var myContentLive=document.getElementById('content-live');
var mytitleLive=document.getElementById('title-live');

myTitle.onkeyup=function(){
    'use strict';
    mytitleLive.textContent=this.value;
}
myContent.onkeyup=function(){
    'use strict';

    myContentLive.textContent=this.value;
}
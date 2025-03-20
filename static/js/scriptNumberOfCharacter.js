var count=document.getElementById("count");
var textArea=document.getElementById("text");
var maxLeangth = textArea.getAttribute("maxlength")||100;

count.innerHTML=maxLeangth-textArea.value.length;
textArea.oninput=function(){
    count.innerHTML=maxLeangth-this.value.length;
    if(  count.innerHTML == 0){
        count.classList.add("ibrahim");
    }else{
        count.classList.remove("ibrahim");

    }
}
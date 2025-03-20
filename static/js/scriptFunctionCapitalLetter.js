let str = document.querySelector("#text");
let clickedStr = document.querySelector("#click_me");

clickedStr.addEventListener("click", function() {
    str.textContent = capitalizeLetters(str.textContent);


},false);

function capitalizeLetters(string) {
    let odlArray = string.split(' '); 
    let newArray = []; 
    
    for (let i = 0; i < odlArray.length; i++) { 
        newArray.push(odlArray[i].charAt(0).toUpperCase() + odlArray[i].slice(1));
    }
    
    return newArray.join(' '); 
}
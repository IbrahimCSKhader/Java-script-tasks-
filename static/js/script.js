//  add defulf color from local storeg
document.body.classList.add(localStorage.getItem('pageColor')||'green')
var el=document.querySelectorAll(".color-switcher li");
var classList=[];

//loop On elements
for(var i=0;i<el.length;i++){
    // Get Classes List
    classList.push(el[i].getAttribute('data-color'));
    el[i].addEventListener('click',function(){
        //remove all old classes
        document.body.classList.remove(...classList);
        // the above code equal to 
        //   document.body.classList.remove("purple black green");

        //add current class from li data atribute
        document.body.classList.add(this.getAttribute('data-color'));

        // add data To local storage
        localStorage.setItem("pageColor",this.getAttribute('data-color'));
        console.log(localStorage.getItem("pageColor"))



    },false)

}

var input=document.getElementById("myinput");
input.onfocus=function(){
'use strict';
// stroe placeholder 
this.setAttribute('data-place',this.getAttribute('placeholder'));
// empty the placeholder
this.setAttribute('placeholder',"")

} 
input.onblur=function(){
'use strict';
// stroe placeholder 
this.setAttribute('placeholder',this.getAttribute('data-place'));
// empty the placeholder
this.setAttribute('data-place',"")

} 

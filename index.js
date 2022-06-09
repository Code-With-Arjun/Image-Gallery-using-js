

let a=document.querySelectorAll(".image-png");
let x=document.getElementById("logo-image");


for(let r of a){
    r.addEventListener('click',(e)=>{
x.src=e.target.src;
    });


}


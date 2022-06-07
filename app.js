let count=0
let btns =document.querySelectorAll(".btn")
let value=document.querySelector("#value")

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const style= e.currentTarget.classList;
        if(style.contains("decrease")){
            count--;

        }
        else if(style.contains("increase")){
            count++;
            
        }
        else{
            count=0;
        }
        value.textContent=count;
    });
});

/* function decrease(){
     let numd= document.getElementById("value").textContent
        numd--;
     document.getElementById("value").innerHTML=numd
}

document.getElementByClassName("decrease").addEventListener("click", decrease)

function increase(){
    let numIn= document.getElementById("value").textContent
     numIn++;
   document.getElementById("value").innerHTML=numIn
}

document.getElementByClassName("increase").addEventListener("click", increase)

function reset(){
    let reset= document.getElementById("value").textContent
     reset=0;
   document.getElementById("value").innerHTML=reset;
}

document.getElementByClassName("reset").addEventListener("click", reset)
*/

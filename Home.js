let animeText = document.querySelector("#anime-text")
let basicsDiv = document.querySelectorAll(".basic >div")

let names = ["WEB-DEVELOPER.","TECH-ENTHUSIAST." , "BALLER." ]

let idx = 0;
let word = names[idx];
let text = "";
let flag = false;
let prevEl = basicsDiv[0];

window.addEventListener("load" , ()=>{
    typeWords();
})

function typeWords(){

    if(flag && text.length == 0){
        idx = (idx+1)%names.length;
        word = names[idx];
        flag = false;
    }

    if(text.length == word.length){
        flag = true;
    }
    
    text = flag ? word.substring(0,text.length-1) : word.substring(0,text.length+1)
    animeText.innerHTML  = text;
    setTimeout(typeWords , text.length == word.length ? 1100 : 300);
}

for(let i=0;i<basicsDiv.length;i++){
    
    basicsDiv[i].addEventListener("click",(e)=>{
        e.stopPropagation()

        if(e.currentTarget.classList.contains("active")){
            
            e.currentTarget.classList.remove("active");
        }else{
            prevEl.classList.remove("active");

            prevEl = e.currentTarget

            e.currentTarget.classList.add("active");
        }
    })
}  


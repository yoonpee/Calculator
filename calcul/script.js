const screen = document.querySelector(".display span");
const btn = document.querySelectorAll(".btn");
const clear = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");
const yellow = document.querySelectorAll(".btn-yellow");
console.log(yellow);
btn.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let value = e.target.dataset.num;
        screen.innerText += value;
    
    });
});
equal.addEventListener('click', (e)=>{
    
     if(screen.innerText === "0"){
         screen.innerText = "Please Enter a number";
     }
     else{
         let result = eval(screen.innerText);
         screen.innerText = result;
     }
});
clear.addEventListener('click',()=>{
    screen.innerText = '';
})

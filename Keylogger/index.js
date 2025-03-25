/*for (var i=1; i<=100; i++){
    console.log();
}
console.log("hello");*/

/*
var i=1;

do{
console.log("i am pro developer",i)
i++;
}
while(i<10);*/

/**function jod(a,b){
 
    return(a+b);

}

let addition =jod(10,20)
console.log(addition)*/

//arrow function

/*let sum=(a,b)=>{

    return(a-b);
}
console.log(sum(5,3));*/

//or 

/*let multi=(a,b)=>console.log(a*b);
multi(3, 8);*/

//map function 

// let sa=[2,4,6,8,12];

// let newsa=sa.map(function(number){
//     return number*2;
    

// })
// console.log(newsa);
// //or

// const newarray=sa.map(num=>num+10);
// console.log(newarray);

const btnstart=document.getElementById('btnstart');
const btnstop=document.getElementById('btnstop');
const log=document.getElementById('log');
const state=document.getElementById('state');

btnstart.addEventListener('click',()=>{
    btnstart.disabled=true;
    btnstop.disabled=false;
    document.addEventListener('keydown',handledown);
    document.addEventListener('keyup',handleup);
    
})
function handledown(event){
    log.textContent=`key ${event.key} is pressed`
}
function handleup(event){
    state.textContent=`key ${event.key} is released`
}



btnstop.addEventListener('click',()=>{
    btnstart.disabled=false;
    btnstop.disabled=true;
    document.removeEventListener('keydown',handledown);
    document.removeEventListener('keyup', handleup);
    log.textContent=("")
    state.textContent=("")
})
// function rmhandledown(event){
//     log.textContent=("")
// }
// function rmhandleup(event){
//     state.textContent=("")
// }
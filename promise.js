//promise basicallly means that if the stated value is completed or not !! it gives the resolve and reject depending upon if the promise is resolved or rejected. the syntax of the promise is given below=>
let promise1=new Promise((resolve,reject)=>{
    console.log("descision pending in p1");

setTimeout(() => {
    resolve(console.log("Promise solved"));
}, 5000);
})
promise1.then((value)=>{
    console.log(value);
})





let promise2=new Promise((resolve,reject)=>{
    console.log("descision pending in p2");

setTimeout(() => {
    reject(console.log("not solved rather rejected"))
}, 5000);
})

promise2.catch((error)=>{
    console.log("some error occured in promise2");
})

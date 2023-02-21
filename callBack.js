    //   callBack example 1
    // const funcA=()=>{
    //     setTimeout(function(){
    //         console.log("hii i am first but i am called here second");
    //     },3000)
    // }
    // const funcB=()=>{console.log("hi i am second but i am called first");}
    // funcA();
    // funcB();      
    
    // callBack example 2
    const perOne=(friend,calledyou)=>{
        console.log(`hello i am talking to ${friend} i'll call you back`
        );
    calledyou();}
        const perTwo=()=>{
            console.log(`hello i have called you! have you seen that??`);
        }
    perOne("Abhinay",perTwo);
    //here perTwo is a call back --jb tk phla vala function apna kaam na krle tb tk dusra nhi chlna chahiye
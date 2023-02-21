function myfunc1(){
    var x=setInterval(myfunc1,1000);
    var d=new Date();
    
    var time=d.toLocaleTimeString();
    var a=document.getElementById("timeplace").innerHTML=time;

   }
   
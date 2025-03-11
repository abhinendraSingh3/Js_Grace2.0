const display=document.getElementsByClassName('displaydiv')
let button=document.querySelectorAll('button')
let clear =document.getElementsByClassName('clear')


button.forEach(element=>{

    element.addEventListener("click",(e)=>{
        
        

        if(e.target.innerText==="C"){
            display[0].innerText=""      
        }
        else if(element.innerText==="<"){
            
            display[0].innerText=display[0].innerText.slice(0,-1)
            
        }
        else if (element.innerText==="="){
            display[0].innerText=eval(display[0].innerText)

        }

        else {
           var1=display[0].innerText += e.target.innerText;
        }
        display.scrollleft=display.scrollleft

        
    })
    
})




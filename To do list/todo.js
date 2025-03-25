const userInput=document.getElementById('input')
const addBtn=document.getElementById('btn')
const eroor=document.getElementById('notEntered')
const dataE=document.getElementById('dataDiv')


addBtn.addEventListener('click',()=>{
    const task=userInput.value.trim();
    
    
    if(task){
        const newDiv=document.createElement('div')
        newDiv.id='data'
        const newSpan=document.createElement('span')
        newSpan.id="text"
        const newBtn=document.createElement('button')
        newBtn.id='btnRemove'

        newSpan.innerText=task
        newBtn.innerText="x"

        newDiv.appendChild(newSpan)
        newDiv.appendChild(newBtn)

        dataE.appendChild(newDiv)

        newBtn.addEventListener('click',()=>{
            dataE.removeChild(newDiv)
        })
        userInput.value=""
        eroor.innerText=""

    }
    else{
        eroor.innerText="Please enter text to continue"
        eroor.style.color="red"
    }
  

    
})
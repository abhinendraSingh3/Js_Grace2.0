const expenseForm=document.getElementById('desc');
const expType= document.getElementById('exType');
const amount=document.getElementById('amount');
const button=document.getElementById('btn');

button.addEventListener('click',()=>{

    if(expenseForm && expType && amount){
        let typeV=expType.value
        let descV=expenseForm.value
        let amtV=amount.value
        

        console.log(typeV,descV,amtV)
    }


})
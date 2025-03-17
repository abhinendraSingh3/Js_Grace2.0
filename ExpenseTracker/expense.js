
const button=document.getElementById('btn');
const form=document.getElementById('expenseTracker')

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const expenseForm=document.getElementById('desc').value.trim()
    const expType= document.getElementById('exType').value
    const amount=document.getElementById('amount').value.trim()
    const tbody=document.querySelector('tbody')
    if(expenseForm && expType && amount){

        const newTr=document.createElement('tr')

        // const newExDes=document.createElement('td')
        // const newExType=document.createElement('td')
        // const newAmt=document.createElement('td')

        // console.log(newExDes);
        
        // newExDes.innerText=expenseForm
        // newExType.innerText=expType
        // newAmt.innerText=amount

        // tbody.appendChild(newTr)
        // newTr.appendChild(newExDes)
        // newTr.appendChild(newExType)
        // newTr.appendChild(newAmt)

        //-------------------------or-------------

        newTr.innerHTML=`<td>${expenseForm}</td> <td>${expType}</td> <td>${amount}</td>`

        tbody.appendChild(newTr)

        form.reset();
        
        
    }

    else{
        alert("please fill all fields")
    }


})
const button=document.getElementById('submit')
const inSearch=document.getElementById('input')
const details=document.getElementById('show')




button.addEventListener('click',()=>{
    console.log(inSearch.value);
    
    const url=`https://api.github.com/users/${inSearch.value}`
    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new Error("Data can't be found")
        }

        return response.json()
    
    })
    .then(data=>{
        console.log(data)
        details.innerText=data.following
    
    })
    .catch(error=>{
        console.log('Unable to access')
    })

     
})
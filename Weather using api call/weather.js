
const key='9c894e807a4046b7aae173551221507'
const cityname=document.getElementById("searchName")
const button=document.querySelector('.searchBtn')
const input=document.getElementById('placeName')
const country=document.getElementById('country')
const temperature=document.getElementById('temperature')
const condition=document.getElementById('condition')



button.addEventListener('click',()=>{
    const userInput =cityname.value
    
    if (userInput==""){
        alert("enter a place name")
        return; //if this return will not be there then it throw another alert error as mentioned in .catch() below 
    }

    const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${userInput}&aqi=no`

    fetch(url)
        .then(response=>{
            if(!response.ok)//.ok is property of response 
            {
            throw new Error('weather not found');}
            return response.json()
        })
        .then(data=>{
            input.innerText=data.location.name //.data.location.name is just format for accessing the elements in an api
            temperature.innerText=`${data.current.temp_c} °C`; //°C is used with backticks``
            condition.innerText=data.current.condition.text
            country.innerText=data.location.country

        })
        .catch(error=>{
            input.innerText=""
            temperature.innerText=""
            condition.innerText=""
            country.innerText=""

            console.error('error',error)
            alert("failed to fetch weather")
        })

    
})
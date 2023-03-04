fetch("https://api.covid19api.com/summary").then((apidata)=>{
return apidata.json();
})
.then((actualData)=>{
    console.log(actualData.Countries[77].);
})
.catch((error)=>{
    console.log(error);
})
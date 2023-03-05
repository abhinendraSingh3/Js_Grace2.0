

fetch('https://api.themoviedb.org/3/trending/all/day?api_key=0b944c679b999c93a44ef185ac3b7d67')
	.then(response => response.json())
	.then((actualData)=>{
        let name=actualData.results[ran].title;
        console.log(name);
        
    })
	.catch(err => console.error(err));
    // 0b944c679b999c93a44ef185ac3b7d67

const ran=Math.floor((Math.random())*10);

// async function getResponse(){
//     const response=await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=0b944c679b999c93a44ef185ac3b7d67')
//     return response.json()
// };  
// getResponse()
// .then((json)=>console.log(json.results[ran])
// )
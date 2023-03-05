import React from "react";

function Card(props) {
    // const ran=Math.floor((Math.random())*10);
    // let url='https://api.themoviedb.org/3/trending/all/day?api_key=0b944c679b999c93a44ef185ac3b7d67'
    // fetch('https://api.themoviedb.org/3/trending/all/day?api_key=0b944c679b999c93a44ef185ac3b7d67')
	// .then(response => response.json())
	// .then((actualData)=>{
    //     let name=actualData.results[ran].title;
    //     console.log(name);
        
    // })
	// .catch(err => console.error(err));
    // 0b944c679b999c93a44ef185ac3b7d67
    
    // async function data(){
    //  let response=await fetch(url);
    //  return await response.json()
    //  console.log(response)
    // }




    return (

        <div className='cardBody'>
            <img src={props.img} alt="logo"  id="imge"/>
            <div id="txts">
            <p> Netflix Original Series</p>
            <h3>{props.title}</h3>
            <button type="button" > Watch Now</button>
            </div>
            
        </div>

    )

}

export default Card;
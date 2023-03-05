import React from "react";

function Card(props) {
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
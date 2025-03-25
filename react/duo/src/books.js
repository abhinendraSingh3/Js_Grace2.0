

function Books(props) {
    return (
        <>
        <div className="main">
            <img src={props.image} alt="imag1"></img>
            <div class="second">
                <h1>{props.name}</h1>
                <h3>{props.autor}</h3>
                <h2>{props.price}</h2>
                <button>Add to cart</button>
            </div>
        </div>
       
        </>
    )
}

export default Books;
import Books from "./books"
import book from "./book.json"


//----this is the first way but the issue is with this that we cant just add so many objects and its not even easy to call under Booklist each and every time when a new book addition is there. so to overcome this we will introduce second method to overcome this multiple places editng

// const book1={
//     imagesrc:"https://m.media-amazon.com/images/I/41PIlFeDT3L._SY445_SX342_.jpg",
//     name:"The land of sweet forever",
//     author:"by Harper Lee",
//     price:"500Rs"
// }

// const book2={
//     imagesrc:"https://m.media-amazon.com/images/I/41XY-41Cy+L._SY445_SX342_.jpg",
//     name:"The 5 Types of Wealth : A Transformative Guide to Design Your Dream Life",
//     author:"by Sahil bloom",
//     price:"400Rs"
// }

// const Booklist=()=>{
//     return(
//         <div>
//             <Books image={book1.imagesrc} name={book1.name} author={book1.author} price={book1.price} />
//             <Books image={book2.imagesrc} name={book2.name} author={book2.author} price={book2.price} />
//         </div>

//     )
// }

//OPTIMIZED METHOD 1-------this method specifies the user of arrays and iterative method like map.in this we have solved our one problem that we dont need to define each and everytime in Booklist function


// const book = [// this is we have defined any array and inside of that we have defined objects and these objects are iterable through map function. 
//     {
//         imagesrc: "https://m.media-amazon.com/images/I/41PIlFeDT3L._SY445_SX342_.jpg",
//         name: "The land of sweet forever",
//         author: "by Harper Lee",
//         price: "500Rs"
//     },
//     {
//         imagesrc: "https://m.media-amazon.com/images/I/41XY-41Cy+L._SY445_SX342_.jpg",
//         name: "The 5 Types of Wealth : A Transformative Guide to Design Your Dream Life",
//         author: "by Sahil bloom",
//         price: "400Rs"
//     },
    
// ]
    // function Booklist() {
    //     return(
    //                 book.map((ele)=>{// this is map function, we iterative items with help of ele and we have passed ele in below calling code
    //                     return(
    //                         <Books image={ele.imagesrc} name={ele.name} author={ele.author} price={ele.price} />
    //                     )
                        
    //                 })

    //     )
    // }
    
//--------OPTIMIZED METHOD 2: WE WILL JUST DEFINE JSON FILE AND THEN WE NEED TO JSUT UPDATE IN THAT NOT EVERY TIME WE WILL COME TO THIS FILE AND ADD BOOKS FOR THE WE WILL CREATE JSON FILE OF BOOKS AND IMPORT HERE AND WE WILL REMOVE THE BELOW SECTION



// const book = [// this is we have defined any array and inside of that we have defined objects and these objects are iterable through map function. 
//     {
//         imagesrc: "https://m.media-amazon.com/images/I/41PIlFeDT3L._SY445_SX342_.jpg",
//         name: "The land of sweet forever",
//         author: "by Harper Lee",
//         price: "500Rs"
//     },
//     {
//         imagesrc: "https://m.media-amazon.com/images/I/41XY-41Cy+L._SY445_SX342_.jpg",
//         name: "The 5 Types of Wealth : A Transformative Guide to Design Your Dream Life",
//         author: "by Sahil bloom",
//         price: "400Rs"
//     },
    

function Booklist() {
    return(
        

                book.map((ele)=>{// this is map function, we iterative items with help of ele and we have passed ele in below calling code
                    return(
                        <Books image={ele.imagesrc} name={ele.name} author={ele.author} price={ele.price} />
                    )
                    
                })
    

    )
}

export default Booklist;


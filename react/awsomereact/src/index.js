import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import Navbar from './Navbar'
import Card from './Card'

ReactDom.render(

<>
<Navbar/>
<Card title img="./im/Stranger Things _ une saison 4 bien plus sombre et horrifique que les précédentes [VERDICT].jpeg"/>
<Card title="Dahmer" img="./im/Dahmer Monster_ The Jeffery Dahmer Story.jpeg"/>
<Card title="Bridgerton "img="./im/Bridgerton.png"/>
<Card title="Wednesday" img="./im/Wednesday.jpeg"/>
<Card title="Naruto" img="./im/na.jpeg"/>
</>,
document.getElementById('root')

)



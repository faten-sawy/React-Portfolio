import React from 'react' 
import './card.css'

function Card (props) {
    
    return(
        <div className="card" style={{backgroundColor:props.color}}>
        <p>
         {props.name}
         <hr></hr>
        </p>       
        </div>
    )     
}

export default Card
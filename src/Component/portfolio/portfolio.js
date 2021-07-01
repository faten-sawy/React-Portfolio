import React from 'react'
import Card from './card'

class Portfolio extends React.Component {
    render(){
        return(
            <div className="portfolioContainer">
            <h1 style={{marginTop:"40px",marginLeft:"20px"}}>Portfolio</h1>
            <div className="cardContainer">
                <Card name="web design" color="#FF9567"/>
                <Card name="Html" color="#FFC256"/>
                <Card name="React" color="#FF9567" />
                <Card name="Angular" color="#FFC256"/>
                <Card name="Es6" color="#FF9567"/>
                <Card name="CSS" color="#FFC256"/>
            </div>        
            </div>
        )
    }
}
export default Portfolio
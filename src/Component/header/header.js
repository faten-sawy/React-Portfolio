import React from 'react'
import './header.css'

class Header extends React.Component{
    render(){
        return(
            <div className="headerContainer">
                <div className="info">
                    <h1>Faten Magdy</h1>
                    <h3>Web developer</h3>
                    <button>Contact me</button> 
                </div> 
            </div>
        
        )
    }
}
export default Header

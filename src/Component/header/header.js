import React from 'react'
import './header.css'
import {Col, Container,Row} from 'react-bootstrap'

const Header=()=>{
    
        return(
            /* <div className="headerContainer"> */
            <Container fluid>
            <Row className="headerContainer "  >
            <Col className="info" xs={12} md={8} lg={5}>
                <h1>Faten Magdy</h1>
                <h3>Web developer</h3>
                <button>Contact me</button> 
            </Col> 
            </Row>              
            </Container>
                
           /*  </div> */
        
        )
    
}
export default Header

import React from 'react'
import './about.css'
import {Container,Col,Row} from 'react-bootstrap'

const About=()=>{   
    return(
        /* <div className="aboutContainer"> */
        <Container fluid className="mt-5">
        <Row>
            <Col xs={12} md={6} lg={6} >
            <h1 className="aboutHead">About Me</h1>
            </Col>          
            <Col xs={12} md={6} lg={6} >
                <p>React Bootstrap is one of the widely used libraries in React, and its various components are used in React apps to make them mobile-friendly. It has tons of components that give apps the various details of layout, form controls, information indicators, and navigational componentsReact Bootstrap is one of the widely used libraries in React, and its various components are used in React apps to make them mobile-friendly. It has tons of components that give apps the various details of layout, form controls, information indicators, and navigational components.</p>
                <button className="downloadBtn">download resume</button>
            </Col>
        </Row>
        

        </Container>
                   
        /* </div> */
    )
    
}
export default About
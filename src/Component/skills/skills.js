import React, { Fragment, useState } from 'react'
import Progress from './progress'
import './skills.css'
import { Container,Row,Col } from 'react-bootstrap'

const Skills=()=>{

  const[skill]=useState([{name:"HTMl",value:90},{name:"CSS",value:60},
  {name:"bootstrap",value:70},{name:"React",value:80},{name:"Angular",value:60},{name:"Es6",value:90},
  {name:"Sass",value:80},{name:"Webpack",value:50}])
    
      return(
        <Container fluid className="skillsContainer">
        <Row  >
        <Row className="mt-5" lg={7}>
        <h1>Skills</h1>
        <p className="skillP">React Bootstrap is one of the widely used libraries in React, and its various components are used in React apps to make them mobile-friendly. It has tons of components that give apps the various details of layout, form controls, information indicators, and navigational componentsReact Bootstrap is one of the widely used libraries in React, and its various components are used in React apps to make them mobile-friendly. It has tons of components that give apps the various details of layout, form controls, information indicators, and navigational components.</p>
        </Row>
        <Row className="mt-5">
        <Col className="focusSkill">
        <h4>My Focus Skill</h4>
          <hr className="focusSkillHr"></hr>
          <h6>Web Design</h6>
          <h6>UI&Ux Design</h6>
          <h6>Mobile App Design</h6>
          <h6>Responsive Design</h6>
        </Col>
        <Col>
        {skill.map((item)=>(
          <Fragment key={item.name}>          
            <Progress value={item.value}
                  name={item.name} />
          </Fragment>                    
        )
        )
        }
        </Col>
        </Row>      
        </Row>
        
        </Container>
      )   
}
export default Skills
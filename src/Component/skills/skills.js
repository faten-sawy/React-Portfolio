import React from 'react'
import Progress from './progress'
import './skills.css'

class Skills extends React.Component{
    render(){
      let arrOfName=["Html","Css","bootstrap","React","Angular","Es6","Sass","Webpack"]
      let arrOfValue=["90","60","20","90","70","70","80","50"]
        return(
            <div className="skillsContainer">
                <div className="skillInfo">
                    <h1>Skills</h1>
                     <p>React Bootstrap is one of the widely used libraries in React, and its various components are used in React apps to make them mobile-friendly. It has tons of components that give apps the various details of layout, form controls, information indicators, and navigational componentsReact Bootstrap is one of the widely used libraries in React, and its various components are used in React apps to make them mobile-friendly. It has tons of components that give apps the various details of layout, form controls, information indicators, and navigational components.</p>              
                    <div className="skillDetail">
                      <div className="focusSkill">
                        <h4>My Focus Skill</h4>
                        <hr className="focusSkillHr"></hr>
                        <h6>Web Design</h6>
                        <h6>UI&Ux Design</h6>
                        <h6>Mobile App Design</h6>
                        <h6>Responsive Design</h6>
                      </div>
                      <div className="Progress">
                      
                      {arrOfName.map((item)=>(
                        <div className="prog" key={arrOfName.indexOf(item)}>
                          <Progress value={arrOfValue[arrOfName.indexOf(item)]}
                                name={item}/>        
                       </div>
                      )
                      )
                      }
                      </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Skills
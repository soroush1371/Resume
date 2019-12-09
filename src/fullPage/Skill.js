import React, {Component} from 'react'
import data from '../data.json';
import './fullPage.css';


class Skill extends Component{
render(){
    return(
        <div className="fullPage third">
            <h2 style={{verticalAlign:"top"}}>
                {data.Sections[1].title}
            </h2>
                
                    <div className="card-wrapper">
                   { data.Sections[1].items.map(skill => {
                        return(
                            <div className="card">
                            <div className="image-wrapper">
                                <img alt="skill"  src={skill.Content.image}></img></div>
                                <div className="skill-title-wrapper">
                           <h4>{skill.Content.title}</h4>    
                              </div>
                            </div>
                        )
                        
                    })
                    
                }
           
        </div>
       </div>
    )
}
    
}



export default Skill;
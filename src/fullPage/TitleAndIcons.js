import React, {Component} from 'react'
import data from '../data.json';
import './fullPage.css';
import { SocialIcon } from 'react-social-icons';
import Down from './Down'
import * as Scroll from 'react-scroll';
import { Link, Element} from 'react-scroll'

class TitleAndIcons extends Component{
  state={
    color:'white'
  }
  changeColor(){
       this.setState({
         color: this.state.color === 'yellow'?'white':'yellow' 
       })
  }

  render() {
      return(
       
        <div className="fullPage first">
            
                 
               
       <h1 style={{
         color:this.state.color
        }}
        onMouseLeave={()=>{
          this.changeColor()
 }}
        onMouseOver={()=>{
          this.changeColor()
 }}
     
 
       >{data.title}</h1>
      <h2 className="title">
      {data.subtitle}
      </h2>
        <div>
             {Object.keys(data.link).map(key => {
               return (
                  <SocialIcon url={data.link[key]} />
                     )
             })
            }
            </div>
          
          <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} >
            <Down/></Link>
           <Element name="About" className="element" style={{ transform:"translateY(+155px)"}}>
                   
        </Element>
            </div>

            
      )
  }
}

export default TitleAndIcons;
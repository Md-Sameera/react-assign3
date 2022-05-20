import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Styles.css";

        
class  Second extends Component {
  constructor(props){
    super(props)
    console.log(props.data)
  }
 
  render() {  
  return (
    <div>
     <div className='result'>
       <h1>EMPLOYEE FEEDBACK FORM</h1>
      {this.props.records.map((currElem)=>{
                 return (
                    <div className='data'>
                         <b> Name : </b><p> {currElem.Name} ||</p> 
                         <b>Department :</b><p>{currElem.Department} || </p>
                         <b>Rating : </b><p>{currElem.Rating}</p>
                    </div>)
      })}
      <br/>
     </div>
     <button ><Link to="/first" state={this.props}><b>GO BACK</b></Link> </button>
    </div>
  )
}
}
export default Second

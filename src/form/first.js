import React , { useState} from 'react';
import { Link } from 'react-router-dom'
import "./Styles.css";
// export const one=createContext()

export default function First(props) {
    const [fdata, setState]= useState([0]);
    const [records, setRecord]= useState([])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState(values => ({...values, [name]: value}));

      };
       
    const  handleSubmit = (event)=>{
        event.preventDefault();
        const newRecord={...fdata}
        setRecord([...records,newRecord]);
        setState({ Name: "" , Department:"",Rating:""});
        event.preventDefault();
       
    };
  return (
    <>
    
    <div>
      <form onSubmit={handleSubmit}>
    <br/>
    <div ><h1> EMPLOYEE FEEDBACK FORM </h1></div>
    <br/> <br/>
    <label> <b>Name  : </b>
       <input type="text" placeholder='Enter your name' name="Name" value={fdata.name} onChange={handleChange} />
       </label><br/> <br/>
    <label><b>Department  : </b>
        <input type="text" placeholder='Enter department' name="Department" value={fdata.dept} onChange={handleChange}  />
        </label><br/> <br/>
    <label> <b>Rating  : </b>
        <input type="number" placeholder='Rate here.' name="Rating" value={fdata.rat} onChange={handleChange} />
        </label><br/> <br/> <br/>
        <button ><Link to="/second" state={records}><b>SUBMIT</b></Link></button>
        
    </form>
    </div>
    
    </>
  );
}
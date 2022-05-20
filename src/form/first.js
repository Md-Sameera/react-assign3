import React , { useState} from 'react';

import "./Styles.css";
// export const one=createContext()

const First=()=> {
    const [fdata, setState]= useState([1]);
    const [data,setNext]=useState([false]);
    const [records, setRecord]= useState([0])
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
        setNext(true)
       
    };
    const goback = () =>{
      setNext(false);

    }
   
  return (
    <>
    <div>{data ? null :
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
        <button ><b>SUBMIT</b></button>
        
    </form>
}
    </div>
    {data ?
     <div>
       <h1>EMPLOYEE FEEDBACK FORM</h1>
       <div className='result'>
       {
        records.map((currElem) => {
          
                 return(
                    <div className='data'>
                         <b> Name : </b><p> {currElem.Name} ||</p> 
                         <b>Department :</b><p>{currElem.Department} || </p>
                         <b>Rating : </b><p>{currElem.Rating}</p>
                    </div>)
      })
    }
      <br/>
      </div>
     {data?<input id="submit" onClick={goback} type="button" value="Go Back "/>:null }
    {/* {data ? <button ><Link to= {} state={this.props}><b>GO BACK</b></Link> </button> :null } */}
    </div>:null}
    </>
  );
}

export default First

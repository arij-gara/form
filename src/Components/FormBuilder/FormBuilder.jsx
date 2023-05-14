import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import './FormBuilder.css'
import Navbar from "../Navbar/Navbar"
import Formcontrol from '../Formcontrol/Formcontrol';
function FormBuilder() {
  const [fields, setFields] = useState([]);
  const [newobject,setnewobject] = useState("")
   

  
  const addField = (type) => {
    const id = Date.now().toString();
    const label = `${type} field`;
    const name = `${type}_${id}`;
    const  placeholder = "a";
    const newField = { id, type, label, name, placeholder };
    setnewobject(newField)
    setFields([...fields, newField]);
  };
  
   

  
  return (
    <>
    <Navbar />
    
   <div className ="all">
    <div className="leftsection">
        
    <div className="form-builder">
    <h2 className="form-builder__heading">Form Builder</h2>
    <div className="form-builder__buttons">
      <button className="form-builder__button" onClick={() => addField('text')}>Add Text Field</button>
      <button className="form-builder__button" onClick={() => addField('number')}>Add number Field</button>
      <button className="form-builder__button" onClick={() => addField('date')}>Add date Field</button>
      <button className="form-builder__button" onClick={() => addField('checkbox')}>Add Checkbox Field</button>
      <button className="form-builder__button" onClick={() => addField('radio')}>Add Radio Button Field</button>
      <button className="form-builder__button" onClick= {() => addField('file')}>Add File field</button>
    </div>
    </div>
    </div>
     <div className="middlesection">
    
    <Form fields={fields} />
    </div>
    <div className="rightsection">
    <Formcontrol newobject= {newobject}   />
    </div>
    
    </div>
    </>
  );
}

export default FormBuilder;

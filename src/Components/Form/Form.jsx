import React from 'react';
import './Form.css'
import { useSelector } from 'react-redux';
function Form(props) {
  const { fields } = props;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
  };
  const user = useSelector ((state) => state.user.value)
  return (
   
    <form className="form">
      {fields.map((field) => (
        <div key={field.id} className="form__group">
          <label htmlFor={field.name} className="form__label">{user.label}</label>
          {field.type === 'text' && <input type="text" id={field.name} name={field.name} placeholder= {user.placeholder} className="form__input" />}
          {field.type === 'number' && <input type="number" id={field.name} name={field.name} className="form__input" />}
          {field.type === 'date' && <input type="date" id={field.name} name={field.name} className="form__input" />}
          {field.type === 'checkbox' && <input type="checkbox" id={field.name} name={field.name} className="form__input" />}
          {field.type === 'radio' && (
            <div className="form__radio-group">
              <input type="radio" id={`${field.name}_option1`} name={field.name} value="option1" className="form__radio" />
              <label htmlFor={`${field.name}_option1`} className="form__radio-label">Option 1</label>
              <input type="radio" id={`${field.name}_option2`} name={field.name} value="option2" className="form__radio" />
              <label htmlFor={`${field.name}_option2`} className="form__radio-label">Option 2</label>
            </div>
          )}
          {field.type === 'file' && <input type="file" id={field.name} name={field.name} className="form__input" />}

        </div>
      ))}
      <button type="submit" className="form__button">Submit</button>
      </form>
  );
}

export default Form;

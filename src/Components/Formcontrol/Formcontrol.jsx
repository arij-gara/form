import React ,{useState}from 'react'
import  {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {modify} from "../../features/labels"
export default function Formcontrol({newobject}) {
  const dispatch = useDispatch ()
    const  user = useSelector ((state) => state.user.value)
    const label = newobject.label
    const placeholder= newobject.placeholder
    
    const [newlabel,setnewlabel]= useState(label)
    const [newplaceholder,setnewplaceholder]= useState(placeholder)
   
    const handelchange = (e) =>{
    setnewlabel(e.target.value)
    console.log(newlabel)
    }
    const handelchangeplaceholder = (e) =>{
    setnewplaceholder(e.target.value)
    console.log(newplaceholder)
    }
    const handelsubmit = (e) =>{
       e.preventDefault();
        dispatch (modify({placeholder: `${newplaceholder}` , label :`${newlabel}`}))
       }
       
  return (
    <div>
     {console.log(newobject)}

     <form className="form">
        {newobject.type === 'text' ?
        <div>
     <h4>update your form</h4>
     <div key={newobject.id} className="form__group">
         <div>
        <label>change the label </label>
          <input placeholder={user.label} onChange ={handelchange}></input>
          </div>
          <div>
          <label>change the placeholder </label>
          <input placeholder={user.placeholder} onChange ={handelchangeplaceholder}></input>
          </div>
          
          </div>
          <button onClick ={ (e)=> {handelsubmit(e)}}>Submit</button>
          </div>
         
:<></> } 

     </form>
    </div>
  )
}

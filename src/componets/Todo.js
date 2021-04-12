
import React from 'react';
import { useState} from 'react';

import './Todo.css';


const Todo = ({handleDelete, handleEdit, task, id, date}) => {

    const[popUp, setPopUp] = useState(false);

    const handleDeletes = () => {
        setPopUp(true);
    }

    const handleCancel = () => setPopUp(false);

    return (
        
        <>
           <div className= "result_text">
               <p className="task_tittle" >{task}</p>
               <p className="result_textP" >{date}</p>
          </div>
          <div>
              <button onClick={() => handleEdit(id, task)} className="button green" >Edit</button>
              <button onClick={handleDeletes} className="button" >delete</button>
         </div>
         {popUp &&  
         <div className="pop" >
             <div className="popContainer" >
               <p>You wanna delete this task?</p>
             <div className="pop_button" >
               <button onClick={handleCancel} className="pop_buttonCancel" >Cancel</button>
               <button onClick={() => handleDelete(id)} className="pop_buttonConfirm" >confirm</button>
             </div>
             </div>
         </div>} 
         
        </>

    );
};

export default Todo;
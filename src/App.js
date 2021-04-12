import './App.css';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';


import Todo from './componets/Todo';
import FirstLoad from './componets/FirstLoad'



function App() {

  const[inputValue, setInputValue] = useState("");
  const[todos, setToDos] = useState([]);
  const[noToDo, setNoToDo] = useState(false);
  
  

  const handleOnSubmit = (e) => {

    e.preventDefault();
    setNoToDo(false);
    let ide = nanoid();
    let date = new Date().toISOString().slice(0, 10);
    let newToDo = {task: inputValue, id: ide, date: date};
    setToDos([...todos, newToDo]);    
    setInputValue('');
  };

  const handleDelete = (id) =>{

    let newData = todos.filter((todo) => todo.id !== id);
    setToDos(newData);
    
  }

  const handleEdit = (id, task) => {

    setInputValue(task);
    let EditedData = todos.filter(edited => edited.id !== id );
    setToDos(EditedData); 
  }

 useEffect( () => {

  const saveData = JSON.parse(window.localStorage.getItem('taskes'));
  if(saveData.length !== 0){
     let saveData = JSON.parse(window.localStorage.getItem('taskes'));
     setToDos(saveData);
     console.log(JSON.parse(window.localStorage.getItem('taskes')).length);
       }else{
     setNoToDo(true);
   } 
 },[])

 useEffect(() => {
   window.localStorage.setItem('taskes', JSON.stringify(todos));
 }, [todos] )

  return (
    
    
    <div className="App">
      <div className="app_one" >
        <div className="ball three"></div>
        <div className="ball one"></div>
        <div className="ball two"></div>
        <h1 className="tittle" >To do app</h1>
        <form action="" className="form" onSubmit={handleOnSubmit} >
          <input type="text"
           placeholder="Go to the park..."
           onChange={(e) => setInputValue(e.target.value) } 
           value={inputValue} />
           <button type="submit" className="form_button" >ADD TO DO</button>
      </form>
      </div>
      {noToDo && <FirstLoad/>}
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="result">
            <Todo {...todo}  handleDelete={handleDelete} handleEdit={handleEdit} /> 
          </div>);
      })
      }
      </div>
  );
}

export default App;

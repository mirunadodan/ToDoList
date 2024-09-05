import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import { v4 as uuid } from 'uuid';


const initialToDos = () => {
  const data = JSON.parse(localStorage.getItem("todosSaturday"));
  if (!data) return []
  else return data
}
  
export default function ToDoListTuesday({day, color}) {
  const [toDos, setToDos] = useState(initialToDos)

  useEffect(() => {
    localStorage.setItem("todosSaturday", JSON.stringify(toDos))
  }, [toDos])

  const removeToDo = (id) => {
    setToDos(prevToDos => {
      return prevToDos.filter(t => t.id != id)
    })
  }
  const toggleToDo = (id) => {
    setToDos(prevToDos => {
      return prevToDos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        } else return todo;
      })
    })
  }
  const addToDo = (text) => {
      setToDos(prevToDos => {
        return [...prevToDos, {text: text[0].toUpperCase() + text.substring(1), id:uuid(), completed: false}]
      })
  }

  return (
    <div  className='list_container' style={{backgroundColor: color}}>
    <h1>{day}</h1>
    <List dense sx={{ width: '100%', margin:0 }}>
      {toDos.map((todo) => {
       return <ToDoItem key={todo.id} todo={todo} remove={removeToDo} toggle={toggleToDo}/>
      })}
      <ToDoForm addToDo={addToDo} />
    </List>
    
    {/* <NavBar /> */}

    </div>
  );
}
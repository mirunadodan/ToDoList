import React from 'react';
import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function ToDoForm({addToDo}) {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      if (text!="") {
        addToDo(text);
        setText("")
      }
    }
  return (
        <div>

          <form onSubmit={handleSubmit}>
          <ListItem>
          <TextField id="outlined-basic" className="form" label="New To Do" variant="outlined" value={text} onChange={handleChange}
          InputProps={{endAdornment: (
            <InputAdornment position='end'>
              <IconButton aria-label="create todo" edge="end" onClick={handleSubmit}>
                <AddIcon/>
              </IconButton>
            </InputAdornment>
          )}}/>           
          </ListItem>
          </form>

        </div>
  )
}

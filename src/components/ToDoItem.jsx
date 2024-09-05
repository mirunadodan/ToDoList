import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';


export default function ToDoItem({todo, remove, toggle}) {
    const labelId = `checkbox-list-secondary-label-${todo.id}`;
    return (
        <ListItem key={todo.id}>
            <ListItemIcon>
                <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={() => {toggle(todo.id)}}
                color="success"
                />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} sx={ { textDecoration: todo.completed ? 'line-through' : 'none' } } />
            <Button variant="outlined" onClick={() => {remove(todo.id)}}><DeleteIcon sx={{ color: "black" }} /></Button>
        </ListItem>
    );
}
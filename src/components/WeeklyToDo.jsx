import React from 'react';
import Button from '@mui/material/Button';
import ToDoListMonday from './ToDoListMonday';
import ToDoListTuesday from './ToDoListTuesday';
import ToDoListWednesday from './ToDoListWednesday';
import ToDoListThursday from './ToDoListThursday';
import ToDoListFriday from './ToDoListFriday';
import ToDoListSaturday from './ToDoListSaturday';
import ToDoListSunday from './ToDoListSunday';

export default function WeeklyToDo({colors}) {
  const handleClear = () => {
    localStorage.clear();
    location.reload();
  }
  const monday = Math.floor(Math.random()*colors.length)+1;
  const tuesday = Math.floor(Math.random()*colors.length)+1;
  const wednesday = Math.floor(Math.random()*colors.length)+1;
  const thursday = Math.floor(Math.random()*colors.length)+1;
  const friday = Math.floor(Math.random()*colors.length)+1;
  const saturday = Math.floor(Math.random()*colors.length)+1;
  const sunday = Math.floor(Math.random()*colors.length)+1;

  return (
    <>
    <Button variant="contained" className='clear' onClick={handleClear}>Clear All</Button>
    {/* <Button variant="contained" className='clear' onClick={handleAdd}>Add to all</Button> */}

    <div className='weekly_container'>
         <ToDoListMonday day="Monday" color={colors[monday]}/>
         <ToDoListTuesday day="Tuesday" color={colors[tuesday]}/>
         <ToDoListWednesday day="Wednesday" color={colors[wednesday]}/>
         <ToDoListThursday day="Thursday" color={colors[thursday]}/>
         <ToDoListFriday day="Friday" color={colors[friday]}/>
         <ToDoListSaturday day="Saturday" color={colors[saturday]}/>
         <ToDoListSunday day="Sunday" color={colors[sunday]}/>
    </div>
    </>
  )
}

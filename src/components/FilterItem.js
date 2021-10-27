import React from 'react'
import { useDispatch } from 'react-redux';
import { filterSearch } from '../reducer/todolist';
import TextField from '@mui/material/TextField';
const FilterItem = () => {
  
  
  const dispatch = useDispatch();
  
  
  
  return (
    <div>
      <center>
      <TextField
      hintText="Search your Todo"
      floatingLabelText="Searching..."
      type="text"
      onChange={e =>dispatch(filterSearch(e.target.value))}
      placeholder='....search'
      />

      </center>
    </div>
  )
}

export default FilterItem

import { Box, Button, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import useHabitStore from '../store/store';

const AddHabitForm = () => {
  const [name,setName] = useState<string>("")
  const [frequency,setFrequency] = useState<"daily" | "weekly">("daily") 
  const {addHabit} = useHabitStore()
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name.trim()){
      addHabit(name,frequency);
      setName('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box sx={{display:"flex", flexDirection:"column", gap:'2rem'}}>
            <TextField value={name} onChange={(e)=>setName(e.target.value)} fullWidth placeholder='Enter name' />
            <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={frequency}
    label="Age"
    onChange={(e)=>setFrequency(e.target.value as "daily" | "weekly")}
  >
    <MenuItem value={"daily"}>Daily</MenuItem>
    <MenuItem value={"weekly"}>Weekly</MenuItem>
  </Select>
  <Button type='submit' color='primary' variant='contained'>
    Add habit
  </Button>
        </Box>
      </form>
    </div>
  )
}

export default AddHabitForm

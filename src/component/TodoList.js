import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function TodoLists() {
    return (
        <div>
            <Paper
                component="form"
                sx={{ display: 'flex', width: 500, background: "#D9D9D9" }}
                className='px-2 mx-auto rounded-4'
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                <IconButton type="button" aria-label="search" className='p-1'>
                    <EditIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton aria-label="directions" className='p-1'>
                    <DeleteIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

export default TodoLists

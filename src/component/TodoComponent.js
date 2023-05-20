import React from 'react';
import logo from "../assests/images/heading.svg"
import line from "../assests/images/Line.svg"

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Button, Divider } from '@mui/material';
import TodoLists from './TodoList';


function TodoComponent() {
    return (
        <div className='container'>
            <div className='container-fluid text-center '>
                <img src={logo} alt="Heading" className='w-40 mt-3' />
                <Paper
                    component="form"
                    className='rounded-4 mx-auto mt-5 p-0 m-0'
                    sx={{ display: 'flex', width: 500 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        className='ps-2'
                    />
                    <Button type="button" sx={{ p: '6px', font: "Racing Sans One !important" }} className='border-start btnColor text-white rounded-4 text-capitalize fst-italic fw-bold px-4'>
                        {/* <SearchIcon /> */}
                        Add Task
                    </Button>
                </Paper>
                <img src={line} className='w-50 my-3' />
                <TodoLists />
            </div>
        </div>
    )
}

export default TodoComponent

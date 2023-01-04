import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import './addUserInfoForm.module.scss'

 const AddUserInfoForm = ({ name, goal, submitUserInfo, handleModalState, setGoal, setName }) => {


    function handleModalSubmit(){
      submitUserInfo()
      handleModalState()
    }
    return (
        <div className='forms-wrapper'>
              <CloseIcon className="close-modal-btn" onClick={handleModalState}/>

            <div className='new-user-form-wrapper'>
                  <h3>PROFILE DETAILS</h3>
                  <div className='new-user-form'>
                    <TextField id="outlined-basic" placeholder='User Name' label="User Name" variant="outlined" onChange={(e) => setName(e.target.value)} value={name} />
                    <TextField id="outlined-basic" placeholder='Personal Goal' label="Personal Goal" variant="outlined" onChange={(e) => setGoal(e.target.value)} value={goal} />
                    <Button variant="contained" onClick={() => handleModalSubmit()}>Submit</Button>
                  </div>
            </div>
      </div>
    )
}


export default AddUserInfoForm

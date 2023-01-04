import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EditIcon from '@mui/icons-material/Edit';


import './exerciseWidget.module.scss'

const ExerciseWidget = ({exercise, editExercise, user}) => {


    const [percentSelected, SetPercentSelected] = React.useState('');


    const handlePercentSelectChange = (event) => {
        SetPercentSelected(event.target.value);
      };


 
    return ( 
        <div className="card-wrapper" key={exercise.id} >
               {exercise ? (
                 <div>
                 <div className='exercise-name'>
                     <div className='name'> <span className='icon'><FitnessCenterIcon/></span> <span>{exercise.exerciseName} </span> </div>
                     <div className='edit-btn'> <EditIcon onClick={() => editExercise()}/> </div>
                 </div>
           
                 <div className='first-row'> 
                     <div className='value-box'><div className='label'> 1 Rep Max: </div> <div>{exercise.oneRepMax}</div>  </div>
                     <div className='value-box'><div className='label'> Goal: </div> {exercise.exerciseGoal}</div>
                 </div>
                
                <div className='second-row'> 
                     <div className='value-box'><div className='label'> Sets: </div> {exercise.sets}</div>
                     <div className='value-box'><div className='label'> Reps: </div> {exercise.reps}</div>
                      <div className='value-box'><div className='label'> Rest Time: </div> {exercise.restTime}</div>
                </div>
           
                 <div className='select-item-wrapper'>
                     <label>Percent of Max:</label>
                     <select
                         id="demo-simple-select-standard"
                         value={percentSelected}
                         onChange={handlePercentSelectChange}
                     >
                     {exercise.percentages.map((item) => <option key={item.percentile} value={item.percentile}>{item.percentile} % of one rep max: {item.percentOfMax} lbs</option>)}
                     </select>
           
                 </div>
                 
            </div>
               ) : ''}


             </div>
    )
}

export default ExerciseWidget

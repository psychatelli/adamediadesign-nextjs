import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import './exerciseForm.scss'

 const AddExerciseForm = ({  handleAddExerciseModalState, setUser, user, exerciseToEdit, setExerciseToEdit, }) => {


  const [exerciseName, setExerciseName] = useState('')
  const [oneRepMax, setOneRepMax] = useState('')
  const [isWeightedExercise, setIsWeightedExercise] = useState(false)
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [exerciseGoal, setExerciseGoal] = useState('')
  const [restTime, setRestTime] = useState('')


      useEffect(() => {
        if(exerciseToEdit){
          fillEditExerciseForm()
        }
      }, [exerciseToEdit])

      const fillEditExerciseForm = () => {
        setExerciseName(exerciseToEdit.exerciseName)
        setOneRepMax(exerciseToEdit.oneRepMax)
        setSets(exerciseToEdit.sets)
        setReps(exerciseToEdit.reps)
        setRestTime(exerciseToEdit.restTime)
        setIsWeightedExercise(exerciseToEdit.isWeightedExercise)
        setExerciseGoal(exerciseToEdit.exerciseGoal)
      }

      const clearExerciseStates = () => {
            setExerciseName('')
            setOneRepMax('')
            setSets('')
            setReps('')
            setRestTime('')
            setIsWeightedExercise('')
            setExerciseGoal('')

            setExerciseToEdit('')

            handleAddExerciseModalState()
        }



      const calculatePercentage = (num) => {
        let percentArray = []
        for(let i = 40; i < 100; i+= 5) {
          //getting percentage of one rep max passed
          let percent = (num/100) * i;
          //ROUND PERCENT TO NEAREST 10 =  Math.round(percent / 10) * 10
          // removes values after decimal = percent | 0
          percentArray.push({ percentile: i, percentOfMax : percent | 0, active: false  })
        } 
        return percentArray
      } 

      const createExercise = () => {
        const userData = user; 
        const exercise = {
          id: Math.random()+Date.now(),
          exerciseName: exerciseName,
          oneRepMax: oneRepMax,
          isWeightedExercise: isWeightedExercise,
          percentages: calculatePercentage(oneRepMax),
          sets: sets,
          reps: reps,
          restTime: restTime,
          exerciseGoal: exerciseGoal,
          goalAchievements: [],
      }
        userData.exerciseList = [...user.exerciseList, exercise]
            setUser({...user, userData })
            clearExerciseStates()
      }


      

      const updateExercise = () => {
        const userData = user; 
        const index = userData.exerciseList.findIndex((e) => e.id === exerciseToEdit.id)
        const updatedExercise = {
          id: userData.exerciseList[index].id,
          exerciseName: exerciseName,
          oneRepMax: oneRepMax,
          isWeightedExercise: isWeightedExercise,
          percentages: calculatePercentage(oneRepMax),
          sets: sets,
          reps: reps,
          restTime: restTime,
          exerciseGoal: exerciseGoal,
          goalAchievements: []
        }

        userData.exerciseList[index] = updatedExercise
        setUser({...user, userData})

        clearExerciseStates()
      }

      const deleteExercise = () => {
        const userData = user; 

        const index = userData.exerciseList.filter((e) => e.id !== exerciseToEdit.id)
        // userData.exerciseList.splice(index + 1, 1)

        // console.log(userData.exerciseList.filter((e) => e.id !== exerciseToEdit.id))
        userData.exerciseList = userData.exerciseList.filter((e) => e.id !== exerciseToEdit.id)
        clearExerciseStates()
        setUser({...user, userData})

      }
 

    return (
        <div className='forms-wrapper'>
            <CloseIcon className="close-modal-btn" onClick={() => clearExerciseStates()}/>
             <div className='new-exercise-form-wrapper'>
                  
                  {exerciseToEdit ? <h3>Edit Exercise</h3> : <h3>Add Exercise</h3>}
                  <div className='new-exercise-form'>
                    <TextField id="outlined-basic" placeholder='Exercise Name' label="Exercise Name" variant="outlined" onChange={(e) => setExerciseName(e.target.value)} value={exerciseName} />
                    <TextField id="outlined-basic" placeholder='One Rep Max' label="One Rep Max" variant="outlined" onChange={(e) => setOneRepMax(e.target.value)} value={oneRepMax} />
                    <TextField id="outlined-basic" placeholder='Next One Rep Max Goal' label="Next One Rep Max Goal" variant="outlined" onChange={(e) => setExerciseGoal(e.target.value)} value={exerciseGoal} />
                    <TextField id="outlined-basic" placeholder='Sets' label="Sets" variant="outlined" onChange={(e) => setSets(e.target.value)} value={sets} />
                    <TextField id="outlined-basic" placeholder='Reps' label="Reps" variant="outlined" onChange={(e) => setReps(e.target.value)} value={reps} />
                    <TextField id="outlined-basic" placeholder='Rest' label="Rest" variant="outlined" onChange={(e) => setRestTime(e.target.value)} value={restTime} />

                    {exerciseToEdit ? <div className='btn-group'> 
                      <Button variant="contained" onClick={() => updateExercise()}>Update Exercise</Button> 
                      <Button className='delete-btn'  variant="contained"  onClick={() => deleteExercise()}> <DeleteIcon /> Delete</Button> </div>: <Button variant="contained" onClick={() => createExercise()}>Create Exercise</Button>}
                     
                  </div>
            </div>
      </div>
    )
}


export default AddExerciseForm;

import React, { useRef } from 'react'
import { render } from 'react-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EditIcon from '@mui/icons-material/Edit';

import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import { useGesture } from 'react-with-gesture'
import { useSprings, animated, interpolate } from 'react-spring'


import './exerciseWidget.scss'


  
      const ExerciseWidget = ({exercises, editExercise, user}) => {

        const [percentSelected, SetPercentSelected] = React.useState('');


        const fn = (order, down, originalIndex, curIndex, y) => index => down && index === originalIndex ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' } : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }
    
    
        const handlePercentSelectChange = (event) => {
            SetPercentSelected(event.target.value);
          };

        const order = useRef(exercises.map((_, index) => index)) 
        const [springs, setSprings] = useSprings(exercises.length, fn(order.current))
        const bind = useGesture( ({ args: [originalIndex], down, delta: [, y] } ) => {
          const curIndex = order.current.indexOf(originalIndex)
          const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, exercises.length - 1)
          const newOrder = swap(order.current, curIndex, curRow)
     
          setSprings(fn(newOrder, down, originalIndex, curIndex, y))
          if (!down)  order.current = newOrder
          if (down) console.log(down)
        })

        return (
            <div className='draggable-main'>
            <div class="content" style={{ height: exercises.length * 100 }}>
              {springs.map(({ zIndex, shadow, y, scale }, i) => (
                <animated.div
                  {...bind(i)}
                  key={i}
                  style={{
                    zIndex,
                    // height: '220px',
                    boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                    transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`),
                  }}>
                      
                 <div className="card-wrapper" key={exercises[i].id}>
                 <div>
                 <div className='exercise-name'>
                     <div className='name'> <span className='icon'><FitnessCenterIcon/></span> <span>{exercises[i].exerciseName} </span> </div>
                     <div className='edit-btn'> <EditIcon onClick={() => editExercise()}/> </div>
                 </div>
           
                 <div className='first-row'> 
                     <div className='value-box'><div className='label'> 1 Rep Max: </div> <div>{exercises[i].oneRepMax}</div>  </div>
                     <div className='value-box'><div className='label'> Goal: </div> {exercises[i].exerciseGoal}</div>
                 </div>
                
                <div className='second-row'> 
                     <div className='value-box'><div className='label'> Sets: </div> {exercises[i].sets}</div>
                     <div className='value-box'><div className='label'> Reps: </div> {exercises[i].reps}</div>
                      <div className='value-box'><div className='label'> Rest Time: </div> {exercises[i].restTime}</div>
                </div>
            
                 <div>
                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                     <InputLabel id="demo-simple-select-standard-label">Percent of Max</InputLabel>
                     <Select
                         labelId="demo-simple-select-standard-label"
                         id="demo-simple-select-standard"
                         value={percentSelected}
                         onChange={handlePercentSelectChange}
                         label="Percent of Max"
                     >
                     {exercises[i].percentages.map((item) => <MenuItem value={item.percentile}>{item.percentile} % of one rep max: {item.percentOfMax} lbs</MenuItem>)}
                     </Select>
                 </FormControl>
                </div>
                                
                            </div>
                </div>
                  </animated.div>
              ))}
            </div>
            </div>
          )
        }

    
export default ExerciseWidget
    

        // render(<DraggableList items={exercises} />, document.getElementById('root'))







//     return (
//         <div className="card-wrapper" key={exercise.id} >
//                {exercise ? (
//                  <div>
//                  <div className='exercise-name'>
//                      <div className='name'> <span className='icon'><FitnessCenterIcon/></span> <span>{exercise.exerciseName} </span> </div>
//                      <div className='edit-btn'> <EditIcon onClick={() => editExercise()}/> </div>
//                  </div>
           
//                  <div className='first-row'> 
//                      <div className='value-box'><div className='label'> 1 Rep Max: </div> <div>{exercise.oneRepMax}</div>  </div>
//                      <div className='value-box'><div className='label'> Goal: </div> {exercise.exerciseGoal}</div>
//                  </div>
                
//                 <div className='second-row'> 
//                      <div className='value-box'><div className='label'> Sets: </div> {exercise.sets}</div>
//                      <div className='value-box'><div className='label'> Reps: </div> {exercise.reps}</div>
//                       <div className='value-box'><div className='label'> Rest Time: </div> {exercise.restTime}</div>
//                 </div>
           
//                  <div>
           
           
//                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                      <InputLabel id="demo-simple-select-standard-label">Percent of Max</InputLabel>
//                      <Select
//                          labelId="demo-simple-select-standard-label"
//                          id="demo-simple-select-standard"
//                          value={percentSelected}
//                          onChange={handlePercentSelectChange}
//                          label="Percent of Max"
//                      >
//                      {exercise.percentages.map((item) => <MenuItem value={item.percentile}>{item.percentile} % of one rep max: {item.percentOfMax} lbs</MenuItem>)}
//                      </Select>
//                  </FormControl>
           
           
//                  </div>
                 
//             </div>
//                ) : (
//                   <h2>ADD SOME EXERCISES</h2>
//                )}
//              </div>
//     )
// }

// export default ExerciseWidget


import React, { useState, useEffect } from 'react'
import ExerciseForm from '../../components/exerciseApp/ExerciseForm/ExerciseForm'
import AddUserInfoForm from '../../components/exerciseApp/AdduserInfoForm/AddUserInfoForm'
import ExerciseWidget from '../../components/exerciseApp/ExerciseWidget/ExerciseWidget'
import PageHead from '../../components/head'

import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';

import Modal from 'react-modal';

import Button from '@mui/material/Button';

import './weightTrainApp.scss'

 const Main = () => {

  <PageHead
        title='Adamedia Design - Exercise 1 Rep Max Tracking App'
        description='Exercise app to track 1 rep max and exercise routine details'
        />

    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const [user, setUser ] = useState(null)
    const [exerciseToEdit, setExerciseToEdit] = useState('')
    const [isShowingAddExerciseModal, setIsShowingAddExerciseModal] = useState(false);
    const [isShowingUserEditMenu, setIsShowingUserEditMenu] = useState(false)

  
    const submitUserInfo = () => {

      if(user){
        const userData = user
        user.name = name
        user.goal = goal
        setUser({...user, userData })
        
      }else{
        const newUserInfo = {
          name,
          goal,
          exerciseList: []
        }

        setUser(newUserInfo)

      }
      


    }

    useEffect(() => {
      setUser(() => {
        // getting stored value
        const saved = localStorage.getItem("user");
        const initialValue = JSON.parse(saved);
        return initialValue || null;
      });
     },[])

   useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
   }, [user])

 
  
  

    const editExercise = (id) => {
      setIsShowingAddExerciseModal(!isShowingAddExerciseModal ? true : false);
      let selectedExercise = user.exerciseList.find((item) => item.id === id)
      setExerciseToEdit(selectedExercise)
    }

      let exerciseListComponent;


       const handleAddExerciseModalState = () => {
        setIsShowingAddExerciseModal(!isShowingAddExerciseModal ? true : false);
      };

      const handleEditUserModalState = () => {
        setIsShowingUserEditMenu(!isShowingUserEditMenu ? true : false)
      }



        if(user) {
           exerciseListComponent = user.exerciseList.map((exercise, index) => {
            return (
                <div className='exercise-list-wrapper'>
                  <ExerciseWidget exercise={exercise}  index={exercise.id} editExercise={() => editExercise(exercise.id)} />
                </div>
             );
           })
         }

         
    return (
        <div className='main-page-wrapper'>

            <Modal
              isOpen={isShowingAddExerciseModal}
              onRequestClose={handleAddExerciseModalState}
              style={modalStyles}
              contentLabel="Example Modal"
              >
              <ExerciseForm 
                // submitUserInfo={submitUserInfo}
                user={user}
                handleAddExerciseModalState={handleAddExerciseModalState}
                setUser={setUser}
                exerciseToEdit={exerciseToEdit}
                setExerciseToEdit={setExerciseToEdit} 
              />
            </Modal>


            <Modal
              isOpen={isShowingUserEditMenu}
              onRequestClose={handleEditUserModalState}
              style={modalStyles}
              contentLabel="Example Modal"
              >
              <AddUserInfoForm 
              name={name} 
              goal={goal} 
              setName={setName}
              setGoal={setGoal}
              submitUserInfo={submitUserInfo} 
              handleModalState={handleEditUserModalState}
              />
              </Modal>
            
            <div className='exercise-content-section'>

              <div className='options-controles'>
                <div className='options-btn'> <Button variant="outlined" onClick={() => handleEditUserModalState()} > User <PersonIcon  /> </Button>   </div>
                {user ? <div className='options-btn'> <Button variant="outlined" onClick={() => handleAddExerciseModalState()} >Add Exercise <EditIcon  /></Button> </div> : ''}
                
              </div>
            

              {user ? <div className='user-info'> 
                <div className='name'>{user.name}</div>
               <div>{user.goal}</div> </div> : ''}

                <div>
                  {exerciseListComponent}
                </div>
            </div>


        </div>
    )
}


export default Main


const modalStyles = {
  content: {
    top: '50%',
    display: 'flex',
    justifyContent: 'center',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '80%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    color: 'Gray'
  }
};
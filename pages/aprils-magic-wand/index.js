import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './aprils-magic-wond.module.scss'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import TextField from '@material-ui/core/TextField';

 const AprilsMagicWond = () => {

    const [listOfNames, setListOfNames] = useState([])
    const [selectedAppend, setSelectedAppend] = useState('')
    const inputEl = useRef(null);

    const listOfNamesArray = []

    const getNames = () => {
        // var name = document.getElementById('fileInput'); 
        let names = inputEl.current;
        const numberOfFilesSelected = names.files.length;
         for (let step = 0; step < numberOfFilesSelected; step++) {
            listOfNamesArray.push(names.files.item(step).name.substring(0,32))
          }
          for(var i=0;i<listOfNamesArray.length;i++){
            listOfNamesArray[i]=listOfNamesArray[i];
}
          setListOfNames(listOfNamesArray)
        // alert('Selected file: ' + names.files.item(0).name);

        // alert('Selected file: ' + name.files.item(0).size);
        // alert('Selected file: ' + name.files.item(0).type);
      }

    const fullListOfNames = listOfNames.map(item =>  <div key={item}>{selectedAppend}{item} </div>)


    return (
        <div className='aprils-wrapper'>

            <div className='absolute-div '></div>
            <div className='tool-header'>
                
                <h2>APRIL'S MAGIC WAND</h2>
                <Image src='/magic_wand.png' width='100%' height='600px'/>
            </div>



            <div className='name-list-wrapper'>
                
                    <div className='choose-append-form'>
                        <span>Choose Beginning of File Names</span>
                        {/* <input type= onChange={(e) => setSelectedAppend(e.target.value)} /> */}
                        <input  
                        value={selectedAppend} 
                        placeholder='insert text...'
                        onChange={(e) => setSelectedAppend(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" 
                        />

                    </div>

                    <label className='customFileUpload'>
                    <div className='button-style'>  <span><InsertDriveFileIcon/></span>Choose File </div>
                    <input  ref={inputEl} type="file" id="fileInput" multiple onChange={() => getNames()}/>
                    </label>

                <div className='file-names-list'>
                {fullListOfNames}
                </div>
            </div>
        </div>
    )
}


export default AprilsMagicWond

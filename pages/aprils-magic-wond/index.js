import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './aprils-magic-wond.module.scss'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

 const AprilsMagicWond = () => {

    const [listOfNames, setListOfNames] = useState([])
    const inputEl = useRef(null);

    const listOfNamesArray = []

    const getNames = () => {
        // var name = document.getElementById('fileInput'); 
        let names = inputEl.current;
        const numberOfFilesSelected = names.files.length;
         for (let step = 0; step < numberOfFilesSelected; step++) {
            listOfNamesArray.push(names.files.item(step).name.substring(0,32))
          }
          console.log(listOfNamesArray)
          setListOfNames(listOfNamesArray)
        // alert('Selected file: ' + names.files.item(0).name);

        // alert('Selected file: ' + name.files.item(0).size);
        // alert('Selected file: ' + name.files.item(0).type);
      }

    const fullListOfNames = listOfNames.map(item =>  <div key={item}>{item} </div>)


    return (
        <div className='aprils-wrapper'>

            <div className='absolute-div '></div>
            <div className='tool-header'>
                
                <h2>APRIL'S MAGIC WOND</h2>
                <Image src='/magic_wand.png' width='100%' height='600px'/>
            </div>



            <div className='name-list-wrapper'>
                <div>
                    <label className='customFileUpload'>
                    <div className='button-style'>  <span><InsertDriveFileIcon/></span>Choose File </div>
                    <input  ref={inputEl} type="file" id="fileInput" multiple onChange={() => getNames()}/>
                    </label>
                </div>

                <div className='file-names-list'>
                {fullListOfNames}
                </div>
            </div>
        </div>
    )
}


export default AprilsMagicWond

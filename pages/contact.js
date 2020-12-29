import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

 const Contact = () => {
    return (
        <div className='contact'>
            <div className="primaryBlue-banner">
                <h1>CONTACT</h1>
                <h3>PHONE | EMAIL</h3>
            </div>

            <div className='contentArea black-row'>
                <div className='contactBlock'>
                    <div className='row'><EmailIcon/>  <span style={{marginLeft: 10}}>adam@adamediadesign.com</span></div>
                    <div className='row'><PhoneIcon/>  <span style={{marginLeft: 10}}>415-488-7780</span></div>

                </div>
            </div>
        </div>
    )
}


export default Contact

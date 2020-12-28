
import  React, {useEffect, useState, useRef} from 'react'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });


const MainNav = () => {

    const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

    return (
        <div className='MainNav'>
            <div className='leftNavItems'>
            <Image
                src="/../public/Adamedia-Design-Logo.png"
                alt="Picture of the author"
                width={35}
                height={35}
            />
            </div>

            <div className='rightNavItems'>
            <Button onClick={toggleDrawer('left', true)}>Open</Button>
            </div>

         
            <SwipeableDrawer
      anchor='left'
      open={state['left']}
      onClose={toggleDrawer('left', false)}
      onOpen={toggleDrawer('left', true)}
    >
      This is adam So don't mess with me or else Gato will get you
    </SwipeableDrawer>
   

        </div>
    )
}




export default MainNav;

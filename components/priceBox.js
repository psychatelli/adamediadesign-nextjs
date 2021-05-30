import React from 'react'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import HomeIcon from '@material-ui/icons/Home';
const PriceBox = ({mainTitle, photoPrice, videoPrice, }) => {
    return (
        <div className='priceBox'>
            <div className='PriceBoxRow mainTitleSection'>
                <HomeIcon/>
                <div className='priceBoxCell'> {mainTitle} </div>
            </div>
  
        <div className='PriceBoxDetailsWrapper'>
                    <div className='PriceBoxColumn rightBorder'>
                        <div className='priceBoxCell serviceTitle'> 
                        <div> <PhotoCameraIcon/></div>
                        (Photos)

                        </div>
                        <div className='priceBoxCell price'> {photoPrice}</div>
                    </div>

                    <div className='PriceBoxColumn'>
                        <div className='priceBoxCell serviceTitle'> 
                        <div>
                        <PhotoCameraIcon/>
                        <VideocamIcon/>
                        </div>
                        (Photos & videos)
                        </div>
                        <div className='priceBoxCell price'>{videoPrice}</div>
                    </div>
        </div>
            
       
        </div>
    )
}

export default PriceBox;



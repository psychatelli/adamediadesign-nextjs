import React from 'react'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import HomeIcon from '@material-ui/icons/Home';
import CheckoutButton from './CheckoutButton/checkoutButton'


const PriceBox = ({mainTitle, photoPrice, videoPrice, price_id, cancelPath }) => {
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
                        <CheckoutButton cancelPath={cancelPath} price_id={price_id.photos}/>
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
                        <CheckoutButton cancelPath={cancelPath}  price_id={price_id.photoVideo}/>
                    </div>
        </div>
            
       
        </div>
    )
}

export default PriceBox;



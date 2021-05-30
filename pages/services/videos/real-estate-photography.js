import React from 'react'
import PageHead from '../../../components/head'
import PriceBox from '../../../components/priceBox'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import VideocamIcon from '@material-ui/icons/Videocam'


 const RealEstatePhotography = () => {


    const priceBoxes = priceBoxData.map(item => {
        return <PriceBox 
        mainTitle={item.mainTitle}
        photoPrice={item.photoPrice} 
        videoPrice={item.videoPrice}
        />
    })
    return (

        <div className='videos'>

        <PageHead
        title='Adamedia Design - Real Estate Photography Tampa FL'
        description='Real estate photography - photos, videos, drone shots'
        />

            <div className="lightGray-banner">
                <h1>REAL ESTATE PHOTOGRAPHY</h1>
                <h3> PHOTOS & VIDEOS</h3>
            </div>


            <div className="contentArea">
                <div className="service-desription">
                
                    <div className='serviceDescriptionBox'>
                            <div className='iconContainer'>  
                            <PhotoCameraIcon/> 
                            </div>

                            <div className='description'>
                            Photo package includes both exterior and interior of proptery. No set number on number of photos delivered, whatever gets the job done.
                            </div>
                    </div>

                    <div className='serviceDescriptionBox'>
                            <div className='iconContainer'>  
                            <VideocamIcon/>
                            </div>

                            <div className='description'>
                            Drone footage is included. Video package includes complete tour of interior and exterior.  
                            </div>
                    </div>
                </div>

           
            <div className='realEstateWrapper'> 
                 {priceBoxes}
            </div>
            </div>
        </div>
    )
}


export default RealEstatePhotography;


const priceBoxData = [
    {
        mainTitle: '<2500/sf',
        photoPrice: '$125',
        videoPrice: '$200'
    },
    {
        mainTitle: '2500 - 4000/sf	',
        photoPrice: '$175',
        videoPrice: '$250'
    },
    {
        mainTitle: '>4000/sf',
        photoPrice: '$300',
        videoPrice: '$375'
    },
]
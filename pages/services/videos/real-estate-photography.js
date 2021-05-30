import React from 'react'
import Head from 'next/head'
import PriceBox from '../../../components/priceBox';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
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

        <Head>
            <title>Adamedia Design - Real Estate Photography </title>
            <meta name='description' content='Real estate photography - photos, videos, drone shots'/>
            <link rel="icon" href="/../favicon.ico" />
        </Head>

            <div className="lightGray-banner">
                <h1>REAL ESTATE PHOTOGRAPHY</h1>
                <h3> PHOTOS & VIDEOS</h3>
            </div>


            <div className="contentArea">
                <div className="service-desription">
                
                
                    <p>
                    <PhotoCameraIcon/> <br/>
                    All photo packages include 15-30 photos. This includes both exterior and interior of proptery. If a property requires more photos, we will accommodate. 
                    </p>
                    <br/>
                    <p>
                    <VideocamIcon/><br/>Video package includes complete tour of interior and exterior.  Drone footage is included.</p>
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
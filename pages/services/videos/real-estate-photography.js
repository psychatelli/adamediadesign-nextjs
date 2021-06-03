import React from 'react'
import PageHead from '../../../components/head'
import PriceBox from '../../../components/priceBox/priceBox'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import VideocamIcon from '@material-ui/icons/Videocam'



 const RealEstatePhotography = () => {

    const priceBoxes = priceBoxData.map((item, index) => {
        return <PriceBox 
        mainTitle={item.mainTitle}
        photoPrice={item.photoPrice} 
        videoPrice={item.videoPrice}
        price_id={item.price_id}
        cancelPath='services/videos/real-estate-photography'
        key={index}
        />
    })

    return (

        <div className='realEstatePhotography'>

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
                            Photo package includes both exterior and interior of property. No set number on amount of photos delivered, whatever gets the job done.
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

           
            <div className='realEstatePriceboxWrapper'> 
                 {priceBoxes}
            </div>
            </div>
        </div>
    )
}


export default RealEstatePhotography;

const prod = process.env.NODE_ENV === 'production'


const priceBoxData = [
    {
        mainTitle: '<2500/sf',
        photoPrice: '$125',
        videoPrice: '$200',
        price_id: {
            photos: prod ? 'price_1IxyvHD2B2kqWDmPn2I17pI2' : 'price_1IxuyFD2B2kqWDmPklb99Jw2', 
            photoVideo: prod ? 'price_1Ixyv7D2B2kqWDmP7NZiT4BX' : 'price_1IxuzyD2B2kqWDmPdNm6VMov'} 
    },
    {
        mainTitle: '2500 - 4000/sf',
        photoPrice: '$175',
        videoPrice: '$250',
        price_id: {
            photos: prod ? 'price_1IxyumD2B2kqWDmPIEm7nwUt' : 'price_1Ixv4ZD2B2kqWDmPfc30BqfY', 
            photoVideo: prod ? 'price_1IxyuWD2B2kqWDmPpOSIVXkN' : 'price_1IxxVcD2B2kqWDmPxeoUihFK'}
    },
    {
        mainTitle: '>4000/sf',
        photoPrice: '$300',
        videoPrice: '$375',
        price_id: {
            photos: prod ? 'price_1IxyuFD2B2kqWDmPibgDyplo' : 'price_1IxxX3D2B2kqWDmP3H9JW1ju', 
            photoVideo: prod ? 'price_1IxytzD2B2kqWDmPvaFbb5ur' : 'price_1IxxYJD2B2kqWDmPmXhHvZkS'}
    },
    // {
    //     mainTitle: 'Free',
    //     photoPrice: '$1',
    //     videoPrice: '$1',
    //     price_id: {
    //         photos: prod ? 'price_1IxyvuD2B2kqWDmPkwXI70aV' : 'price_1IxyjFD2B2kqWDmPTODsrJXV', 
    //         photoVideo: prod ? 'price_1IxyvuD2B2kqWDmPkwXI70aV' : 'price_1IxyjFD2B2kqWDmPTODsrJXV'}
    // },
]

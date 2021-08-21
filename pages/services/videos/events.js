import React from 'react'
import PageHead from '../../../components/head'
import PriceBox from '../../../components/priceBox'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import VideocamIcon from '@material-ui/icons/Videocam'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Image from 'next/image'

 const Events = () => {

    const priceBoxes = priceBoxData.map((item, index) => {
        return <div key={index}> <PriceBox 
        mainTitle={item.mainTitle}
        photoPrice={item.photoPrice} 
        videoPrice={item.videoPrice}
        price_id={item.price_id}
        cancelPath='services/videos/events'
        icon={<MusicNoteIcon/>}
        donateBtn={item.donateBtn}
        />
        </div>
    })
   

    return (

        <div className='events'>

        <PageHead
        title='Adamedia Design - Event Photography Tampa FL'
        description='Event photography - photos, videos, drone shots'
        />

<div className="ourHouseBanner lightGray-banner">

                <div className='ourHouseLogo'>
               <Image
                src="/our-house-logo.png"
                alt="our house logo"
                layout={'fill'} 
                objectFit={'contain'}
                priority={true}
                /> 
                </div>
                <h3> PHOTOS & VIDEOS</h3>

            </div>


            <div className="contentArea">
                <div className="service-desription">
                    <div className='serviceDescriptionBox'>
                            <div className='iconContainer'>  
                            <PhotoCameraIcon/> 
                            </div>
                            <div className='description'>
                            Photo package includes photos of attendees, performers, event highlights. Photos will be shared in the Our House Facebook group as promotional content to help grow attendee list for upcoming events. Contact information of those who request pictures at the event is collected and these individuals are tagged when posting the content in Our House.  It is not just photos you receive, we deliver the chance to grow the House Music community and work together to bring these people back to your show. You will receive a copy of all shared material via dropbox link.
                            </div>
                    </div>

                    <div className='serviceDescriptionBox'>
                            <div className='iconContainer'>  
                            <VideocamIcon/>
                            </div>

                            <div className='description'>
                            Video package includes a highlight video to showcase the event experience. Your logo will be placed at the end of the video.  This video will also be posted in Our House Facebook group as a way to build awareness of your events. Part of our mission at Our House is to help build the House Music community and help these individuals become aware of your shows. We gather contact information at the events and tag those who attend your events when we post. 
                            </div>
                    </div>
                </div>

            <div className='eventsPriceboxWrapper'> 
                 {priceBoxes}
            </div>
            </div>
        </div>
    )
}


export default Events;

const prod = process.env.NODE_ENV === 'production'


const priceBoxData = [
    {
        mainTitle: 'Standard Price',
        photoPrice: '$75',
        videoPrice: '$125',
        price_id: {
            photos: prod ? 'price_1IyRkqD2B2kqWDmPzKAY6GEq' : 'price_1IyRn0D2B2kqWDmPLE1bdXoS', 
            photoVideo: prod ? 'price_1IyRpRD2B2kqWDmP5c6bZ6Qn' : 'price_1IyRoUD2B2kqWDmPcJCYJUvh'} 
    },
    {
        mainTitle: 'Donate Options',
        photoPrice: 'Donate',
        videoPrice: 'Donate',
        donateBtn: true,
        // price_id: {
        // photos: prod ? '' : '', 
        // photoVideo: prod ? '' : ''}
    },
]

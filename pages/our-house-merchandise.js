import React from 'react'
import PageHead from '../components/head'
import MerchandisePriceBox from '../components/merchandisePriceBox'

import Image from 'next/image'

 const Events = () => {

    const priceBoxes = priceBoxData.map((item, index) => {
        return <div key={index}> <MerchandisePriceBox 
        mainTitle={item.mainTitle}
        productPrice={item.productPrice} 
        price_id={item.price_id}
        cancelPath='services/our-house-merchandise'
        imgPath={item.imgPath}
        />
        </div>
    })
   

    return (

        <div className='merchandise'>

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
                <h3>OUR HOUSE MERCH</h3>

            </div>

            <div className="contentArea">
                
            <div className='merchPriceboxWrapper'> 
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
        mainTitle: 'Branded Hat',
        productPrice: '$30',
        price_id: prod ? 'price_1JR16nD2B2kqWDmP5MHOP2km' : 'price_1JR11LD2B2kqWDmPsnDfsNyg',
        imgPath: '/our-house-hat.png'         
    }
]

import React from 'react'

import CheckoutButton from './CheckoutButton/merchCheckoutButton'
import Image from 'next/image'

 
const PriceBox = ({mainTitle, productPrice, price_id, imgPath, cancelPath, icon, donateBtn = false }) => {

    return (
        <div className='priceBox'>
            <div className='PriceBoxRow mainTitleSection'>
                {icon}
                <div className='priceBoxCell'> {mainTitle} </div>
            </div>
  
        <div className='PriceBoxDetailsWrapper'>
                <div className='merchandiseProductDetails'>
                    <div style={{width: '100%', height: '200px', position: 'relative'}}>
                    <Image
                        src={imgPath}
                        alt="product"
                        layout={'fill'} 
                        objectFit={'contain'}
                        priority={true}
                        />
                    </div>
                        
                        <div className='priceBoxCell price'> {productPrice}</div>
                        <div style={{width: '200px', textAlign: 'center', margin: '10px auto'}}>
                        <CheckoutButton 
                         cancelPath={cancelPath}  
                         price_id={price_id}
                         />  
                        </div>
                                          
                </div>

                   
        </div>
            
       
        </div>
    )
}

export default PriceBox;



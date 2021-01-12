import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'
import BuyButton from '../../components/BuyButton'


 const Product = ({ product }) => {

    return (
        <div className='product'>
             <Head>
                 {product.meta_title &&
                    <title>Adamedia Design | Product | {product.title} </title>
                 }
                {product.meta_description &&
                    <meta name='description' content={product.meta_description} />
                }
            </Head>

            <div className='contentArea'>
                <h3 className='title'>{product.name}</h3> 
               
                <Image
                    src={fromImageToUrl(product.image)}
                    alt="Picture of the author"
                    width={450}
                    height={450}
                    priority={true}
                    />
                <div className='titlePrice'>
                    <p>{product.name}</p> <span> | </span> <p>${twoDecimals(product.price)}</p>
                </div>

                <p>{product.content}</p>
                <BuyButton product={product}/>
            </div>
        </div>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const products_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await products_res.json()

    return {
        props: {
            product: found[0] //Because the API response for filters is an array
        }
    }
}



export async function getStaticPaths() {
    //Retrieve all the possible paths
    const products_res = await fetch(`${API_URL}/products/`)
    const products = await products_res.json()

     //Return them to NextJS context
     return {
         paths: products.map(product => ({
             params: { slug: String(product.slug)}
         })),
         fallback: false // Tells nextJs to show a 404 if the param does not exist. 
     }
}

export default Product

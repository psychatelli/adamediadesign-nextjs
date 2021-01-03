import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { fromImageToUrl, API_URL } from '../utils/urls';
import { twoDecimals } from '../utils/format';
// import products from '../products.json';


const Products = ({ products }) => {


    const productItems = () => products.map(product => {
    return <div key={product.name} className='videoBox'> 
            <Link href={`products/${product.slug}`}>
            <a> 
            <div key={product.name} className='title'> 
                <h3>{product.name}</h3> 
                <p>$ {twoDecimals(product.price)}</p>
            </div>
            <div className='media'> 
                <Image
                src={fromImageToUrl(product.image)}
                alt="Picture of the author"
                width={450}
                height={450}
                priority={true}
                />
            </div>
            </a>
            </Link>
        </div>
    })

    return (
        <div className='products'>
        <Head>
            <title>Adamedia Design - Products </title>
            <meta name='description' content='Software, Apps, videos, and media design. Adam Donatelli services and portfolio'/>
            <link rel="icon" href="/../favicon.ico" />
        </Head>

        <div className="primaryBlue-banner">
                <h1>PRODUCTS</h1>
                <h3>APPS | MEDIA  </h3>
         </div>
            <div className="contentArea">
                <div className='productsContainer'>
                {products ? productItems() : <p>Loading...</p>}
                </div>
            </div>
        </div>
    )
}

export default Products;

export async function getStaticProps() {
    //Fetch products
    const product_res = await fetch(`${API_URL}/products/`)
    const products = await product_res.json()

    //Return the products as props
    return {
        props: {
            products
        }
    }
    //Return the products as props
}
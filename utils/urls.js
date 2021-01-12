export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_B91D43CC22E7BB2B';
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51I8XvjD2B2kqWDmPA5xiQSp9CSv4ZrclD7Anq1MMgE3bhIsqF53LWTrKF9FnQvbqgc31bqVPnaN2cvJ6PqUDh4Sf00hOKJUTPM'

/**
 * Given an image return the URL
 * Works for local and deployed strapis
 * @param {any} image 
 */

export const fromImageToUrl = (image) => {
    console.log(image)
    if(!image){
        return '/vercel.svg'
    }

    if(image.url.indexOf('/') === 0){
        return `${API_URL}${image.url}`
    }

    return image.url
}
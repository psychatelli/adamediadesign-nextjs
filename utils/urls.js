export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_B91D43CC22E7BB2B';
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_live_51I8XvjD2B2kqWDmPEvCjYlUXay6BlRqfmL0QsVOG8dr4kZJJIpTHCfIj2G7CcxKIk0m9QCvLSzdPTRribazmR2ar00kMcbSHS0'

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
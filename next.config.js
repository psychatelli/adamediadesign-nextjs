const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require("next-compose-plugins");
const withImages = require('next-images');


module.exports = withPlugins([
    [withSass],
    [ withOptimizedImages, {
        optimizeImagesInDev: true
      }
    ],
    [withImages],
    {
      images: {
        domains: ['adamediadesign-nextjs.vercel.app'],
      },
    }
  ]);


 





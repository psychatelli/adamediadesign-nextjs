const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require("next-compose-plugins");

// const withImages = require('next-images')

const nextConfig = {
                exportPathMap: async function(
                defaultPathMap,
                { dev, dir, outDir, distDir, buildId }
              ) {
                return {
                  "/": { page: "/" },
                  "/contact": { page: "/contact" },
                  "/about": { page: "/about" },
                  "/services": { page: "/services" },
                  "/services/ux-ui": { page: "/services/ux-ui" },
                  "/services/videos": { page: "/services/videos" },
                  "/portfolio": { page: "/portfolio" },
                  "/portfolio/project": { page: "/portfolio/project" },
                };
            }
}

module.exports = withPlugins([
    [withSass],
    [ withOptimizedImages, {
        optimizeImagesInDev: true
      }
    ]
  ]);


 





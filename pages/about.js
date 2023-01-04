import React from 'react'
import PageHead from '../components/head'

 const About = () => {
    return (
        <div className='about'>
     
        <PageHead
        title='Adamedia Design - About'
        description='Software, Apps, videos, and media design. Adam Donatelli services and portfolio'
        />
       

        <div className="primaryBlue-banner">
            <h1>ADAM DONATELLI</h1>
            <h3> APPS | VIDEOS | DESIGN </h3>
        </div>


        <div className="contentArea">

        <div className='description section'>
            <h5>ABOUT</h5>
            <p>
            From his early years as a freelancer in Silicon Valley working out of the WeWork TechHub to today, Adam has established himself as a professional in multiple areas of the tech industry including software development, digital marketing, and video production. His work has ranged from small business community projects, to working with top names such as Berkshire Hathaway by way of PWC, and most recently building projects for the Department of Defence by way of the famous and exclusive AI (Artificial Intelligence) laboratory TheIncLab located in Virginia and Tampa Bay.
               <br/>
               Adam is open to hearing about your venture and the needs to fulfill your journey.
            </p>

        </div>
        

        <div className='section'>
            <h5> FRONT-END DEVELOPMENT </h5>
            <ul> 
            <li> ReactJS</li>
            <li> Next.js</li>
            <li> React Native</li>  
            <li> Redux</li>  
            <li> ECharts, ChartJS, and more. </li> 
            <li> CSS3</li>  
            <li> HTML5</li>  
            <li> Bootstrap 3-4</li>  
            <li> Material UI</li>  
            <li> Materialize</li>   
            <li> Sass</li>  
            <li> MERN Stack</li> 
            </ul>
        </div>

        <div className='section'>
            <h5> BACK-END DEVELOPMENT</h5>
            <ul> 
            <li>Next.js</li>
            <li> Node.js</li> 
            <li> Express</li>
            <li> Cloudinary</li> 
            <li> jsonwebtoken</li> 
            <li> Okta login auth</li>  
            <li> MongoDB</li> 
            <li> EC2 Instance Deployment (AWS)</li>
            </ul>
        </div>
    

        <div className='section'>
        <h5>UX/UI DESIGN</h5>
        <ul> 
        <li>Wireframes</li> 
        <li>Mockups</li> 
        <li>Sitemaps</li> 
        <li>Flow charts</li> 
        <li>Prototypes</li> 
        <li>UX Research</li> 
        <li>Data Analysis</li> 
        <li>Graphic Design</li>  
        <li>Sketch</li> 
        <li>Axure</li>  
        <li>Photoshop</li> 
        <li>InDesign</li> 
        <li>Illustrator</li>
        </ul>
        </div>

        </div>


        </div>
    )
}

export default About;

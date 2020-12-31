import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { portfolioData } from '../../portfolioData/portfolioData';

 const Project = () => {

    const router = useRouter()
    const project = router.query.project;

   
   
    const showContent = () => {
        const selected = portfolioData.filter(item => item.id === project);

        if(project){
            const content =  selected.map(item => {
                return <div>

                    <div className={item.bannerColor}>
                            <div className='mainTitle customHeader'>{item.title}</div>
                             <h3>{item.subtitle}</h3>
                    </div>

                    <Link href='/services/ux-ui'>
                        <a style={{color: 'gray'}}>
                            <div className='backButton'>
                                <ArrowBackIosIcon/> 
                                <span> UI/UX Projects</span> 
                            </div>
                        </a>
                    </Link>

                    <div className={ item.layout === 'desktop' ? 'contentAreaDestop' : 'contentAreaMobile'}>
                            {
                                item.images.map(img => (
                                    <div className="interface_img">    
                                        <center>
                                            <Image
                                            src={`/../public/${img.name}`}
                                            alt="sample img"
                                            width={img.width}
                                            height={img.height}
                                            />
                                    </center>
                                    </div>
                                ))
                            } 
                </div>
                
                <div className="projectDescription dark-gray">
                    <h2>PROJECT DETAILS</h2>
                   <hr/> 
                
                    <p>{item.description}</p>
                </div> 


            </div>
            })
            return content;

         }else{
             return <p>loading...</p>
         }

    }
   
  
    return (
        <div className='porject'>

        <Head>
            <title>Adamedia Design - {project} </title>
            <meta name='description' content='Software, Apps, videos, and media design. Adam Donatelli services and portfolio'/>
            <link rel="icon" href="/../favicon.ico" />
        </Head>


            {showContent()}
        </div>
    )
}

export default Project;

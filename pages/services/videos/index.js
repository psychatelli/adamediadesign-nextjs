import React from 'react'
import Link from 'next/link'
import PageHead from '../../../components/head'

 const Videos = () => {


    return (
        <div className='videos dark-gray'>

        <PageHead
            title='Adamedia Design - Videos'
            description='Software, Apps, videos, and media design. Adam Donatelli services and portfolio'
        />

            <div className="lightGray-banner">
                <h1>VIDEOS</h1>
                <h3>VIDEOS | MARKETING CONTENT  </h3>
            </div>


                <div className="contentArea">

                <div className='videoServiceNav'>
                <Link  href='videos/real-estate-photography'> 
                        <div className='videoServiceNavItem'>
                        Real Estate Photography
                        </div>
                </Link> 

                <Link  href='videos/real-estate-photography'> 
                        <div className='videoServiceNavItem'>
                            Event Photography
                        </div>
                </Link> 
                </div>


                <div className="service-desription">
                    <p>
                    Video content has become the number one media source in demand. Video is a great way to deliver a message, entertain, engage your audience, and build your brand. Adamedia's videos are HD quality, are created with top industry standard software, and will capture the right message that speaks directly to your target audience.
                    </p>
                </div>

           
      
                
            <div className='videosContainer'>
                
                <div className='videoBox'> 
                    <div className='title'> <h3>SIC FIT SCOTTSDALE</h3></div>
                    <div className='media'> 
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/Lb-eVjMOHPA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                </div>

                <div className='videoBox'> 
                    <div className='title'> <h3>One of Us Private Events - Event Highlight Real</h3></div>
                    <div className='media'> 
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/A2q0WLyVkUg" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                </div>
                

                <div className='videoBox'> 
                    <div className='title'> <h3>IMPACT MMA & Fitness</h3></div>
                    <div className='media'> 
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/HwTrzeGJ68w?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>                    
                    </div>
                </div>

                <div className='videoBox'> 
                    <div className='title'> <h3>RALLY.ORG FUSION EVENT </h3></div>
                    <div className='media'> 
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/hzeDQGeUMyw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>                    
                    </div>
                </div>

                <div className='videoBox'> 
                    <div className='title'> <h3>WTR EVENT</h3></div>
                    <div className='media'> 
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/OvzQBTN8MJ4" frameborder="0" allowfullscreen></iframe>                
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}


export default Videos;

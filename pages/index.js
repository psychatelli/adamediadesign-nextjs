import PageHead from '../components/head'
import Image from 'next/image'
import Skills from '../components/Skills';
import Link from 'next/link'

 const Home = () => {





  return (
    <div className='home'>
      <PageHead
      title='Adamedia Design - Home'
      description='Software, Apps, videos, and media design. Adam Donatelli services and portfolio'
      />

  
    <div className='firstRowWrapper'>
          <div className="homeBanner" 
            style={{
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            >
            <div class="bannerContent">
                <center>
                  <div className='bannerLogo'>
                    <Image
                    src="/Adamedia-Design-Logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    priority={true}
                    />
                  </div>
                  
                </center>
              <center> <div className='adamedia'>ADAMEDIA DESIGN</div> </center>
                <center> 
                  <div className='slogan'>
                   APPS, VIDEOS  &  MEDIA AT ITS BEST
                  </div>
                </center>
            </div> 
          </div>

          <div className="NavRow">

          <Link href="/services/ux-ui">
                <div className="hover-box-2">
                    <div className="title">
                      <h4>SOFTWARE | WEB PROJECTS</h4>
                    </div>

                    <div className='image'>
                    <Image
                          src="/projects-icon.png"
                          alt="death star"
                          layout={'fill'} 
                          objectFit={'contain'}
                          priority={true}
                          />
                    </div>  
                </div>
            </Link>
           

            <Link href="/about">
                <div className="hover-box-2">
                    <div className="title">
                      <h4>ABOUT</h4>
                    </div>

                    <div className='image'>
                    <Image
                        src="/about-me-icon.png"
                        alt="Picture of the author"
                        layout={'fill'} 
                          objectFit={'contain'}
                        priority={true}
                        />
                    </div>
                </div> 
            </Link>
            
            <Link href="/services/videos">
              <div className="hover-box-2">
                  <div className="title">
                      <h4>VIDEOS</h4>
                  </div>

                  <div className='image'>
                        <Image
                        src="/video_production_icon.png"
                        alt="Picture of the author"
                        layout={'fill'} 
                        objectFit={'contain'}
                        priority={true}
                        />
                  </div>
              </div>
            </Link>
          </div>


      </div>

          <div className='myHex'>

          </div>
        <Skills/>
       
      
    </div>
  )
}


export default Home;
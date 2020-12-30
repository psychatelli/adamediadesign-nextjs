import Head from 'next/head'
import Image from 'next/image'
import Skills from '../components/Skills';
import Link from 'next/link'

 const Home = () => {





  return (
    <div className='home'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
    <div className='firstRowWrapper'>

          <div className="homeBanner" 
            style={{
              backgroundImage: "url(" + `${require("../public/home-bnr-1200.gif")}` + ")",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            >

            <div class="bannerContent">
                <center>
                  <div className='bannerLogo'>
                    <Image
                    src="/../public/Adamedia-Design-Logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    />
                  </div>
                  
                </center>
              <center> <div className='adamedia'>ADAMEDIA DESIGN</div> </center>
                <center> 
                  <div className='slogan'>
                    <span> SOFTWARE </span>  & <span> MEDIA </span>
                    AT ITS BEST
                  </div>
                </center>
            </div> 
          </div>



     
          <div className="NavRow"
            style={{
            backgroundImage: "url(" + `${require("../public/NavRowBackground.png")}` + ")",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
          >

        <Link href="/services/ux-ui">
                <div className="hover-box-2">
                    <div className="title">
                      <h4>SOFTWARE | WEB PROJECTS</h4>
                    </div>

                    <div className='image'>
                    <Image
                          src="/../public/projects-icon.png"
                          alt="Picture of the author"
                          width={400}
                          height={170}
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
                        src="/../public/about-me-icon.png"
                        alt="Picture of the author"
                        width={400}
                        height={250}
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
                        src="/../public/video_production_icon.png"
                        alt="Picture of the author"
                        width={400}
                        height={200}
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
import Head from 'next/head'
import Image from 'next/image'
import Skills from '../components/Skills';

export default function Home() {
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
              <center> <p>ADAMEDIA DESIGN</p> </center>
                <center> 
                  <p>
                    <span className='whiteSpan'> SOFTWARE </span>  &
                    <span className='whiteSpan'> MEDIA</span> AT ITS BEST
                  </p>
                </center>
            </div> 
          </div>



     
          <div className="NavRow"
            style={{
            backgroundImage: "url(" + `${require("../public/background-b.jpg")}` + ")",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
          >

            <div className="hover-box-2">
                {/* <a href="ux-ui.php">  */}
                <div className="title">
                  <h4>SOFTWARE | WEB PROJECTS</h4>
                </div>

                <div className='image'>
                <Image
                      src="/../public/projects-icon.png"
                      alt="Picture of the author"
                      width={400}
                      height={200}
                      />
                </div>  
                {/* </a> */}
            </div>


              <div className="hover-box-2">
                {/* <a href="about.php">  */}
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
                  {/* </a> */}
            
              <div className="hover-box-2">
                {/* <a href="process.php">  */}
                  <div className="title">
                      <h4>PROCESS</h4>
                  </div>

                  <div className='image'>
                        <Image
                        src="/../public/process.png"
                        alt="Picture of the author"
                        width={300}
                        height={250}
                        />
                  </div>
                {/* </a> */}
              </div>

          </div>


      </div>
          {/* <Skills/> */}
      
    </div>
  )
}

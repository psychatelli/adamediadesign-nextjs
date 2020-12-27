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


          <Skills/>
      
    </div>
  )
}

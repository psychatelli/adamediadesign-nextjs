import PageHead from '../components/head'
import Image from 'next/image'
// import Skills from '../components/Skills';
import ContentSectionListWidget from '../components/ContentSectionListWidget/ContentSectionListWidget'
import ColumnSquareLinks from '../components/ThreeColumnSquareLinks'


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
      </div>


      <div className='categories-wrapper'>
        {categoryContent.map(item => <ContentSectionListWidget mainTitle={item.mainTitle} sectionItems={item.sectionItems} />)}
      </div>


          {/* <div className='myHex'>

          </div> */}

        {/* <Skills/> */}

     
       
      
    </div>
  )
}


export default Home;

// Youtube
// podcasting
// Web Development
// Community Building


const categoryContent = [
  {
    mainTitle: <div> I build <a href='link'> YouTube videos </a> to educate and inspire </div> ,
    sectionItems: [
        {
          title: 'my title 1',
          img: '/red-chart.png',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        }, 
        {
          title: 'my title 2',
          img: '/red-chart.png',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        } 
      ]
  },
  {
    mainTitle: <div>I produce <a href='link'> Podcasts </a></div>,
    sectionItems: [
        {
          title: 'my title 1',
          img: '/red-chart.png',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        }, 
        {
          title: 'my title 2',
          img: '/red-chart.png',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        } 
      ]
  },
  {
    mainTitle: <div>I am a <a href='link'> Web Developer</a> </div>,
    sectionItems: [
        {
          title: 'my title 1',
          img: '/red-chart.png',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        }, 
        {
          title: 'my title 2',
          img: '/red-chart.png',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        } 
      ]
    },
    {
      mainTitle: <div>I build <a href='link'> Communities </a> </div>,
      sectionItems: [
          {
            title: 'my title 1',
            img: '/red-chart.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
          }, 
          
        ]
      },

]
import Link from 'next/link'
import Image from 'next/image'


const ColumnSquareLinks = () => {

    return (
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
    )
}


export default ColumnSquareLinks
import React from 'react'
import PageHead from '../../components/head'
import Image from 'next/image'
import Link from 'next/link'

 const UXUI = () => {
    return (
        <div className='uxui'>

        <PageHead
        title='Adamedia Design - UX/UI Design & Development '
        description='Software, Apps, videos, and media design. Adam Donatelli services and portfolio'
        />
       

           <div className="primaryBlue-banner">
                <div className='customHeader'>UI DEVELOPMENT & DESIGN</div>
                <h3>SOFTWARE | WEBSITES | APPS</h3>
            </div>

            <div className="contentArea">

                <div className="service-desription">
                    <p>
                    Building a web app, a website, or mobile app can be a daunting process but with the right guidance and expertise the experience can be smooth and the results can be right on target.  Adamedia will work with you through the design process to ensure your project has all the fine details, and also achieves the intended impact on your audience.
                    </p>
                </div>

                
                <div>
                    <div className="portfolioBox" style={{background: '#949596'}}> 
                                <div className="header_two"> 
                                    <h3> Web App </h3>
                                </div>

                                <div className='webAppImg zoom'>
                                    <Link href='/portfolio/logistics-software'>
                                        <a> 
                                            <Image
                                            src="/mobile-interfaces.png"
                                            alt="Picture of the author"
                                            width={1200}
                                            height={450}
                                            priority={true}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                
                                <center> 
                                    <Link href='/portfolio/logistics-software'>
                                        <a> <button className="btn myBtnDark">View</button></a> 
                                    </Link>
                                </center>
                        </div>


                    <div className='twoColumns'>
                        <div className='leftColumn'> 
                            <div className="section_wrapper">
                                    <div className="portfolioBox" style={{background: 'rgb(228, 227, 227)' }}> 
                                        <div className="header_two"> 
                                            <h3> Progressive Web App </h3>
                                        </div>

                                        <div className='portfolioBoxImgWrapper zoom'>
                                            <Link href='/portfolio/logistics-app'>
                                                <a> 
                                                <Image
                                                src="/wwo_app_1.png"
                                                alt="mobile project"
                                                width={500}
                                                height={1000}
                                                />
                                                </a>
                                            </Link>
                                        </div>
                                            

                                                <center> 
                                                <Link href='/portfolio/logistics-app'>
                                                <a href="logistics-app.php"><button className="btn myBtnDark">View</button> </a>
                                                </Link>
                                            </center>
                                    </div>
                            </div>


                            <div className="section_wrapper">
                                <div className="portfolioBox" style={{background: '#949596' }}> 
                                    <div className="header_two"> 
                                        <h3> Native App </h3>
                                    </div>

                                    <div className='portfolioBoxImgWrapper zoom'>
                                    <Link href='/portfolio/food-networking-app'>
                                        <a> 
                                        <Image
                                            src="/knowFoodScreen1.png"
                                            alt="Picture of the author"
                                            width={500}
                                            height={1000}
                                            />
                                        </a>
                                    </Link>
                                    </div>

                                    <center> 
                                        <Link href='/portfolio/food-networking-app'>
                                            <a href="food-networking-app.php"><button className="btn myBtnDark">View</button></a>
                                        </Link>
                                    </center>
                                </div>
                            </div>
                        </div>

                        <div className='rightColumn'> 
                                <div className="section_wrapper">
                                    <div className="portfolioBox" style={{background: 'aqua'}}> 
                                        <div className="header_two_b"> 
                                            <h3> Metrics Dashboard </h3>
                                        </div>

                                        <div className='portfolioBoxImgWrapper zoom'>
                                            <Link href='/portfolio/dashboard'>
                                                <a> 
                                                <Image
                                                src="/dashboard.png"
                                                alt="Picture of the author"
                                                width={500}
                                                height={500}
                                                />
                                                </a>
                                            </Link>
                                        </div>
                                            <center> 
                                                <a><button className="btn myBtnDark">View</button> </a>
                                            </center>
                                    </div>
                                </div>

                                <div className="section_wrapper">
                                        <div className="portfolioBox" style={{background: '#949596'}}> 
                                            <div className="header_two"> 
                                                <h3> Social Site </h3>
                                            </div>

                                            <div className='portfolioBoxImgWrapper zoom'>
                                            <Link href='/portfolio/genepullsite'>
                                                <a> 
                                                <Image
                                                    src="/genepullHome.png"
                                                    alt="Picture of the author"
                                                    width={500}
                                                    height={500}
                                                    />
                                                </a>
                                            </Link>
                                            </div>
                                                <center> 
                                                    <Link href='/portfolio/genepullsite'>
                                                        <a><button className="btn myBtnDark">View</button> </a>
                                                    </Link>
                                                </center>
                                        </div>
                                </div>

                                <div className="section_wrapper">
                                    <div className="portfolioBox" style={{background: 'aqua'}}> 
                                        <div className="header_two_b"> 
                                            <h3> Simple Website </h3>
                                        </div>
                                        
                                        <div className='portfolioBoxImgWrapper zoom'>
                                            <Link href='/portfolio/bi-floors'>
                                                <a> 
                                                <Image
                                                    src="/bi-website.png"
                                                    alt="Picture of the author"
                                                    width={500}
                                                    height={500}
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <center> 
                                            <Link href='/portfolio/bi-floors'>
                                                <a href="bi-floors.php"><button className="btn myBtnDark">View</button> </a>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div> 
       
        </div>
    )
}


export default UXUI;

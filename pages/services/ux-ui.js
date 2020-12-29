import React from 'react'
import Image from 'next/image'

 const UXUI = () => {
    return (
        <div className='uxui'>

            <div className="primaryBlue-banner">
                <h1>UI DEVELOPMENT & DESIGN</h1>
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
                        <Image
                        src="/../public/mobile-interfaces.png"
                        alt="Picture of the author"
                        width={1200}
                        height={450}
                        />
                    </div>
                    
                    <center> 
                        <a href="logistics-software.php"> <button className="btn myBtnDark">View</button></a> 
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
                        <Image
                        src="/../public/wwo_app_1.png"
                        alt="mobile project"
                        width={500}
                        height={1000}
                        />
                    </div>
                           

                            <center> 
                            <a href="logistics-app.php"><button className="btn myBtnDark">View</button> </a>
                        </center>
                </div>
        </div>


        <div className="section_wrapper">
            <div className="portfolioBox" style={{background: '#949596' }}> 
                <div className="header_two"> 
                    <h3> Native App </h3>
                </div>

                <div className='portfolioBoxImgWrapper zoom'>
                <Image
                    src="/../public/knowFoodScreen1.png"
                    alt="Picture of the author"
                    width={500}
                    height={1000}
                    />
                </div>

                    <center> 
                        <a href="food-networking-app.php"><button className="btn myBtnDark">View</button> </a>
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
                            <Image
                                src="/../public/dashboard.png"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className="" 
                                />
                            </div>
                                <center> 
                                    <a href="dashboard.php"><button className="btn myBtnDark">View</button> </a>
                                </center>
                        </div>
                    </div>




                        <div className="section_wrapper">
                            <div className="portfolioBox" style={{background: '#949596'}}> 
                                <div className="header_two"> 
                                    <h3> Social Site </h3>
                                </div>

                                <div className='portfolioBoxImgWrapper zoom'>
                                <Image
                                    src="/../public/genepullHome.png"
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    />
                                </div>
                                    <center> 
                                        <a href="genepullsite.php"><button className="btn myBtnDark">View</button> </a>
                                    </center>
                            </div>
                        </div>



                    <div className="section_wrapper">
                        <div className="portfolioBox" style={{background: 'aqua'}}> 
                            <div className="header_two_b"> 
                                <h3> Simple Website </h3>
                            </div>
                            
                            <div className='portfolioBoxImgWrapper zoom'>
                            <Image
                                src="/../public/bi-website.png"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                />
                            </div>
                                <center> 
                                    <a href="bi-floors.php"><button className="btn myBtnDark">View</button> </a>
                                </center>
                        </div>
                    </div>
         </div>

   

        </div>



        </div>{/* End content area */}




            </div>

        </div>
    )
}


export default UXUI;

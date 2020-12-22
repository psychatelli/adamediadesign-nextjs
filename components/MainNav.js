


export const MainNav = () => {
    return (
            
    <div className="container-fluid">
        <div className="row">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.php"><img src="images/adamediadesign-logo.png" style = "width: 30px;"/></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              
              <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="ux-ui.php">Software & Web</a></li>
                        <li><a href="advertisements.php">Advertisements</a></li>
                      <li><a href="videos.php">Videos</a></li>
                       
                      </ul>
                </li>
                  
                  <li><a href="about.php">About </a></li>   
                  <li><a href="contact.php">Contact</a></li> 
                  
              </ul>
            </div>
          </div>
       </nav>
        </div>


        </div>
    )
}


export default MainNav;

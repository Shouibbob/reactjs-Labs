import './Header.css';
import logo from '../../assets/images/logo.svg';
import illustration from '../../assets/images/illustration-intro.png';
import curvy from '../../assets/images/bg-curvy-desktop.svg';
function Header(){
    return(
        <header>
        <nav>
           <div className="item1">
           <img src={logo} className="logo" />   
           </div>
           <div className="item2">
               <div>
                   <a href="#">Features</a>
               </div>
               <div>
                   <a href="#">Team</a>
               </div>
               <div>
                   <a href="#">SignIn</a>
               </div>
           </div>
        </nav>    
        <div className="Gallery">
            <img className="img1" src={illustration}/>
        </div>
        <div className="Gallery2">
            <img className="img2" src={curvy}/>
            <div className="desc">
            <div className="pragh1">
                <div className="Titl">
                   All your files in one secure location, accessible any where.
                </div>
                <div className="pragh2">
                    fylo stores all your most important files in one secure location.
                    Access them  wherever you need, share and collaborate with friends family, and co-workers.<br/><br/>
                    <button type="button" class="ed">Get Started</button>
                </div>
            </div>
        </div>
        
        </div>
        </header>
    )
}

export default Header;

    




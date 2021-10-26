import './Footer.css';
import logo from '../../assets/images/logo.svg';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
//import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return (
        <footer>
           <div className="primiary">
              <div className="secondry">
                  <div className="secondry1">
                      Get early access today
                  </div>
                  <div className="secondry2">
                  It only takesa minute to sign up and our free starter tier is extremely generous.
                   If you have any questions,
                   our support team would be happy to help you.
                  </div>
                  <div className="secondry3">
                       <input type="text"/>
                       <button type="button" class="ed2">Get Started for free</button>
                       <div className="error">
                          Please enter a valid email address
                       </div>
                  </div>
              </div>            
           </div>

           <img src={logo} className="logoF"/>
           <div className="primiary2">
                <div className="second1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sint praesentium quae labore dolore voluptate ipsum sapiente
                </div>
                <div className="second1" style={{marginLeft:'13px'}}>
                   <div>
                       +1-543-123-4567
                   </div>
                   <div>
                       example@fylo.com
                   </div>
                </div>
                <div className="second1">
                     <h3>About Us</h3>
                     <div>
                         jobs
                     </div>
                     <div>
                         Press
                     </div>
                     <div>
                         Blog
                     </div>
                </div>
                <div className="second1">
                   <h3>Contact Us</h3>
                   <div>
                       Teams
                   </div>
                   <div>
                       Privacy
                   </div>
                </div>
                <div className="second1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sint praesentium quae labore dolore voluptate ipsum sapiente.
                </div>
           </div>
        </footer>
    )
}

export default Footer;
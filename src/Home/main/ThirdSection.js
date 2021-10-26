import './ThirdSection.css';
import coma from '../../assets/images/bg-quotes.png';
import profile from '../../assets/images/profile-1.jpg';
import profile2 from '../../assets/images/profile-2.jpg';
import profile3 from '../../assets/images/profile-3.jpg';
function ThirdSection(){
    return (
        <section className="section3">
          <div className="po" style={{marginLeft:'4rem'}}>
           <img src={coma} className="point"/>
          </div>
           <div className="cont">
               <div className="IP">
                   <div>
                   Fylo has improved our team productivity by an order of magnitude.
                    Since making the Switch our team has become a well-oiled collaboration machine. 
                   Satish Patel Founder & CEO, Huddle
                   </div>
                   <div className="tail">
                      <div><img src={profile}/></div> <div className="new">Satish Patel<br/>Founder & CEO, Huddle</div>
                   </div>
               </div>
               <div className="IP">
                   <div>
                   Fylo has improved our team productivity by an order of magnitude.
                    Since making the Switch our team has become a well-oiled collaboration machine. 
                   Satish Patel Founder & CEO, Huddle
                   </div>
                   <div className="tail">
                      <div><img src={profile2}/></div> <div className="new">Bruce McKenzi<br/>Founder & CEO, Huddle</div>
                   </div>
               </div>
               <div className="IP">
                   <div>
                   Fylo has improved our team productivity by an order of magnitude.
                    Since making the Switch our team has become a well-oiled collaboration machine. 
                   Satish Patel Founder & CEO, Huddle
                   </div>
                   <div className="tail">
                      <div><img src={profile3}/></div> <div className="new">Iva Boyd<br/>Founder & CEO, Huddle</div>
                   </div>
               </div>
           </div>
        </section>
    )
}


export default ThirdSection;

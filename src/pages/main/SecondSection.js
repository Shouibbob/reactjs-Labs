import './SecondSection.css';
import stay from '../../assets/images/illustration-stay-productive.png';
import arrow from '../../assets/images/icon-arrow.svg';

function SecondSection(){
    return (
        <section className="section2">
            <div className="image">
                <img src={stay}/>
            </div>
            <div className="Text">
             <div className="description">
                 <div className="Ti">
                     Stay Productive,
                     wherever you are
                 </div>
                 <div className="Prag1">
                     Never let location be an issue when accessing your files.Fylo has you 
                     covered for all of your file storage needs.
                 </div>
                 <div className="Prag2">
                   securely share files and folders with friends, family and 
                   colleagues for live collaboration. No email attachments required. 
                 </div>
                 <div className="Prag3">
                   See how Fylo works <img src={arrow}/>     
                 </div>
             </div>   
            </div>
        </section>
    )
}


export default SecondSection;
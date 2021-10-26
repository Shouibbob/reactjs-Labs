import './FirstSection.css';
import access from '../../assets/images/icon-access-anywhere.svg';
import secure from '../../assets/images/icon-security.svg';
import file from '../../assets/images/icon-any-file.svg';
import collab from '../../assets/images/icon-collaboration.svg';

function FirstSection(){
    return(
        <section className="section1">
           <div className="main">
               <div className="item3">
                   <div>
                       <img src={access}/>
                   </div>
                   <div className="Tit" style={{marginBottom:'4px'}}>
                       Access your files, anywhere
                   </div>
                   <div className="des">
                       the ability to use a smartphone, tablet, or computer to access
                       your account means your files follow you everywhere 
                   </div>
               </div>
               <div className="item3">
                   <div>
                       <img src={secure}/>
                   </div>
                   <div className="Tit" style={{marginBottom:'8px'}}>
                       Security you can trust
                   </div>
                   <div>
                       factor authentication and user-controlled encryption are just a couple of the security features we allow to help
                       secures your files
                   </div>
               </div>
           </div>
           <div className="main2">
             <div className="item">
                 <div>
                    <img src={collab}/>
                 </div>
                 <div  className="Tit" style={{marginBottom:'8px'}}>
                     Real-Time collaboration
                 </div>
                 <div>
                     securely share files and folders with friends, family and 
                     colleagues for live collaboration. No email attachments required. 
                 </div>
             </div>
             <div className="item">
                   <div>
                       <img src={file}/>
                   </div>
                   <div  className="Tit" style={{marginBottom:'8px'}}>
                       Store any type of file
                   </div>
                   <div>
                       whether you are sharing holidays photos or work
                       document, Fylo has you covered allowing for all file
                       types to be securely stored and shared. 
                   </div>
               </div>
           </div>
        </section>
    )
}

export default FirstSection;
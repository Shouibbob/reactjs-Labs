import './Home.css';
import Header from'./header/Header'
import FirstSection from './main/FirstSection';
import SecondSection from './main/SecondSection';
import ThirdSection from './main/ThirdSection';
import Footer from './footer/Footer';
function Home(){
    return(
        <div className="body">
             <Header/>
             <FirstSection/>
             <SecondSection/>
             <ThirdSection/>
             <Footer/>
        </div>
    );
}

export default Home;
import "./Home.css";
// import Header from'./header/Header'
// import FirstSection from './main/FirstSection';
// import SecondSection from './main/SecondSection';
// import ThirdSection from './main/ThirdSection';
// import Footer from './footer/Footer';
//import LoginComponent from './authentecation/login/login';
import NavbarComponent from "./Navbar/Navbar";
import ToDoListComponent from "./To-Do/ToDoList";
//import ToDoForComponent from "./To-Do/ToDoForm";
//import RegistComponent from "./authentecation/registration/registraion";

function Home() {
  return (
    <div className="body">
      <NavbarComponent />
      <ToDoListComponent />
    </div>
  );
}

export default Home;

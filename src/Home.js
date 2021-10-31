import "./Home.css";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Component
// import Header from'./header/Header'
// import FirstSection from './main/FirstSection';
// import SecondSection from './main/SecondSection';
// import ThirdSection from './main/ThirdSection';
// import Footer from './footer/Footer';
import LoginComponent from "./pages/authentecation/login/login";
import NavbarComponent from "./components/Navbar/Navbar";
//import ToDoForComponent from "./To-Do/ToDoForm";
import RegistComponent from "./pages/authentecation/registration/registraion";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import NotFoundComponent from "./components/NotFound/NotFound";
import Movies from "./pages/Movies/Movies";

function Home() {
  return (
    <div className="body">
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/details/:id" exact component={MovieDetails} />
          <Route path="/register" exact component={RegistComponent} />
          <Route path="/Login" exact component={LoginComponent} />
          <Route path="*" exact component={NotFoundComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;

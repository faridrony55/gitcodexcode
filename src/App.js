import './App.css'; 
import Header from './Components/Header/Header';  
import Footer from './Components/Footer/Footer';
import Course from './Components/Course/Course';
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Frontpage from './Components/Frontpage/Frontpage'; 
import Projects from './Components/Projects/Projects';
import Team from './Components/Team/Team'; 
import Curser from './Components/DotRing/Curser'; 
import Portfolio from './Components/Portfolio/Portfolio'; 
import Freelancers from './Components/Freelancers/Freelancers'; 

function App() { 
 
  return (
    <Router>
    <section>  
      <Curser></Curser>

      {/* <div  onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}></div> */}

      <Header></Header>  
      <Switch>   
        <Route path='/' exact component={Frontpage}></Route> 
        <Route path='/course' component={Course}></Route> 
        <Route path='/about' component={About}></Route> 
        <Route path='/projects' component={Projects}></Route> 
        <Route path='/contact' component={Contact}></Route> 
        <Route path='/team' component={Team}></Route>    
        <Route path='/portfolio' component={Portfolio}></Route>
        <Route path='/freelancers' component={Freelancers}></Route>   
        
      </Switch>
        <Footer></Footer> 
    </section>

      </Router>
      
  );
}

 

export default App;

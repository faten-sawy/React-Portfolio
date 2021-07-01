
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Component/header/header'
import About from './Component/about/about'
import Skills from './Component/skills/skills';
import Portfolio from './Component/portfolio/portfolio';
import Contact from './Component/contact/contact';


function App() {
  return (
    <div >
    <Header/>
    <About/>
    <Skills/>  
    <Portfolio/> 
    <Contact/>
    </div>
  );
}

export default App;

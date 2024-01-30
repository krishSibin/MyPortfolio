
import './App.scss';
import Institute from './components/Institute/Institute';
import Contacts from './components/contacts/Contacts';

 import HomePage from './components/homepage/HomePage';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import './../src/components/education/Education.scss'



function App() {
  return (
    <div className="App">

    <section><Navbar/>
    <HomePage/>
    </section>

    <section>
      <Institute/>
   
    </section>
    <section>
      <Skills/>
      </section>

   


<Projects/>


  

    <section>
    <Contacts/>
    </section>
     
    </div>
  );
}

export default App;

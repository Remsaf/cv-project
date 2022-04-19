import react from 'react'
// import './App.css';
import Home from './component/Home';
import Department from './component/Department';
import './component/styles.css'
import Education from './component/Education';
import Experience from './component/Experience';


function App() {
  return (
    <div className="container">
      <Home/>
      
      <Department/>
      <Education/>
      <Experience/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  function toggleDarkMode () {
    setDarkMode(dark => !dark)
  }

  return (
    <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} />
        </div>
  );
}

export default App;

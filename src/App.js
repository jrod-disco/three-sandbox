import React, { useState, } from 'react';
import './App.css';

import Scene from './components/Scene';
import SettingsPanel from './components/SettingsPanel';

// import AppContext from './context';

const App = () => {
  
  const [showHelpers, setShowHelpers] = useState(true);
  const toggleShowHelpers = () => setShowHelpers(showHelpers => !showHelpers);

  return (
    <div className="App">

      <div style={{height:40, marginBottom: 20, marginLeft: 20, fontSize:18, fontWeight: 800}}>
        <br/>React THREE.JS Sandbox
      </div>

      <div className="Sandbox">

          <SettingsPanel 
            showHelpers = {showHelpers}
            toggleShowHelpers = { ()=>{ toggleShowHelpers();}}
          />
          
          <Scene 
            width='800' height='800'
            showHelpers = {showHelpers}
          />

      </div>

    </div>
  );

}

export default App
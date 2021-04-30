import './App.css';
import OurContext from './ourContext';
import Parent from "./Parent.js";
import { useState } from "react";

function App() {

  let countState = useState(0); //[count, setCount]
  return (
    <body>
      <div className = "App">
        <OurContext.Provider value={countState}>
          <div>
            <Parent />
          </div>    
        </OurContext.Provider>
      </div>
    </body>
  );
}

export default App;

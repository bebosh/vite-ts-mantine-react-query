import { useState } from 'react';
import { Icon } from './components/Icon';
import './App.css';
import { Caracters } from './components/Caracters';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
      <Icon />
      </div>
      <h1>Rick and Morthy Characters</h1>
      <div className="container">
      <Caracters />    
      </div>
    </div>
  );
}

export default App;

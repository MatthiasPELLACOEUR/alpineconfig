import React, { useState } from 'react';
import Header from './Header'
import Configurateur from './Configurateur'
// import logo from './logo.svg';
import './App.css';
import './All.css'

function App() {

  const [name, setModele] = useState('')

  return (
    <div>
      <Header />
      <Configurateur setModele={setModele}/>
    </div>
  );
}

export default App;

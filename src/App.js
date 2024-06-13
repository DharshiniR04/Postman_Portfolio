import React, { useState} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Content from './components/Content/Content';
import './App.css';

function App() {
  const [selected, setSelected] = useState('');

  return (
    <div className="App">
      <Topbar />
      <div className="main">
        <Sidebar setSelected={setSelected} />
        <Content selected={selected} />
      </div>
     
    </div>
  );
}

export default App;

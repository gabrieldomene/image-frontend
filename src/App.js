import './App.css';
import React, { useState } from 'react';

import SideBar from './components/dataBar/DataBar';
import Upload from './components/uploads/upload';
import Display from './components/rightDisplay/display';

function App() {
  const [currentDB, setCurrentDB] = useState("db-0")

  function changeCurrentDB(id) {
    setCurrentDB(id)
    console.log(this.currentDB)
  }

  return (
    <div className="container">
      <div className="logo">
        <div className="items">LOGO</div>
        <div className="items">Business Name</div>
        <div className="items">Est. 2020</div>
      </div>
      <div className="header">
        <Upload />
      </div>
      <div className="nav">
        <SideBar changeCurrentDB={changeCurrentDB}/>
      </div>
      <div className="nav2">
        <Display />
      </div>
      <div className="content">APP</div>
      <div className="footer">notas</div>
    </div>
  );
}

export default App;

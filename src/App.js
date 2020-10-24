import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
function App() {

  useEffect(() => {
    document.title = 'facebooki'
  })

  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* App body */}
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />


      </div>

    </div>
  );
}

export default App;

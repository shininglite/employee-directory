import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
      <Header />
      <Search />
      <Table />
      </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './common/header';
import Login from './admin/login';
import Dashboard from './admin/dashboard';
function App() {
  return (
    <div className='App'>
      <Header />
      <Login />
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';

import Header from './components/header/header.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Header className='header' />
      </div>
    );
  }
}

export default App;

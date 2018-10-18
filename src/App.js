import React, { Component } from 'react';
import './App.css';
import SearchAppBar from './searchAppBar';
import TitleCards from './titleCards';

class App extends Component {
  state = {
    titles: ""
  }
  
  onUpdate = val => {
    this.setState({
      titles: val
    }); 
  }

  render() {
    return (
      <div className="App">
        <SearchAppBar onUpdate={this.onUpdate} />
        <TitleCards titles={this.state.titles}/>
      </div>
    );
  }
}

export default App;

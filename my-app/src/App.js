import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: 'Business website',
          category: 'Web design'
        },
        {
          title: 'Social App',
          category: 'Mobile development'
        },
        {
          title: 'Ecommerce',
          category: 'Web development'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;

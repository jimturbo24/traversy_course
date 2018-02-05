import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [],
      firstName: "Bob",
      lastName: "Smith"
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Buisness Website',
        category: 'Web Design'
      },
      {
        title: 'Non-profit Website',
        category: 'Web Development'
      },
      {
        title: 'Personal Website',
        category: 'User Experience'
      }
    ]});
  }
  
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects} firstName={this.state.firstName} lastName={this.state.lastName}/>
      </div>
    );
  }
}

export default App;

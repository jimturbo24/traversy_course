import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/addProject';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [],
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Buisness Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Non-profit Website',
        category: 'Web Development'
      },
      {
        id: uuid.v4(),
        title: 'Personal Website',
        category: 'User Experience'
      }
    ]});
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects})
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState(projects: projects);
  }

  render() {
    return (
      <div className="App">
        My App
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <h3>Latest Projects</h3>
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Card from './card';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    const projectsEndpoint = 'src/projects.json';
    fetch(projectsEndpoint)
      .then(response => response.json())
      .then((data) => { this.setState({ projects: [...data] }); })
      .catch((error) => { console.error(error); });
  }
  render() {
    const cards = this.state.projects.map(project => <Card key={project.id} project={project} />);
    return (
      <section className="projects">
        <h2>PROJECTS</h2>
        {cards}
      </section>
    );
  }
}

export default Projects;

import React from 'react';
import EditableField from './EditableUsername';

export default class PageNavbar extends React.Component {

  constructor(props) {
    super(props);
    this. state = {
      username: ""
    };

    this.handleSave = this.handleSave.bind(this);
  }

 

  handleSave = (value) => {
    localStorage.setItem('username', value);
    this.setState({ username: value });
  }

  componentDidMount() {
    const storedData = localStorage.getItem('username');
    if (storedData) {
      this.setState(JSON.parse(storedData));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('username', JSON.stringify(this.state));
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
          <div class="app-icon mx-2"/>
          <a class="navbar-brand" href="#">My Book Searcher</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
          </div>

          <EditableField value="Default User" onSave={this.handleSave}/>
          <div class="user-icon">

          </div>
          
      </nav>

      
    )
  }
}
